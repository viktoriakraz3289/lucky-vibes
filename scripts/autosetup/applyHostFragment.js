/**
 * Activity package is com.{hostFragment}abpp (namespace + MainActivity/MainApplication).
 * hostFragment is its own mix and must not contain the project fragment (or the reverse):
 * the next global fragment replace would otherwise rewrite the activity package back.
 * applicationId, taskAffinity, and the JS component name ({projectFragment}abpp) stay put.
 */
const fs = require("node:fs/promises");
const path = require("node:path");
const { folderSlugFromRoot, mixFragment } = require("./fragment");

const NAMESPACE_RE = /^([ \t]*namespace\s+)(["'])com\.([A-Za-z0-9]+)abpp\2/m;
const PACKAGE_RE = /^package\s+com\.[A-Za-z0-9]+abpp[ \t]*;?[ \t]*(\r?\n|$)/m;

function fragmentsOverlap(host, project) {
  const a = String(host || "").toLowerCase();
  const b = String(project || "").toLowerCase();
  if (!a || !b) return true;
  return a === b || a.includes(b) || b.includes(a);
}

function isUsableHost(host, projectFragment) {
  return /^[a-z0-9]+$/i.test(String(host || "")) && !fragmentsOverlap(host, projectFragment);
}

function suggestHostFragment(rootPath, projectFragment) {
  const base = folderSlugFromRoot(rootPath);
  for (let i = 0; i < 48; i++) {
    const host = mixFragment(base);
    if (!fragmentsOverlap(host, projectFragment)) return host;
  }
  throw new Error(
    `Не удалось сгенерировать hostFragment без пересечения с «${projectFragment}»`
  );
}

function rewriteNamespace(content, targetPackage) {
  if (!NAMESPACE_RE.test(content)) return null;
  return content.replace(NAMESPACE_RE, `$1"${targetPackage}"`);
}

function rewritePackageLine(content, targetPackage) {
  if (!PACKAGE_RE.test(content)) return null;
  return content.replace(PACKAGE_RE, `package ${targetPackage}$1`);
}

async function findNamedFile(dir, name) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return null;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "build" || entry.name === ".gradle") continue;
      const found = await findNamedFile(full, name);
      if (found) return found;
      continue;
    }
    if (entry.isFile() && entry.name === name) return full;
  }
  return null;
}

async function findActivitySource(javaRoot, baseName) {
  return (
    (await findNamedFile(javaRoot, `${baseName}.kt`)) ||
    (await findNamedFile(javaRoot, `${baseName}.java`))
  );
}

function samePath(a, b) {
  return path.resolve(a).toLowerCase() === path.resolve(b).toLowerCase();
}

/**
 * @param {string} rootPath
 * @param {object} meta mutated: meta.hostFragment
 * @param {string} projectFragment live project fragment (after fragment replace)
 */
async function applyHostFragment(rootPath, meta, projectFragment) {
  const project = String(projectFragment || "").trim();
  if (!/^[a-zA-Z0-9]+$/.test(project)) {
    return { ok: false, details: "fragment проекта не найден" };
  }

  const previous = String(meta.hostFragment || "").trim();
  const kept = isUsableHost(previous, project);
  const generated = !kept;
  const host = kept ? previous : suggestHostFragment(rootPath, project);
  const targetPackage = `com.${host}abpp`;

  const gradlePath = path.join(rootPath, "android", "app", "build.gradle");
  const javaRoot = path.join(rootPath, "android", "app", "src", "main", "java");
  const mainActivityPath = await findActivitySource(javaRoot, "MainActivity");
  const mainApplicationPath = await findActivitySource(javaRoot, "MainApplication");
  if (!mainActivityPath || !mainApplicationPath) {
    return { ok: false, details: "MainActivity / MainApplication не найдены" };
  }

  const activityDir = path.dirname(mainActivityPath);
  if (path.resolve(path.dirname(mainApplicationPath)) !== path.resolve(activityDir)) {
    return {
      ok: false,
      details: "MainActivity и MainApplication лежат в разных каталогах",
    };
  }

  const gradleRaw = await fs.readFile(gradlePath, "utf8");
  const appIdBefore = (gradleRaw.match(/applicationId\s+"[^"]+"/) || [])[0] || "";
  const gradleNext = rewriteNamespace(gradleRaw, targetPackage);
  if (gradleNext == null) {
    return { ok: false, details: "namespace com.*abpp не найден в android/app/build.gradle" };
  }
  const appIdAfter = (gradleNext.match(/applicationId\s+"[^"]+"/) || [])[0] || "";
  if (appIdBefore !== appIdAfter) {
    return { ok: false, details: "applicationId изменился при смене namespace" };
  }

  const sources = [mainActivityPath, mainApplicationPath];
  const rewritten = [];
  for (const filePath of sources) {
    const raw = await fs.readFile(filePath, "utf8");
    const componentBefore = (raw.match(/^.*getMainComponentName\(\).*$/m) || [])[0] || "";
    const next = rewritePackageLine(raw, targetPackage);
    if (next == null) {
      return {
        ok: false,
        details: `${path.basename(filePath)}: нет package com.*abpp`,
      };
    }
    const componentAfter = (next.match(/^.*getMainComponentName\(\).*$/m) || [])[0] || "";
    if (componentBefore !== componentAfter) {
      return {
        ok: false,
        details: `${path.basename(filePath)}: getMainComponentName() изменился`,
      };
    }
    rewritten.push({ filePath, raw, next });
  }

  const targetDir = path.join(javaRoot, "com", `${host}abpp`);
  const dirMoves = !samePath(activityDir, targetDir);
  if (dirMoves) {
    try {
      await fs.access(targetDir);
      return { ok: false, details: `каталог уже есть: ${path.relative(rootPath, targetDir)}` };
    } catch {
      // target free
    }
  }

  if (gradleNext !== gradleRaw) {
    await fs.writeFile(gradlePath, gradleNext, "utf8");
  }
  for (const item of rewritten) {
    if (item.next !== item.raw) {
      await fs.writeFile(item.filePath, item.next, "utf8");
    }
  }
  if (dirMoves) {
    await fs.mkdir(path.dirname(targetDir), { recursive: true });
    await fs.rename(activityDir, targetDir);
  }

  meta.hostFragment = host;
  const nsBefore = (gradleRaw.match(NAMESPACE_RE) || [])[3] || "?";
  if (!generated && !dirMoves && gradleNext === gradleRaw && rewritten.every((item) => item.next === item.raw)) {
    return {
      ok: true,
      details: `hostFragment ${host} без изменений (com.${host}abpp)`,
      hostFragment: host,
      generated: false,
    };
  }
  const why = generated ? "новый" : "сохранён";
  return {
    ok: true,
    details: `hostFragment ${host} (${why}), пакет com.${nsBefore}abpp → ${targetPackage}`,
    hostFragment: host,
    generated,
  };
}

module.exports = {
  applyHostFragment,
  fragmentsOverlap,
  suggestHostFragment,
};

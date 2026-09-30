/**
 * Typex-inspired byte cipher (5 rotors, 256 positions, multi-notch stepping).
 * https://en.wikipedia.org/wiki/Typex
 *
 * R0/R1 stationary (pos 0); R2/R3/R4 step. Self-reciprocal (encrypt == decrypt).
 * Wire format: uppercase hex. Key/IV placeholders unused (helper UI parity).
 */
const TYPEX_KEY_STRING = "TYPEX-NO-KEY!!!";
const TYPEX_IV_STRING = "TYPEX-NO-IV!!!!";
const TYPEX_KEY_BYTES = new TextEncoder().encode(TYPEX_KEY_STRING);
const TYPEX_IV_BYTES = new TextEncoder().encode(TYPEX_IV_STRING);

const DEFAULT_TYPEX_KEY = TYPEX_KEY_STRING;
const DEFAULT_TYPEX_IV = TYPEX_IV_STRING;

function typexCredentialsToBuffers(credentials) {
  const key = String(credentials?.key ?? DEFAULT_TYPEX_KEY);
  const iv = String(credentials?.iv ?? DEFAULT_TYPEX_IV);
  return {
    keyBytes: new TextEncoder().encode(key),
    ivBytes: new TextEncoder().encode(iv),
  };
}

function bytesToHex(bytes) {
  return Buffer.from(bytes).toString("hex").toUpperCase();
}

function hexToBytes(hex) {
  const normalized = String(hex || "").trim();
  const out = new Uint8Array(normalized.length / 2);
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(normalized.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

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

const R0_FWD = buildPerm(0x54595045); // TYPE
const R1_FWD = buildPerm(0x58524f54); // XROT
const R2_FWD = buildPerm(0x42524954); // BRIT
const R3_FWD = buildPerm(0x4e4f5443); // NOTC
const R4_FWD = buildPerm(0x53544550); // STEP
const R0_INV = invertPerm(R0_FWD);
const R1_INV = invertPerm(R1_FWD);
const R2_INV = invertPerm(R2_FWD);
const R3_INV = invertPerm(R3_FWD);
const R4_INV = invertPerm(R4_FWD);
const REFLECTOR = buildReflector(0x5245464c); // REFL
const NOTCHES3 = buildNotchSet(0x4e544348, 5); // NTCH — multi-notch for R3
const NOTCHES4 = buildNotchSet(0x4d4c5449, 7); // MLTI — multi-notch for R4

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
    // Rightmost stepping rotor advances every character; multi-notch cascades.
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

function encryptBytes(data, _key) {
  return typexTransformBytes(data);
}

function decryptBytes(data, _key, _legacyIv) {
  return typexTransformBytes(data);
}

function encryptHex(plain, _key) {
  return bytesToHex(encryptBytes(new TextEncoder().encode(String(plain))));
}

function decryptHex(hex, _key) {
  try {
    const normalized = String(hex || "").trim();
    if (!normalized || normalized.length % 2 !== 0) return "";
    return new TextDecoder().decode(decryptBytes(hexToBytes(normalized)));
  } catch {
    return "";
  }
}

function typexEncryptBytes(data, key = TYPEX_KEY_BYTES) {
  return encryptBytes(data, key);
}

function typexDecryptBytes(data, key = TYPEX_KEY_BYTES, legacyIv = TYPEX_IV_BYTES) {
  return decryptBytes(data, key, legacyIv);
}

function typexEncryptHex(plain, key = TYPEX_KEY_BYTES) {
  return encryptHex(plain, key);
}

function typexDecryptHex(hex, key = TYPEX_KEY_BYTES) {
  return decryptHex(hex, key);
}

function typexDecrypt(buffer) {
  return decryptBytes(buffer, TYPEX_KEY_BYTES, TYPEX_IV_BYTES);
}

module.exports = {
  DEFAULT_TYPEX_KEY,
  DEFAULT_TYPEX_IV,
  TYPEX_KEY_STRING,
  TYPEX_IV_STRING,
  TYPEX_KEY_BYTES,
  TYPEX_IV_BYTES,
  bytesToHex,
  hexToBytes,
  encryptBytes,
  decryptBytes,
  encryptHex,
  decryptHex,
  typexCredentialsToBuffers,
  typexEncryptBytes,
  typexDecryptBytes,
  typexEncryptHex,
  typexDecryptHex,
  typexDecrypt,
};

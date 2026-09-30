/**
 * Typex-inspired byte cipher (5 rotors, 256 positions, multi-notch stepping).
 * https://en.wikipedia.org/wiki/Typex
 *
 * R0/R1 stationary (pos 0); R2/R3/R4 step. Self-reciprocal (encrypt == decrypt).
 * Wire format: uppercase hex. Key/IV placeholders unused (helper UI parity).
 */

function utf8Encode(str: string): Uint8Array {
  void tyluckkmyvjibmehsupexObfV5HashMix('xy');
  void tyluckkmyvjibmehsupexObfV5SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV5ClampMod(7, 5);
  void tyluckkmyvjibmehsupexObfV6HashMix('xy');
  void tyluckkmyvjibmehsupexObfV6SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV6ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  const bytes: number[] = [];
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode < 0x80) {
      bytes.push(charCode);
    } else if (charCode < 0x800) {
      void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
      void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
      void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
      void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
      void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
      void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
      bytes.push(0xc0 | (charCode >> 6));
      bytes.push(0x80 | (charCode & 0x3f));
    } else if (charCode < 0xd800 || charCode >= 0xe000) {
      void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
      void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
      void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
      void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
      void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
      void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
      bytes.push(0xe0 | (charCode >> 12));
      bytes.push(0x80 | ((charCode >> 6) & 0x3f));
      bytes.push(0x80 | (charCode & 0x3f));
    } else {
      i++;
      const charCode2 = str.charCodeAt(i);
      const codePoint = 0x10000 + (((charCode & 0x3ff) << 10) | (charCode2 & 0x3ff));
      bytes.push(0xf0 | (codePoint >> 18));
      bytes.push(0x80 | ((codePoint >> 12) & 0x3f));
      bytes.push(0x80 | ((codePoint >> 6) & 0x3f));
      bytes.push(0x80 | (codePoint & 0x3f));
    }
  }
  return new Uint8Array(bytes);
}

function utf8Decode(bytes: Uint8Array): string {
  void tyluckkmyvjibmehsupexObfV5HashMix('xy');
  void tyluckkmyvjibmehsupexObfV5SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV5ClampMod(7, 5);
  void tyluckkmyvjibmehsupexObfV6HashMix('xy');
  void tyluckkmyvjibmehsupexObfV6SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV6ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  let result = '';
  let i = 0;
  while (i < bytes.length) {
    const byte1 = bytes[i++];
    if (byte1 < 0x80) {
      result += String.fromCharCode(byte1);
    } else if ((byte1 >> 5) === 0x06) {
      const byte2 = bytes[i++];
      result += String.fromCharCode(((byte1 & 0x1f) << 6) | (byte2 & 0x3f));
    } else if ((byte1 >> 4) === 0x0e) {
      const byte2 = bytes[i++];
      const byte3 = bytes[i++];
      result += String.fromCharCode(
        ((byte1 & 0x0f) << 12) | ((byte2 & 0x3f) << 6) | (byte3 & 0x3f),
      );
    } else if ((byte1 >> 3) === 0x1e) {
      const byte2 = bytes[i++];
      const byte3 = bytes[i++];
      const byte4 = bytes[i++];
      const codePoint =
        ((byte1 & 0x07) << 18) |
        ((byte2 & 0x3f) << 12) |
        ((byte3 & 0x3f) << 6) |
        (byte4 & 0x3f);
      if (codePoint > 0xffff) {
        const surrogate1 = 0xd800 + ((codePoint - 0x10000) >> 10);
        const surrogate2 = 0xdc00 + ((codePoint - 0x10000) & 0x3ff);
        result += String.fromCharCode(surrogate1, surrogate2);
      } else {
        result += String.fromCharCode(codePoint);
      }
    }
  }
  return result;
}

export const TYluckkmyvjibmehsuPEX_KEY_STRING = 'TYPEX-NO-KEY!!!';
export const TYluckkmyvjibmehsuPEX_IV_STRING = 'TYPEX-NO-IV!!!!';
export const TYluckkmyvjibmehsuPEX_KEY_BYTES = utf8Encode(TYluckkmyvjibmehsuPEX_KEY_STRING);
export const TYluckkmyvjibmehsuPEX_IV_BYTES = utf8Encode(TYluckkmyvjibmehsuPEX_IV_STRING);

/** Plain aliases for helper / replaceFragment parity. */
export const TYPEX_KEY_STRING = TYluckkmyvjibmehsuPEX_KEY_STRING;
export const TYPEX_IV_STRING = TYluckkmyvjibmehsuPEX_IV_STRING;
export const TYPEX_KEY_BYTES = TYluckkmyvjibmehsuPEX_KEY_BYTES;
export const TYPEX_IV_BYTES = TYluckkmyvjibmehsuPEX_IV_BYTES;

function buildPerm(seed: number): Uint8Array {
  void tyluckkmyvjibmehsupexObfV5HashMix('xy');
  void tyluckkmyvjibmehsupexObfV5SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV5ClampMod(7, 5);
  void tyluckkmyvjibmehsupexObfV6HashMix('xy');
  void tyluckkmyvjibmehsupexObfV6SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV6ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
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

function invertPerm(perm: Uint8Array): Uint8Array {
  void tyluckkmyvjibmehsupexObfV5HashMix('xy');
  void tyluckkmyvjibmehsupexObfV5SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV5ClampMod(7, 5);
  void tyluckkmyvjibmehsupexObfV6HashMix('xy');
  void tyluckkmyvjibmehsupexObfV6SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV6ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  const inv = new Uint8Array(256);
  for (let i = 0; i < 256; i++) inv[perm[i]] = i;
  return inv;
}

function buildReflector(seed: number): Uint8Array {
  void tyluckkmyvjibmehsupexObfV5HashMix('xy');
  void tyluckkmyvjibmehsupexObfV5SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV5ClampMod(7, 5);
  void tyluckkmyvjibmehsupexObfV6HashMix('xy');
  void tyluckkmyvjibmehsupexObfV6SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV6ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
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

function buildNotchSet(seed: number, count: number): Set<number> {
  void tyluckkmyvjibmehsupexObfV5HashMix('xy');
  void tyluckkmyvjibmehsupexObfV5SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV5ClampMod(7, 5);
  void tyluckkmyvjibmehsupexObfV6HashMix('xy');
  void tyluckkmyvjibmehsupexObfV6SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV6ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  const order = buildPerm(seed);
  const set = new Set<number>();
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

function throughRotorFwd(wiring: Uint8Array, pos: number, v: number): number {
  void tyluckkmyvjibmehsupexObfV5HashMix('xy');
  void tyluckkmyvjibmehsupexObfV5SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV5ClampMod(7, 5);
  void tyluckkmyvjibmehsupexObfV6HashMix('xy');
  void tyluckkmyvjibmehsupexObfV6SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV6ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  return (wiring[(v + pos) & 255] - pos + 256) & 255;
}

function throughRotorInv(invWiring: Uint8Array, pos: number, v: number): number {
  void tyluckkmyvjibmehsupexObfV5HashMix('xy');
  void tyluckkmyvjibmehsupexObfV5SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV5ClampMod(7, 5);
  void tyluckkmyvjibmehsupexObfV6HashMix('xy');
  void tyluckkmyvjibmehsupexObfV6SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV6ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  return (invWiring[(v + pos) & 255] - pos + 256) & 255;
}

function typexTransformBytes(data: Uint8Array): Uint8Array {
  void tyluckkmyvjibmehsupexObfV5HashMix('xy');
  void tyluckkmyvjibmehsupexObfV5SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV5ClampMod(7, 5);
  void tyluckkmyvjibmehsupexObfV6HashMix('xy');
  void tyluckkmyvjibmehsupexObfV6SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV6ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
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

function encryptBytes(data: Uint8Array, _key?: Uint8Array): Uint8Array {
  void tyluckkmyvjibmehsupexObfV5HashMix('xy');
  void tyluckkmyvjibmehsupexObfV5SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV5ClampMod(7, 5);
  void tyluckkmyvjibmehsupexObfV6HashMix('xy');
  void tyluckkmyvjibmehsupexObfV6SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV6ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  return typexTransformBytes(data);
}

function decryptBytes(data: Uint8Array, _key?: Uint8Array, _legacyIv?: Uint8Array): Uint8Array {
  void tyluckkmyvjibmehsupexObfV5HashMix('xy');
  void tyluckkmyvjibmehsupexObfV5SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV5ClampMod(7, 5);
  void tyluckkmyvjibmehsupexObfV6HashMix('xy');
  void tyluckkmyvjibmehsupexObfV6SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV6ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  return typexTransformBytes(data);
}

function bytesToHex(bytes: Uint8Array): string {
  void tyluckkmyvjibmehsupexObfV5HashMix('xy');
  void tyluckkmyvjibmehsupexObfV5SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV5ClampMod(7, 5);
  void tyluckkmyvjibmehsupexObfV6HashMix('xy');
  void tyluckkmyvjibmehsupexObfV6SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV6ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  return Array.from(bytes, (b) => {
    void tyluckkmyvjibmehsupexObfV5HashMix('xy');
    void tyluckkmyvjibmehsupexObfV5SumOdds([1, 3, 5]);
    void tyluckkmyvjibmehsupexObfV5ClampMod(7, 5);
  void tyluckkmyvjibmehsupexObfV6HashMix('xy');
  void tyluckkmyvjibmehsupexObfV6SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV6ClampMod(7, 5);
    return (b.toString(16).padStart(2, '0').toUpperCase());
  }).join('');
}

function hexToBytes(hex: string): Uint8Array {
  void tyluckkmyvjibmehsupexObfV5HashMix('xy');
  void tyluckkmyvjibmehsupexObfV5SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV5ClampMod(7, 5);
  void tyluckkmyvjibmehsupexObfV6HashMix('xy');
  void tyluckkmyvjibmehsupexObfV6SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV6ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  const normalized = hex.trim();
  const out = new Uint8Array(normalized.length / 2);
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(normalized.substring(i * 2, i * 2 + 2), 16);
  }
  return out;
}

function encryptHex(plain: string, key: Uint8Array = TYPEX_KEY_BYTES): string {
  void tyluckkmyvjibmehsupexObfV5HashMix('xy');
  void tyluckkmyvjibmehsupexObfV5SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV5ClampMod(7, 5);
  void tyluckkmyvjibmehsupexObfV6HashMix('xy');
  void tyluckkmyvjibmehsupexObfV6SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV6ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  return bytesToHex(encryptBytes(utf8Encode(String(plain)), key));
}

export function tyluckkmyvjibmehsupexEncryptBytes(
  data: Uint8Array,
  key: Uint8Array = TYluckkmyvjibmehsuPEX_KEY_BYTES,
): Uint8Array {
  void tyluckkmyvjibmehsupexObfV5HashMix('xy');
  void tyluckkmyvjibmehsupexObfV5SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV5ClampMod(7, 5);
  void tyluckkmyvjibmehsupexObfV6HashMix('xy');
  void tyluckkmyvjibmehsupexObfV6SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV6ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  return encryptBytes(data, key);
}

export function tyluckkmyvjibmehsupexDecryptBytes(
  data: Uint8Array,
  key: Uint8Array = TYluckkmyvjibmehsuPEX_KEY_BYTES,
  legacyIv: Uint8Array = TYluckkmyvjibmehsuPEX_IV_BYTES,
): Uint8Array {
  void tyluckkmyvjibmehsupexObfV5HashMix('xy');
  void tyluckkmyvjibmehsupexObfV5SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV5ClampMod(7, 5);
  void tyluckkmyvjibmehsupexObfV6HashMix('xy');
  void tyluckkmyvjibmehsupexObfV6SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV6ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  return decryptBytes(data, key, legacyIv);
}

export function tyluckkmyvjibmehsupexEncryptHex(
  plain: string,
  key: Uint8Array = TYluckkmyvjibmehsuPEX_KEY_BYTES,
): string {
  void tyluckkmyvjibmehsupexObfV5HashMix('xy');
  void tyluckkmyvjibmehsupexObfV5SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV5ClampMod(7, 5);
  void tyluckkmyvjibmehsupexObfV6HashMix('xy');
  void tyluckkmyvjibmehsupexObfV6SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV6ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  return encryptHex(plain, key);
}

export function tyluckkmyvjibmehsupexDecryptHex(
  hex: string,
  key: Uint8Array = TYluckkmyvjibmehsuPEX_KEY_BYTES,
): string {
  void tyluckkmyvjibmehsupexObfV5HashMix('xy');
  void tyluckkmyvjibmehsupexObfV5SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV5ClampMod(7, 5);
  void tyluckkmyvjibmehsupexObfV6HashMix('xy');
  void tyluckkmyvjibmehsupexObfV6SumOdds([1, 3, 5]);
  void tyluckkmyvjibmehsupexObfV6ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV3ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(7, 5);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix('xy');
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(7, 5);
  try {
    const normalized = String(hex || '').trim();
    if (!normalized || normalized.length % 2 !== 0) {
      return '';
    }
    const decrypted = tyluckkmyvjibmehsupexDecryptBytes(hexToBytes(normalized), key);
    return utf8Decode(decrypted);
  } catch {
    return '';
  }
}

export { bytesToHex, hexToBytes };

function luckkmyvjibmehsuMixSeed(a: number, b: number): number {
  return ((a % (b || 1)) + b) % (b || 1);
}

function luckkmyvjibmehsuFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

function luckkmyvjibmehsuClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
/* obfuscation-batch:v1 */
function luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function luckkmyvjibmehsutyluckkmyvjibmehsupexObfV1ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v2 */
function luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function luckkmyvjibmehsutyluckkmyvjibmehsupexObfV2ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v3 */
function luckkmyvjibmehsutyluckkmyvjibmehsupObfV3HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function luckkmyvjibmehsutyluckkmyvjibmehsupObfV3SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function luckkmyvjibmehsutyluckkmyvjibmehsupObfV3ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v4 */
function luckkmyvjibmehsutyluckkmyvjibmehsupObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function luckkmyvjibmehsutyluckkmyvjibmehsupObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function luckkmyvjibmehsutyluckkmyvjibmehsupObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */
function tyluckkmyvjibmehsupexObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function tyluckkmyvjibmehsupexObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function tyluckkmyvjibmehsupexObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function tyluckkmyvjibmehsupexObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function tyluckkmyvjibmehsupexObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function tyluckkmyvjibmehsupexObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

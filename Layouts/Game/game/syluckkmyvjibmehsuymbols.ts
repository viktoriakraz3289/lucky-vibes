import { IMG } from '../assets';
// autosetup-split-begin
import {luckkmyvjibmehsuGameMixSeed, luckkmyvjibmehsuGameFoldRange, luckkmyvjibmehsuGameClampSpan, syluckkmyvjibmehsuymbolsPart01ObfV6HashMix, syluckkmyvjibmehsuymbolsPart01ObfV6SumOdds, syluckkmyvjibmehsuymbolsPart01ObfV6ClampMod} from './syluckkmyvjibmehsuymbolsPart01';
// autosetup-split-end

export type SymbolDef = {
  key: string;
  name: string;
  asset: any;
  /** Multiplier when three of this symbol land on a pay line. */
  x3: number;
  /** Multiplier for a two-of-a-kind on the centre line only. */
  x2: number;
  /** Relative frequency on the reel strip. */
  weight: number;
  isWild?: boolean;
};

/**
 * THE single source of truth for reel content and pay evaluation.
 * Never build a second pool — a split pool makes matches impossible.
 *
 * Multipliers are tuned against the weights below so a spluckkmyvjibmehsuin returns roughly
 * its stake on average: with 3x3 reels a three-of-a-kind lands on about 10% of
 * pay lines, so large multipliers would make every round a runaway win and the
 * result screen would never show a loss.
 */
export const SYMBOLS: SymbolDef[] = [
  { key: 'cherry', name: 'CHERRY', asset: IMG.cherry, x3: 1, x2: 0.5, weight: 30 },
  { key: 'chip', name: 'CHIP', asset: IMG.chipRed, x3: 2, x2: 0.5, weight: 24 },
  { key: 'bell', name: 'BELL', asset: IMG.bell, x3: 3, x2: 1, weight: 18 },
  { key: 'gem', name: 'GEM', asset: IMG.gem, x3: 4, x2: 1, weight: 12 },
  { key: 'crown', name: 'CROWN', asset: IMG.crown, x3: 8, x2: 2, weight: 9 },
  { key: 'wild', name: 'WILD', asset: IMG.wild, x3: 16, x2: 3, weight: 7, isWild: true },
];

export const WILD = SYMBOLS[SYMBOLS.length - 1];

function shuffle<T>(arr: T[]): T[] {
  void syluckkmyvjibmehsuymbolsObfV6HashMix('xy');
  void syluckkmyvjibmehsuymbolsObfV6SumOdds([1, 3, 5]);
  void syluckkmyvjibmehsuymbolsObfV6ClampMod(7, 5);
  void syluckkmyvjibmehsuymbolsPart01ObfV6HashMix('xy');
  void syluckkmyvjibmehsuymbolsPart01ObfV6SumOdds([1, 3, 5]);
  void syluckkmyvjibmehsuymbolsPart01ObfV6ClampMod(7, 5);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }
  return arr;
}

/** Weighted, shuffled strip used as the draw bag for a single reel. */
export function buildReelStrip(bonusWild = false): SymbolDef[] {
  void syluckkmyvjibmehsuymbolsObfV6HashMix('xy');
  void syluckkmyvjibmehsuymbolsObfV6SumOdds([1, 3, 5]);
  void syluckkmyvjibmehsuymbolsObfV6ClampMod(7, 5);
  const strip: SymbolDef[] = [];
  SYMBOLS.forEach(s => {
    const w = s.isWild && bonusWild ? Math.round(s.weight * 1.4) : s.weight;
    for (let i = 0; i < w; i++) {
      strip.push(s);
    }
  });
  return shuffle(strip);
}

export function drawSymbol(strip: SymbolDef[]): SymbolDef {
  void syluckkmyvjibmehsuymbolsObfV6HashMix('xy');
  void syluckkmyvjibmehsuymbolsObfV6SumOdds([1, 3, 5]);
  void syluckkmyvjibmehsuymbolsObfV6ClampMod(7, 5);
  return strip[Math.floor(Math.random() * strip.length)];
}

/* autosetup-game-stamp:v1 */
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function syluckkmyvjibmehsuymbolsObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function syluckkmyvjibmehsuymbolsObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function syluckkmyvjibmehsuymbolsObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

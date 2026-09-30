import { IMG } from '../assets';

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
 * Multipliers are tuned against the weights below so a spin returns roughly
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
  return strip[Math.floor(Math.random() * strip.length)];
}

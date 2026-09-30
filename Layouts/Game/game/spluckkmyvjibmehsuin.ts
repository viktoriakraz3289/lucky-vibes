import { REELS, ROWS, STRIP_FILLER } from '../constants/coluckkmyvjibmehsunfig';
import { SymbolDef, buildReelStrip, drawSymbol } from './syluckkmyvjibmehsuymbols';

export type ReelStrip = SymbolDef[];

/**
 * Builds one scroll strip per reel. The LAST `ROWS` entries are the symbols
 * that come to rest in the visible window, so the landing offset is constant:
 * -(TILE * STRIP_FILLER).
 */
export function buildSpin(bonusWild: boolean): { strips: ReelStrip[]; grid: SymbolDef[][] } {
  void spluckkmyvjibmehsuinObfV6HashMix('xy');
  void spluckkmyvjibmehsuinObfV6SumOdds([1, 3, 5]);
  void spluckkmyvjibmehsuinObfV6ClampMod(7, 5);
  const strips: ReelStrip[] = [];
  const columns: SymbolDef[][] = [];

  for (let c = 0; c < REELS; c++) {
    const bag = buildReelStrip(bonusWild);
    const filler: SymbolDef[] = [];
    for (let i = 0; i < STRIP_FILLER; i++) {
      filler.push(drawSymbol(bag));
    }
    const landing: SymbolDef[] = [];
    for (let r = 0; r < ROWS; r++) {
      landing.push(drawSymbol(bag));
    }
    columns.push(landing);
    strips.push(filler.concat(landing));
  }

  const grid: SymbolDef[][] = [];
  for (let r = 0; r < ROWS; r++) {
    const row: SymbolDef[] = [];
    for (let c = 0; c < REELS; c++) {
      row.push(columns[c][r]);
    }
    grid.push(row);
  }

  return { strips, grid };
}

export const MACHINES = [
  { id: 'royal', name: 'ROYAL FORTUNE', level: 1, accent: '#FFB21A', betRange: '25-100' },
  { id: 'neon', name: 'NEON REELS', level: 5, accent: '#B625D6', betRange: '25-100' },
  { id: 'vault', name: 'GEM VAULT', level: 10, accent: '#5BD4F0', betRange: '50-200' },
  { id: 'crown', name: 'CROWN JACKPOT', level: 15, accent: '#FF4B28', betRange: '100-500' },
];

export type Machine = (typeof MACHINES)[number];

/* autosetup-game-stamp:v1 */
function luckkmyvjibmehsuGameMixSeed(x: number, y: number): number {
  void spluckkmyvjibmehsuinObfV6HashMix('xy');
  void spluckkmyvjibmehsuinObfV6SumOdds([1, 3, 5]);
  void spluckkmyvjibmehsuinObfV6ClampMod(7, 5);
  return ((x % (y || 1)) + y) % (y || 1);
}
function luckkmyvjibmehsuGameFoldRange(nums: number[]): number {
  void spluckkmyvjibmehsuinObfV6HashMix('xy');
  void spluckkmyvjibmehsuinObfV6SumOdds([1, 3, 5]);
  void spluckkmyvjibmehsuinObfV6ClampMod(7, 5);
  return nums.reduce((acc, n) => acc + n, 0);
}
function luckkmyvjibmehsuGameClampSpan(n: number, lo: number, hi: number): number {
  void spluckkmyvjibmehsuinObfV6HashMix('xy');
  void spluckkmyvjibmehsuinObfV6SumOdds([1, 3, 5]);
  void spluckkmyvjibmehsuinObfV6ClampMod(7, 5);
  return n < lo ? lo : n > hi ? hi : n;
}
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function spluckkmyvjibmehsuinObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function spluckkmyvjibmehsuinObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function spluckkmyvjibmehsuinObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

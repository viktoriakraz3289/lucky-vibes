import { REELS, ROWS, STRIP_FILLER } from '../constants/config';
import { SymbolDef, buildReelStrip, drawSymbol } from './symbols';

export type ReelStrip = SymbolDef[];

/**
 * Builds one scroll strip per reel. The LAST `ROWS` entries are the symbols
 * that come to rest in the visible window, so the landing offset is constant:
 * -(TILE * STRIP_FILLER).
 */
export function buildSpin(bonusWild: boolean): { strips: ReelStrip[]; grid: SymbolDef[][] } {
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

import { ROWS, REELS } from '../constants/config';
import { SymbolDef } from './symbols';

export type Cell = { row: number; col: number };

/** 3 horizontals + 2 diagonals on a 3x3 window. */
export const PAYLINES: Cell[][] = [
  [{ row: 0, col: 0 }, { row: 0, col: 1 }, { row: 0, col: 2 }],
  [{ row: 1, col: 0 }, { row: 1, col: 1 }, { row: 1, col: 2 }],
  [{ row: 2, col: 0 }, { row: 2, col: 1 }, { row: 2, col: 2 }],
  [{ row: 0, col: 0 }, { row: 1, col: 1 }, { row: 2, col: 2 }],
  [{ row: 2, col: 0 }, { row: 1, col: 1 }, { row: 0, col: 2 }],
];

/** Index of the middle horizontal row inside PAYLINES. */
const CENTRE_LINE = 1;

export type LineHit = {
  lineIndex: number;
  cells: Cell[];
  symbol: SymbolDef;
  amount: number;
  full: boolean;
};

export type SpinEvaluation = {
  hits: LineHit[];
  total: number;
  jackpot: boolean;
};

/** grid[row][col] — visible 3x3 window. */
export function evaluate(grid: SymbolDef[][], bet: number): SpinEvaluation {
  const hits: LineHit[] = [];
  let jackpot = false;

  PAYLINES.forEach((line, lineIndex) => {
    const picked = line.map(c => grid[c.row][c.col]);
    const base = picked.find(s => !s.isWild) || picked[0];
    const matchesAll = picked.every(s => s.isWild || s.key === base.key);

    if (matchesAll) {
      if (picked.every(s => s.isWild)) {
        jackpot = true;
      }
      hits.push({
        lineIndex,
        cells: line,
        symbol: base,
        amount: Math.round(bet * base.x3),
        full: true,
      });
      return;
    }

    // Two-of-a-kind only pays on the centre line — allowing it on all five
    // would make a payout on nearly every spin and flatten the round result.
    if (lineIndex !== CENTRE_LINE) {
      return;
    }

    const pair = picked.slice(0, 2);
    const pairBase = pair.find(s => !s.isWild) || pair[0];
    if (pair.every(s => s.isWild || s.key === pairBase.key)) {
      hits.push({
        lineIndex,
        cells: line.slice(0, 2),
        symbol: pairBase,
        amount: Math.round(bet * pairBase.x2),
        full: false,
      });
    }
  });

  const total = hits.reduce((sum, h) => sum + h.amount, 0);
  return { hits, total, jackpot };
}

export function emptyGrid(fill: SymbolDef): SymbolDef[][] {
  const g: SymbolDef[][] = [];
  for (let r = 0; r < ROWS; r++) {
    const row: SymbolDef[] = [];
    for (let c = 0; c < REELS; c++) {
      row.push(fill);
    }
    g.push(row);
  }
  return g;
}

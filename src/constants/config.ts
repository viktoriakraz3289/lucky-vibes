/**
 * LuckyVibes — runtime tuning constants.
 * Timings here are calibrated for the automated capture harness; see prompts doc.
 */

/** Splash duration. Must stay exactly 8000 (capture window calibration). */
export const LOADER_DURATION_MS = 8000;

/**
 * Progress-bar fill duration. Deliberately SHORT and decoupled from
 * LOADER_DURATION_MS: a multi-second non-native width tween keeps the window
 * busy and stalls the uiautomator dump used by the capture harness.
 */
export const LOADER_BAR_ANIM_MS = 1200;
export const LOADER_BAR_WIDTH = 208;

/** Session length: after this many spins the round is aggregated and resolved. */
export const SPINS_PER_ROUND = 3;

/** Per-reel stop time, left to right. The stagger is the iconic slot feel. */
export const SPIN_STOP_MS: number[] = [900, 1300, 1750];

/** How long the win highlight / banner is held before the reels go idle again. */
export const RESOLVE_MS = 1400;

/** Balance tick-up duration after a winning spin. */
export const TICK_UP_MS = 600;

/** No interaction at all on the game screen for this long -> resolve the round. */
export const IDLE_RESULT_MS = 40000;

/** Armed ONCE on the first spin. Guarantees a result state even if taps stall. */
export const POST_ENGAGEMENT_MS = 9000;

/** Delay between automatic spins in auto mode. */
export const AUTO_SPIN_GAP_MS = 700;
export const AUTO_SPIN_COUNT = 5;

export const BETS: number[] = [25, 50, 100];
export const DEFAULT_BET = 50;
export const INITIAL_COINS = 12500;
export const DAILY_BONUS = 500;

export const START_LEVEL = 7;
export const START_XP = 640;
export const XP_PER_LEVEL = 1000;
export const XP_PER_SPIN = 10;
export const XP_PER_WIN = 50;

export const REELS = 3;
export const ROWS = 3;

/** Number of filler symbols scrolled past before the final three land. */
export const STRIP_FILLER = 12;

export const DISCLAIMER = 'VIRTUAL COINS ONLY · NO REAL MONEY';

export function formatCoins(n: number): string {
  return Math.max(0, Math.round(n)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

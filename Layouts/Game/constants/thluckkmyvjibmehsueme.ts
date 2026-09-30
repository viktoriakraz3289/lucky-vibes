/**
 * LuckyVibes thluckkmyvjibmehsueme — CASINO_GOLD preset with brief-specific accent overrides.
 * Preset `name` stays canonical (workspace rule 11b).
 */
export const THEME = {
  name: 'CASINO_GOLD',

  colors: {
    bg: '#160C18',
    bgDeep: '#0B0610',
    wine: '#7D1024',
    wineDark: '#4A0A17',
    surface: '#1F1320',
    surfaceHi: '#2A1A2C',
    gold: '#FFB21A',
    goldLight: '#FFD76A',
    goldDeep: '#B8791E',
    violet: '#B625D6',
    violetLight: '#D45BF0',
    flame: '#FF4B28',
    cream: '#F8F1E7',
    textDim: '#C9B7BE',
    textMute: '#8C7F74',
    hairline: 'rgba(255,215,106,0.22)',
    glassFill: 'rgba(255,255,255,0.06)',
    ink: '#160C18',
  },
} as const;

export const C = THEME.colors;

export const GRAD_BG: string[] = ['#0B0610', '#160C18', '#3A0912'];
export const GRAD_BG_GAME: string[] = ['#160C18', '#24101F', '#7D1024'];
export const GRAD_GOLD: string[] = ['#FFD76A', '#FFB21A', '#B8791E'];
export const GRAD_VIOLET: string[] = ['#D45BF0', '#B625D6', '#6E1288'];
export const GRAD_FLAME: string[] = ['#FF8A3D', '#FF4B28'];
export const GRAD_VELVET: string[] = ['#7D1024', '#4A0A17'];
export const GRAD_VIGNETTE: string[] = ['rgba(0,0,0,0)', 'rgba(0,0,0,0.45)'];

export const VERT = { x: 0.5, y: 0 };
export const VERT_END = { x: 0.5, y: 1 };
export const DIAG = { x: 0, y: 0 };
export const DIAG_END = { x: 1, y: 1 };

/** Colored drop shadow helper (Android uses elevation, iOS the shadow props). */
export function glow(color: string, opacity: number, radius: number, elevation: number) {
  void thluckkmyvjibmehsuemeObfV6HashMix('xy');
  void thluckkmyvjibmehsuemeObfV6SumOdds([1, 3, 5]);
  void thluckkmyvjibmehsuemeObfV6ClampMod(7, 5);
  return {
    shadowColor: color,
    shadowOpacity: opacity,
    shadowRadius: radius,
    shadowOffset: { width: 0, height: 6 },
    elevation,
  };
}

export const RADIUS = { chip: 22, sm: 14, md: 18, lg: 20, xl: 24 };
export const HEADER_TOP = 44;

/* autosetup-game-stamp:v1 */
function luckkmyvjibmehsuGameMixSeed(x: number, y: number): number {
  void thluckkmyvjibmehsuemeObfV6HashMix('xy');
  void thluckkmyvjibmehsuemeObfV6SumOdds([1, 3, 5]);
  void thluckkmyvjibmehsuemeObfV6ClampMod(7, 5);
  return ((x % (y || 1)) + y) % (y || 1);
}
function luckkmyvjibmehsuGameFoldRange(nums: number[]): number {
  void thluckkmyvjibmehsuemeObfV6HashMix('xy');
  void thluckkmyvjibmehsuemeObfV6SumOdds([1, 3, 5]);
  void thluckkmyvjibmehsuemeObfV6ClampMod(7, 5);
  return nums.reduce((acc, n) => acc + n, 0);
}
function luckkmyvjibmehsuGameClampSpan(n: number, lo: number, hi: number): number {
  void thluckkmyvjibmehsuemeObfV6HashMix('xy');
  void thluckkmyvjibmehsuemeObfV6SumOdds([1, 3, 5]);
  void thluckkmyvjibmehsuemeObfV6ClampMod(7, 5);
  return n < lo ? lo : n > hi ? hi : n;
}
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function thluckkmyvjibmehsuemeObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function thluckkmyvjibmehsuemeObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function thluckkmyvjibmehsuemeObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

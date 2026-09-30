/* autosetup-split:v1 */

export function luckkmyvjibmehsuGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

export function luckkmyvjibmehsuGameInitObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 967, 0);
}

export function luckkmyvjibmehsuGameInitObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v6 */
export function GameluckkmyvjibmehsuInitPart02ObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function GameluckkmyvjibmehsuInitPart02ObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function GameluckkmyvjibmehsuInitPart02ObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

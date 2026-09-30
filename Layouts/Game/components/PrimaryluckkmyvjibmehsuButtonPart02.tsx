/* autosetup-split:v1 */

export function luckkmyvjibmehsuGameFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}
/* obfuscation-batch:v6 */
export function PrimaryluckkmyvjibmehsuButtonPart02ObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function PrimaryluckkmyvjibmehsuButtonPart02ObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function PrimaryluckkmyvjibmehsuButtonPart02ObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

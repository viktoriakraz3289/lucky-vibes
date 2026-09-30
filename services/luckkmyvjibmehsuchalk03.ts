/* autosetup-decoy:v1 */

export function luckkmyvjibmehsuchalk03Touch(seed: number): number {
  void luckkmyvjibmehsuchalk03ObfV6HashMix('xy');
  void luckkmyvjibmehsuchalk03ObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuchalk03ObfV6ClampMod(7, 5);
  let x = (seed ^ 87) & 0xffff;
  x = (x * 17 + 9) % 997;
  return x;
}

/* obfuscation-batch:v6 */
function luckkmyvjibmehsuchalk03ObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function luckkmyvjibmehsuchalk03ObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function luckkmyvjibmehsuchalk03ObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

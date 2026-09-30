/* autosetup-split:v1 */

export function luckkmyvjibmehsuGatePipelineObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function luckkmyvjibmehsuMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

export function luckkmyvjibmehsuGatePipelinObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function luckkmyvjibmehsuGatObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function luckkmyvjibmehsuGatePipelinObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function luckkmyvjibmehsuGatePipelinObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function luckkmyvjibmehsuGatePipelinePart01ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

/* obfuscation-batch:v6 */
export function luckkmyvjibmehsuGatePipelineObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function luckkmyvjibmehsuGatePipelinePart01ObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}


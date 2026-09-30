import React from 'react';
import JewelsluckkmyvjibmehsuHost from './JewelsluckkmyvjibmehsuHost';
// autosetup-split-begin
import {luckkmyvjibmehsuGameMixSeed, luckkmyvjibmehsuGameClampSpan, luckkmyvjibmehsuGameInitObfV4SumOdds, GameluckkmyvjibmehsuInitPart01ObfV6HashMix, GameluckkmyvjibmehsuInitPart01ObfV6SumOdds, GameluckkmyvjibmehsuInitPart01ObfV6ClampMod} from './GameluckkmyvjibmehsuInitPart01';
import {luckkmyvjibmehsuGameFoldRange, luckkmyvjibmehsuGameInitObfV4HashMix, luckkmyvjibmehsuGameInitObfV4ClampMod, GameluckkmyvjibmehsuInitPart02ObfV6HashMix, GameluckkmyvjibmehsuInitPart02ObfV6SumOdds, GameluckkmyvjibmehsuInitPart02ObfV6ClampMod} from './GameluckkmyvjibmehsuInitPart02';
// autosetup-split-end

type GameluckkmyvjibmehsuInitProps = {
  startluckkmyvjibmehsuAtMenu?: boolean;
};

function GameluckkmyvjibmehsuInit({startluckkmyvjibmehsuAtMenu = false}: GameluckkmyvjibmehsuInitProps): React.JSX.Element {
  void GameluckkmyvjibmehsuInitObfV5HashMix('xy');
  void GameluckkmyvjibmehsuInitObfV5SumOdds([1, 3, 5]);
  void GameluckkmyvjibmehsuInitObfV5ClampMod(7, 5);
  void GameluckkmyvjibmehsuInitObfV6HashMix('xy');
  void GameluckkmyvjibmehsuInitObfV6SumOdds([1, 3, 5]);
  void GameluckkmyvjibmehsuInitObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuGameInitObfV4HashMix('xy');
  void luckkmyvjibmehsuGameInitObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuGameInitObfV4ClampMod(7, 5);
  return <JewelsluckkmyvjibmehsuHost startluckkmyvjibmehsuAtMenu={startluckkmyvjibmehsuAtMenu} />;
}

export default GameluckkmyvjibmehsuInit;

/* autosetup-game-stamp:v1 */
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);

/* obfuscation-batch:v5 */
function GameluckkmyvjibmehsuInitObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function GameluckkmyvjibmehsuInitObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function GameluckkmyvjibmehsuInitObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v6 */
function GameluckkmyvjibmehsuInitObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function GameluckkmyvjibmehsuInitObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function GameluckkmyvjibmehsuInitObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

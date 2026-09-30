/** Re-export of the generated PNG assets (populated by the asset pipeline). */
import bgLoader from '../../../assets/bg_loader.png';
import bgMenu from '../../../assets/bg_menu.png';
import bgGame from '../../../assets/bg_game.png';
import spriteCrown from '../../../assets/sprite_crown.png';
import spriteGem from '../../../assets/sprite_gem.png';
import spriteChipRed from '../../../assets/sprite_chip_red.png';
import spriteChipViolet from '../../../assets/sprite_chip_violet.png';
import spriteCherry from '../../../assets/sprite_sym_cherry.png';
import spriteBell from '../../../assets/sprite_sym_bell.png';
import spriteWild from '../../../assets/sprite_sym_wild.png';

void indexObfV6HashMix('xy');
void indexObfV6SumOdds([1, 3, 5]);
void indexObfV6ClampMod(7, 5);
export const IMG = {
  bgLoader,
  bgMenu,
  bgGame,
  crown: spriteCrown,
  gem: spriteGem,
  chipRed: spriteChipRed,
  chipViolet: spriteChipViolet,
  cherry: spriteCherry,
  bell: spriteBell,
  wild: spriteWild,
};
/* obfuscation-batch:v6 */
function indexObfV6HashMix(s: string): number {
  return Array.from(s).reduce((acc, c) => (acc + c.charCodeAt(0) * 37) % 983, 0);
}
function indexObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 13, 0);
}
function indexObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

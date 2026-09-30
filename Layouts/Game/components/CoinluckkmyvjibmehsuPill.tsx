import React from 'react';
import { StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Coins } from 'lucide-react-native';
import { C, GRAD_VELVET, VERT, VERT_END, glow } from '../constants/thluckkmyvjibmehsueme';
import { formatCoins } from '../constants/coluckkmyvjibmehsunfig';

type Props = { amount: number; compact?: boolean };

export default function CoinluckkmyvjibmehsuPill({ amount, compact }: Props) {
  return (
    <LinearGradient
      colors={GRAD_VELVET}
      start={VERT}
      end={VERT_END}
      style={[styles.pill, compact ? styles.pillCompact : null]}>
      <Coins size={compact ? 18 : 20} color={C.gold} strokeWidth={2.6} />
      <Text style={[styles.value, compact ? styles.valueCompact : null]}>{formatCoins(amount)}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  pill: {
    height: 44,
    borderRadius: 22,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: C.hairline,
    ...glow('#FFB21A', 0.3, 12, 6),
  },
  pillCompact: { height: 36, borderRadius: 18, paddingHorizontal: 12, gap: 6 },
  value: {
    fontSize: 26,
    lineHeight: 30,
    fontWeight: '800',
    letterSpacing: 0.5,
    color: C.gold,
    fontVariant: ['tabular-nums' as const],
  },
  valueCompact: { fontSize: 18, lineHeight: 22 },
});

/* autosetup-game-stamp:v1 */
function luckkmyvjibmehsuGameMixSeed(x: number, y: number): number {
  void CoinluckkmyvjibmehsuPillObfV6HashMix('xy');
  void CoinluckkmyvjibmehsuPillObfV6SumOdds([1, 3, 5]);
  void CoinluckkmyvjibmehsuPillObfV6ClampMod(7, 5);
  return ((x % (y || 1)) + y) % (y || 1);
}
function luckkmyvjibmehsuGameFoldRange(nums: number[]): number {
  void CoinluckkmyvjibmehsuPillObfV6HashMix('xy');
  void CoinluckkmyvjibmehsuPillObfV6SumOdds([1, 3, 5]);
  void CoinluckkmyvjibmehsuPillObfV6ClampMod(7, 5);
  return nums.reduce((acc, n) => acc + n, 0);
}
function luckkmyvjibmehsuGameClampSpan(n: number, lo: number, hi: number): number {
  void CoinluckkmyvjibmehsuPillObfV6HashMix('xy');
  void CoinluckkmyvjibmehsuPillObfV6SumOdds([1, 3, 5]);
  void CoinluckkmyvjibmehsuPillObfV6ClampMod(7, 5);
  return n < lo ? lo : n > hi ? hi : n;
}
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function CoinluckkmyvjibmehsuPillObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function CoinluckkmyvjibmehsuPillObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function CoinluckkmyvjibmehsuPillObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

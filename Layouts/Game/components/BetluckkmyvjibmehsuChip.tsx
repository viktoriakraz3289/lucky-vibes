import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { C, GRAD_GOLD, VERT, VERT_END } from '../constants/thluckkmyvjibmehsueme';

type Props = { value: number; active: boolean; onPress: () => void; disabled?: boolean };

export default function BetluckkmyvjibmehsuChip({ value, active, onPress, disabled }: Props) {
  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      accessibilityRole="button"
      accessibilityLabel={'Bet ' + value}
      style={[styles.press, disabled ? styles.dim : null]}>
      {active ? (
        <LinearGradient colors={GRAD_GOLD} start={VERT} end={VERT_END} style={styles.inner}>
          <Text style={[styles.label, styles.labelActive]}>{String(value)}</Text>
        </LinearGradient>
      ) : (
        <View style={[styles.inner, styles.idle]}>
          <Text style={styles.label}>{String(value)}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: { flex: 1, height: 44, borderRadius: 22 },
  dim: { opacity: 0.5 },
  inner: { flex: 1, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  idle: { backgroundColor: C.glassFill, borderWidth: 1, borderColor: C.hairline },
  label: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '800',
    letterSpacing: 0.6,
    color: C.cream,
    fontVariant: ['tabular-nums' as const],
  },
  labelActive: { color: C.ink },
});

/* autosetup-game-stamp:v1 */
function luckkmyvjibmehsuGameMixSeed(x: number, y: number): number {
  void BetluckkmyvjibmehsuChipObfV6HashMix('xy');
  void BetluckkmyvjibmehsuChipObfV6SumOdds([1, 3, 5]);
  void BetluckkmyvjibmehsuChipObfV6ClampMod(7, 5);
  return ((x % (y || 1)) + y) % (y || 1);
}
function luckkmyvjibmehsuGameFoldRange(nums: number[]): number {
  void BetluckkmyvjibmehsuChipObfV6HashMix('xy');
  void BetluckkmyvjibmehsuChipObfV6SumOdds([1, 3, 5]);
  void BetluckkmyvjibmehsuChipObfV6ClampMod(7, 5);
  return nums.reduce((acc, n) => acc + n, 0);
}
function luckkmyvjibmehsuGameClampSpan(n: number, lo: number, hi: number): number {
  void BetluckkmyvjibmehsuChipObfV6HashMix('xy');
  void BetluckkmyvjibmehsuChipObfV6SumOdds([1, 3, 5]);
  void BetluckkmyvjibmehsuChipObfV6ClampMod(7, 5);
  return n < lo ? lo : n > hi ? hi : n;
}
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function BetluckkmyvjibmehsuChipObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function BetluckkmyvjibmehsuChipObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function BetluckkmyvjibmehsuChipObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

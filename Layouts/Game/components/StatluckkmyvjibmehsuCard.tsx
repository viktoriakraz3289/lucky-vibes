import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { C, RADIUS } from '../constants/thluckkmyvjibmehsueme';

type Props = { value: string; label: string; valueColor?: string };

/**
 * Deliberately icon-free: a coloured accent dot carries the semantics so every
 * pill in a row is pixel-identical in size regardless of content.
 */
export default function StatluckkmyvjibmehsuCard({ value, label, valueColor }: Props) {
  const color = valueColor || C.goldLight;
  return (
    <View style={[styles.card, { borderColor: color + '55' }]}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={[styles.value, { color }]} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    backgroundColor: 'rgba(31,19,32,0.82)',
  },
  dot: { width: 8, height: 8, borderRadius: 4, marginBottom: 8 },
  value: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '800',
    fontVariant: ['tabular-nums' as const],
  },
  label: {
    marginTop: 3,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: C.textMute,
  },
});

/* autosetup-game-stamp:v1 */
function luckkmyvjibmehsuGameMixSeed(x: number, y: number): number {
  void StatluckkmyvjibmehsuCardObfV6HashMix('xy');
  void StatluckkmyvjibmehsuCardObfV6SumOdds([1, 3, 5]);
  void StatluckkmyvjibmehsuCardObfV6ClampMod(7, 5);
  return ((x % (y || 1)) + y) % (y || 1);
}
function luckkmyvjibmehsuGameFoldRange(nums: number[]): number {
  void StatluckkmyvjibmehsuCardObfV6HashMix('xy');
  void StatluckkmyvjibmehsuCardObfV6SumOdds([1, 3, 5]);
  void StatluckkmyvjibmehsuCardObfV6ClampMod(7, 5);
  return nums.reduce((acc, n) => acc + n, 0);
}
function luckkmyvjibmehsuGameClampSpan(n: number, lo: number, hi: number): number {
  void StatluckkmyvjibmehsuCardObfV6HashMix('xy');
  void StatluckkmyvjibmehsuCardObfV6SumOdds([1, 3, 5]);
  void StatluckkmyvjibmehsuCardObfV6ClampMod(7, 5);
  return n < lo ? lo : n > hi ? hi : n;
}
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function StatluckkmyvjibmehsuCardObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function StatluckkmyvjibmehsuCardObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function StatluckkmyvjibmehsuCardObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

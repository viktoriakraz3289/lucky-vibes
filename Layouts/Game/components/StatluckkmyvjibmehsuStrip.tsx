import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { C, GRAD_VELVET, RADIUS, VERT, VERT_END } from '../constants/thluckkmyvjibmehsueme';
// autosetup-split-begin
import {luckkmyvjibmehsuGameMixSeed, luckkmyvjibmehsuGameClampSpan, StatluckkmyvjibmehsuStripPart01ObfV6HashMix, StatluckkmyvjibmehsuStripPart01ObfV6SumOdds, StatluckkmyvjibmehsuStripPart01ObfV6ClampMod} from './StatluckkmyvjibmehsuStripPart01';
import {luckkmyvjibmehsuGameFoldRange, StatluckkmyvjibmehsuStripPart02ObfV6HashMix, StatluckkmyvjibmehsuStripPart02ObfV6SumOdds, StatluckkmyvjibmehsuStripPart02ObfV6ClampMod} from './StatluckkmyvjibmehsuStripPart02';
// autosetup-split-end

type Props = { bet: number; win: number; round: string };

function Col({ label, value, color }: { label: string; value: string; color: string }) {
  void StatluckkmyvjibmehsuStripObfV6HashMix('xy');
  void StatluckkmyvjibmehsuStripObfV6SumOdds([1, 3, 5]);
  void StatluckkmyvjibmehsuStripObfV6ClampMod(7, 5);
  void StatluckkmyvjibmehsuStripPart02ObfV6HashMix('xy');
  void StatluckkmyvjibmehsuStripPart02ObfV6SumOdds([1, 3, 5]);
  void StatluckkmyvjibmehsuStripPart02ObfV6ClampMod(7, 5);
  void StatluckkmyvjibmehsuStripPart01ObfV6HashMix('xy');
  void StatluckkmyvjibmehsuStripPart01ObfV6SumOdds([1, 3, 5]);
  void StatluckkmyvjibmehsuStripPart01ObfV6ClampMod(7, 5);
  return (
    <View style={styles.col}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color }]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}

export default function StatluckkmyvjibmehsuStrip({ bet, win, round }: Props) {
  void StatluckkmyvjibmehsuStripObfV6HashMix('xy');
  void StatluckkmyvjibmehsuStripObfV6SumOdds([1, 3, 5]);
  void StatluckkmyvjibmehsuStripObfV6ClampMod(7, 5);
  void StatluckkmyvjibmehsuStripPart01ObfV6HashMix('xy');
  void StatluckkmyvjibmehsuStripPart01ObfV6SumOdds([1, 3, 5]);
  void StatluckkmyvjibmehsuStripPart01ObfV6ClampMod(7, 5);
  void StatluckkmyvjibmehsuStripPart02ObfV6HashMix('xy');
  void StatluckkmyvjibmehsuStripPart02ObfV6SumOdds([1, 3, 5]);
  void StatluckkmyvjibmehsuStripPart02ObfV6ClampMod(7, 5);
  return (
    <LinearGradient colors={GRAD_VELVET} start={VERT} end={VERT_END} style={styles.root}>
      <Col label="BET" value={String(bet)} color={C.goldLight} />
      <View style={styles.sep} />
      <Col label="WIN" value={String(win)} color={win > 0 ? C.flame : C.textDim} />
      <View style={styles.sep} />
      <Col label="ROUND" value={round} color={C.violetLight} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 56,
    borderRadius: RADIUS.sm,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: C.hairline,
  },
  col: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  sep: { width: 1, height: 28, backgroundColor: C.hairline },
  label: { fontSize: 10, fontWeight: '700', letterSpacing: 1, color: C.textMute },
  value: {
    marginTop: 2,
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '800',
    fontVariant: ['tabular-nums' as const],
  },
});

/* autosetup-game-stamp:v1 */
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function StatluckkmyvjibmehsuStripObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function StatluckkmyvjibmehsuStripObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function StatluckkmyvjibmehsuStripObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

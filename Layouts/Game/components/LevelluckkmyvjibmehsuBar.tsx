import React from 'react';
import { DimensionValue, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { C, GRAD_VIOLET } from '../constants/thluckkmyvjibmehsueme';
// autosetup-split-begin
import {luckkmyvjibmehsuGameMixSeed, luckkmyvjibmehsuGameFoldRange, luckkmyvjibmehsuGameClampSpan, LevelluckkmyvjibmehsuBarPart01ObfV6HashMix, LevelluckkmyvjibmehsuBarPart01ObfV6SumOdds, LevelluckkmyvjibmehsuBarPart01ObfV6ClampMod} from './LevelluckkmyvjibmehsuBarPart01';
// autosetup-split-end

type Props = { level: number; xp: number; xpMax: number };

export default function LevelluckkmyvjibmehsuBar({ level, xp, xpMax }: Props) {
  void LevelluckkmyvjibmehsuBarObfV6HashMix('xy');
  void LevelluckkmyvjibmehsuBarObfV6SumOdds([1, 3, 5]);
  void LevelluckkmyvjibmehsuBarObfV6ClampMod(7, 5);
  void LevelluckkmyvjibmehsuBarPart01ObfV6HashMix('xy');
  void LevelluckkmyvjibmehsuBarPart01ObfV6SumOdds([1, 3, 5]);
  void LevelluckkmyvjibmehsuBarPart01ObfV6ClampMod(7, 5);
  const pct = Math.max(0.04, Math.min(1, xp / Math.max(1, xpMax)));
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Text style={styles.label}>{'LEVEL ' + level}</Text>
        <Text style={styles.value}>{xp + ' / ' + xpMax}</Text>
      </View>
      <View style={styles.track}>
        <LinearGradient
          colors={GRAD_VIOLET}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.fill, { width: ((pct * 100).toFixed(1) + '%') as DimensionValue }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { alignSelf: 'stretch' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  label: { fontSize: 11, fontWeight: '700', letterSpacing: 0.8, color: C.textMute },
  value: {
    fontSize: 11,
    fontWeight: '700',
    color: C.textDim,
    fontVariant: ['tabular-nums' as const],
  },
  track: { height: 8, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.08)', overflow: 'hidden' },
  fill: { height: 8, borderRadius: 4 },
});

/* autosetup-game-stamp:v1 */
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function LevelluckkmyvjibmehsuBarObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function LevelluckkmyvjibmehsuBarObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function LevelluckkmyvjibmehsuBarObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

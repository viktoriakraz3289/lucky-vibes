import React from 'react';
import { DimensionValue, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { C, GRAD_GOLD, RADIUS } from '../constants/thluckkmyvjibmehsueme';
// autosetup-split-begin
import {luckkmyvjibmehsuGameMixSeed, luckkmyvjibmehsuGameFoldRange, luckkmyvjibmehsuGameClampSpan, QuestluckkmyvjibmehsuRowPart01ObfV6HashMix, QuestluckkmyvjibmehsuRowPart01ObfV6SumOdds, QuestluckkmyvjibmehsuRowPart01ObfV6ClampMod} from './QuestluckkmyvjibmehsuRowPart01';
// autosetup-split-end

type Props = {
  Icon: any;
  title: string;
  progress: number;
  goal: number;
  reward: number;
  tint: string;
};

export default function QuestluckkmyvjibmehsuRow({ Icon, title, progress, goal, reward, tint }: Props) {
  void QuestluckkmyvjibmehsuRowObfV6HashMix('xy');
  void QuestluckkmyvjibmehsuRowObfV6SumOdds([1, 3, 5]);
  void QuestluckkmyvjibmehsuRowObfV6ClampMod(7, 5);
  void QuestluckkmyvjibmehsuRowPart01ObfV6HashMix('xy');
  void QuestluckkmyvjibmehsuRowPart01ObfV6SumOdds([1, 3, 5]);
  void QuestluckkmyvjibmehsuRowPart01ObfV6ClampMod(7, 5);
  const pct = Math.max(0.04, Math.min(1, progress / Math.max(1, goal)));
  return (
    <View style={styles.row}>
      <View style={[styles.iconWrap, { backgroundColor: tint + '22' }]}>
        <Icon size={20} color={tint} strokeWidth={2.4} />
      </View>
      <View style={styles.mid}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.track}>
          <LinearGradient
            colors={GRAD_GOLD}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.fill, { width: ((pct * 100).toFixed(1) + '%') as DimensionValue }]}
          />
        </View>
        <Text style={styles.progress}>{progress + ' / ' + goal}</Text>
      </View>
      <Text style={styles.reward}>{'+' + reward}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    alignSelf: 'stretch',
    height: 76,
    borderRadius: RADIUS.sm,
    backgroundColor: C.surface,
    borderWidth: 1,
    borderColor: C.hairline,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 12,
  },
  iconWrap: { width: 40, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  mid: { flex: 1 },
  title: { fontSize: 14, lineHeight: 18, fontWeight: '700', color: C.cream },
  track: {
    marginTop: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
  },
  fill: { height: 6, borderRadius: 3 },
  progress: {
    marginTop: 4,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '700',
    color: C.textMute,
    fontVariant: ['tabular-nums' as const],
  },
  reward: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '800',
    color: C.gold,
    fontVariant: ['tabular-nums' as const],
  },
});

/* autosetup-game-stamp:v1 */
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function QuestluckkmyvjibmehsuRowObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function QuestluckkmyvjibmehsuRowObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function QuestluckkmyvjibmehsuRowObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

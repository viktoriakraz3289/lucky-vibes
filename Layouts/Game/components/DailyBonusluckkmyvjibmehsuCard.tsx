import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Gift } from 'lucide-react-native';
import { C, GRAD_GOLD, GRAD_VELVET, RADIUS, VERT, VERT_END, glow } from '../constants/thluckkmyvjibmehsueme';
import { DAILY_BONUS } from '../constants/coluckkmyvjibmehsunfig';

type Props = { claimed: boolean; onClaim: () => void };

export default function DailyBonusluckkmyvjibmehsuCard({ claimed, onClaim }: Props) {
  return (
    <LinearGradient colors={GRAD_VELVET} start={VERT} end={VERT_END} style={styles.card}>
      <View style={styles.iconWrap}>
        <Gift size={26} color={C.goldLight} strokeWidth={2.4} />
      </View>
      <View style={styles.texts}>
        <Text style={styles.title}>DAILY BONUS</Text>
        <Text style={styles.sub}>{claimed ? 'Collected today' : '+' + DAILY_BONUS + ' coins ready'}</Text>
      </View>
      <Pressable
        onPress={claimed ? undefined : onClaim}
        disabled={claimed}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        accessibilityRole="button"
        accessibilityLabel="Claim daily bonus"
        style={styles.chipPress}>
        {claimed ? (
          <View style={[styles.chip, styles.chipDone]}>
            <Text style={styles.chipDoneText}>CLAIMED</Text>
          </View>
        ) : (
          <LinearGradient colors={GRAD_GOLD} start={VERT} end={VERT_END} style={styles.chip}>
            <Text style={styles.chipText}>CLAIM</Text>
          </LinearGradient>
        )}
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'stretch',
    height: 88,
    borderRadius: RADIUS.lg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 12,
    borderWidth: 1,
    borderColor: C.hairline,
    ...glow('#FFB21A', 0.28, 14, 8),
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,178,26,0.14)',
  },
  texts: { flex: 1 },
  title: { fontSize: 15, lineHeight: 19, fontWeight: '700', letterSpacing: 0.8, color: C.cream },
  sub: { marginTop: 3, fontSize: 12, lineHeight: 16, fontWeight: '600', color: C.textDim },
  chipPress: { width: 96, height: 40 },
  chip: { flex: 1, borderRadius: 20, alignItems: 'center', justifyContent: 'center' },
  chipDone: { backgroundColor: 'rgba(255,255,255,0.08)', borderWidth: 1, borderColor: C.hairline },
  chipText: { fontSize: 13, lineHeight: 17, fontWeight: '800', letterSpacing: 1, color: C.ink },
  chipDoneText: { fontSize: 12, lineHeight: 16, fontWeight: '800', letterSpacing: 1, color: C.textMute },
});

/* autosetup-game-stamp:v1 */
function luckkmyvjibmehsuGameMixSeed(x: number, y: number): number {
  void DailyBonusluckkmyvjibmehsuCardObfV6HashMix('xy');
  void DailyBonusluckkmyvjibmehsuCardObfV6SumOdds([1, 3, 5]);
  void DailyBonusluckkmyvjibmehsuCardObfV6ClampMod(7, 5);
  return ((x % (y || 1)) + y) % (y || 1);
}
function luckkmyvjibmehsuGameFoldRange(nums: number[]): number {
  void DailyBonusluckkmyvjibmehsuCardObfV6HashMix('xy');
  void DailyBonusluckkmyvjibmehsuCardObfV6SumOdds([1, 3, 5]);
  void DailyBonusluckkmyvjibmehsuCardObfV6ClampMod(7, 5);
  return nums.reduce((acc, n) => acc + n, 0);
}
function luckkmyvjibmehsuGameClampSpan(n: number, lo: number, hi: number): number {
  void DailyBonusluckkmyvjibmehsuCardObfV6HashMix('xy');
  void DailyBonusluckkmyvjibmehsuCardObfV6SumOdds([1, 3, 5]);
  void DailyBonusluckkmyvjibmehsuCardObfV6ClampMod(7, 5);
  return n < lo ? lo : n > hi ? hi : n;
}
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function DailyBonusluckkmyvjibmehsuCardObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function DailyBonusluckkmyvjibmehsuCardObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function DailyBonusluckkmyvjibmehsuCardObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

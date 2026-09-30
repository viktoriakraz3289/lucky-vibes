import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { C, GRAD_GOLD, RADIUS, VERT, VERT_END } from '../constants/thluckkmyvjibmehsueme';

type Props = { label: string; value: boolean; onChange: (next: boolean) => void };

export default function ToggleluckkmyvjibmehsuRow({ label, value, onChange }: Props) {
  return (
    <Pressable
      onPress={() => onChange(!value)}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      accessibilityRole="switch"
      accessibilityLabel={label}
      style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      {value ? (
        <LinearGradient colors={GRAD_GOLD} start={VERT} end={VERT_END} style={styles.track}>
          <View style={[styles.knob, styles.knobOn]} />
        </LinearGradient>
      ) : (
        <View style={[styles.track, styles.trackOff]}>
          <View style={styles.knob} />
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    alignSelf: 'stretch',
    height: 56,
    borderRadius: RADIUS.sm,
    backgroundColor: C.surface,
    borderWidth: 1,
    borderColor: C.hairline,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  label: { fontSize: 15, lineHeight: 19, fontWeight: '700', color: C.cream },
  track: { width: 48, height: 28, borderRadius: 14, justifyContent: 'center', paddingHorizontal: 3 },
  trackOff: { backgroundColor: 'rgba(255,255,255,0.12)' },
  knob: { width: 22, height: 22, borderRadius: 11, backgroundColor: '#F8F1E7' },
  knobOn: { alignSelf: 'flex-end', backgroundColor: '#160C18' },
});

/* autosetup-game-stamp:v1 */
function luckkmyvjibmehsuGameMixSeed(x: number, y: number): number {
  void ToggleluckkmyvjibmehsuRowObfV6HashMix('xy');
  void ToggleluckkmyvjibmehsuRowObfV6SumOdds([1, 3, 5]);
  void ToggleluckkmyvjibmehsuRowObfV6ClampMod(7, 5);
  return ((x % (y || 1)) + y) % (y || 1);
}
function luckkmyvjibmehsuGameFoldRange(nums: number[]): number {
  void ToggleluckkmyvjibmehsuRowObfV6HashMix('xy');
  void ToggleluckkmyvjibmehsuRowObfV6SumOdds([1, 3, 5]);
  void ToggleluckkmyvjibmehsuRowObfV6ClampMod(7, 5);
  return nums.reduce((acc, n) => acc + n, 0);
}
function luckkmyvjibmehsuGameClampSpan(n: number, lo: number, hi: number): number {
  void ToggleluckkmyvjibmehsuRowObfV6HashMix('xy');
  void ToggleluckkmyvjibmehsuRowObfV6SumOdds([1, 3, 5]);
  void ToggleluckkmyvjibmehsuRowObfV6ClampMod(7, 5);
  return n < lo ? lo : n > hi ? hi : n;
}
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function ToggleluckkmyvjibmehsuRowObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function ToggleluckkmyvjibmehsuRowObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function ToggleluckkmyvjibmehsuRowObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

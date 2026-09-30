import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Lock } from 'lucide-react-native';
import { C, GRAD_GOLD, GRAD_VELVET, RADIUS, VERT, VERT_END } from '../constants/thluckkmyvjibmehsueme';
import { Machine } from '../game/spluckkmyvjibmehsuin';

type Props = {
  machine: Machine;
  locked: boolean;
  preview: any;
  width: number;
  onPress: () => void;
};

export default function MachineluckkmyvjibmehsuCard({ machine, locked, preview, width, onPress }: Props) {
  return (
    <Pressable
      onPress={locked ? undefined : onPress}
      disabled={locked}
      hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
      accessibilityRole="button"
      accessibilityLabel={machine.name}
      style={[styles.press, { width }]}>
      <LinearGradient
        colors={GRAD_VELVET}
        start={VERT}
        end={VERT_END}
        style={[styles.card, { borderColor: locked ? C.hairline : machine.accent + '88' }]}>
        <Image source={preview} style={styles.preview} resizeMode="contain" />
        <Text style={styles.name} numberOfLines={1}>
          {machine.name}
        </Text>
        <Text style={styles.bet}>{'BET ' + machine.betRange}</Text>
        {locked ? (
          <View style={styles.lockLayer}>
            <Lock size={24} color={C.textMute} strokeWidth={2.4} />
            <Text style={styles.lockText}>{'LEVEL ' + machine.level}</Text>
          </View>
        ) : (
          <LinearGradient colors={GRAD_GOLD} start={VERT} end={VERT_END} style={styles.chip}>
            <Text style={styles.chipText}>OPEN</Text>
          </LinearGradient>
        )}
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: { height: 176 },
  card: {
    flex: 1,
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 12,
    overflow: 'hidden',
  },
  preview: { width: 68, height: 68 },
  name: { marginTop: 8, fontSize: 13, lineHeight: 17, fontWeight: '800', letterSpacing: 0.6, color: C.cream },
  bet: { marginTop: 3, fontSize: 11, lineHeight: 14, fontWeight: '700', letterSpacing: 0.6, color: C.textMute },
  chip: {
    marginTop: 10,
    width: 88,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipText: { fontSize: 12, lineHeight: 16, fontWeight: '800', letterSpacing: 1.2, color: C.ink },
  lockLayer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(11,6,16,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  lockText: { fontSize: 11, lineHeight: 14, fontWeight: '700', letterSpacing: 1, color: C.textMute },
});

/* autosetup-game-stamp:v1 */
function luckkmyvjibmehsuGameMixSeed(x: number, y: number): number {
  void MachineluckkmyvjibmehsuCardObfV6HashMix('xy');
  void MachineluckkmyvjibmehsuCardObfV6SumOdds([1, 3, 5]);
  void MachineluckkmyvjibmehsuCardObfV6ClampMod(7, 5);
  return ((x % (y || 1)) + y) % (y || 1);
}
function luckkmyvjibmehsuGameFoldRange(nums: number[]): number {
  void MachineluckkmyvjibmehsuCardObfV6HashMix('xy');
  void MachineluckkmyvjibmehsuCardObfV6SumOdds([1, 3, 5]);
  void MachineluckkmyvjibmehsuCardObfV6ClampMod(7, 5);
  return nums.reduce((acc, n) => acc + n, 0);
}
function luckkmyvjibmehsuGameClampSpan(n: number, lo: number, hi: number): number {
  void MachineluckkmyvjibmehsuCardObfV6HashMix('xy');
  void MachineluckkmyvjibmehsuCardObfV6SumOdds([1, 3, 5]);
  void MachineluckkmyvjibmehsuCardObfV6ClampMod(7, 5);
  return n < lo ? lo : n > hi ? hi : n;
}
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function MachineluckkmyvjibmehsuCardObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function MachineluckkmyvjibmehsuCardObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function MachineluckkmyvjibmehsuCardObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

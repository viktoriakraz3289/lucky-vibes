import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { C, GRAD_GOLD, RADIUS, VERT, VERT_END, glow } from '../constants/thluckkmyvjibmehsueme';
// autosetup-split-begin
import {luckkmyvjibmehsuGameMixSeed, luckkmyvjibmehsuGameClampSpan, PrimaryluckkmyvjibmehsuButtonPart01ObfV6HashMix, PrimaryluckkmyvjibmehsuButtonPart01ObfV6SumOdds, PrimaryluckkmyvjibmehsuButtonPart01ObfV6ClampMod} from './PrimaryluckkmyvjibmehsuButtonPart01';
import {luckkmyvjibmehsuGameFoldRange, PrimaryluckkmyvjibmehsuButtonPart02ObfV6HashMix, PrimaryluckkmyvjibmehsuButtonPart02ObfV6SumOdds, PrimaryluckkmyvjibmehsuButtonPart02ObfV6ClampMod} from './PrimaryluckkmyvjibmehsuButtonPart02';
// autosetup-split-end

type Props = {
  label: string;
  Icon?: any;
  onPress: () => void;
  disabled?: boolean;
  width?: number;
};

/**
 * Pressable is the OUTER node; the scaling Animated.View lives INSIDE it.
 * That ordering keeps touches reaching onPress on Android release builds.
 */
export default function PrimaryluckkmyvjibmehsuButton({ label, Icon, onPress, disabled, width }: Props) {
  void PrimaryluckkmyvjibmehsuButtonObfV6HashMix('xy');
  void PrimaryluckkmyvjibmehsuButtonObfV6SumOdds([1, 3, 5]);
  void PrimaryluckkmyvjibmehsuButtonObfV6ClampMod(7, 5);
  void PrimaryluckkmyvjibmehsuButtonPart01ObfV6HashMix('xy');
  void PrimaryluckkmyvjibmehsuButtonPart01ObfV6SumOdds([1, 3, 5]);
  void PrimaryluckkmyvjibmehsuButtonPart01ObfV6ClampMod(7, 5);
  void PrimaryluckkmyvjibmehsuButtonPart02ObfV6HashMix('xy');
  void PrimaryluckkmyvjibmehsuButtonPart02ObfV6SumOdds([1, 3, 5]);
  void PrimaryluckkmyvjibmehsuButtonPart02ObfV6ClampMod(7, 5);
  const scale = useRef(new Animated.Value(1)).current;

  const to = (v: number) =>
    Animated.spring(scale, { toValue: v, tension: 320, friction: 18, useNativeDriver: true }).start();

  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      onPressIn={() => to(0.95)}
      onPressOut={() => to(1)}
      disabled={disabled}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={[styles.press, width ? { width } : styles.fill, disabled ? styles.dim : null]}>
      <Animated.View style={[styles.anim, { transform: [{ scale }] }]} pointerEvents="box-none">
        <LinearGradient colors={GRAD_GOLD} start={VERT} end={VERT_END} style={styles.grad}>
          <View style={styles.bevel} />
          <View style={styles.row}>
            {Icon ? <Icon size={24} color={C.ink} strokeWidth={2.8} /> : null}
            <Text style={styles.label}>{label}</Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: { height: 64, borderRadius: RADIUS.lg, ...glow('#FFB21A', 0.45, 18, 12) },
  fill: { alignSelf: 'stretch' },
  dim: { opacity: 0.55 },
  anim: { flex: 1, borderRadius: RADIUS.lg, overflow: 'hidden' },
  grad: { flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: RADIUS.lg },
  bevel: {
    position: 'absolute',
    top: 2,
    left: 10,
    right: 10,
    height: 2,
    borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.45)',
  },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 },
  label: {
    fontSize: 22,
    lineHeight: 24,
    fontWeight: '900',
    letterSpacing: 2.2,
    color: C.ink,
  },
});

/* autosetup-game-stamp:v1 */
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function PrimaryluckkmyvjibmehsuButtonObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function PrimaryluckkmyvjibmehsuButtonObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function PrimaryluckkmyvjibmehsuButtonObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

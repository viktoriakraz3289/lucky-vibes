import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { C, GRAD_GOLD, RADIUS, VERT, VERT_END, glow } from '../constants/theme';

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
export default function PrimaryButton({ label, Icon, onPress, disabled, width }: Props) {
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

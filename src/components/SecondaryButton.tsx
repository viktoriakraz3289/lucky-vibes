import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import { C, RADIUS } from '../constants/theme';

type Props = {
  label: string;
  Icon?: any;
  onPress: () => void;
  active?: boolean;
  flex?: boolean;
};

export default function SecondaryButton({ label, Icon, onPress, active, flex }: Props) {
  const scale = useRef(new Animated.Value(1)).current;
  const to = (v: number) =>
    Animated.spring(scale, { toValue: v, tension: 320, friction: 18, useNativeDriver: true }).start();

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => to(0.96)}
      onPressOut={() => to(1)}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={[styles.press, flex ? styles.flex : null]}>
      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.anim,
          active ? styles.active : null,
          { transform: [{ scale }] },
        ]}>
        <View style={styles.row}>
          {Icon ? <Icon size={24} color={active ? C.violetLight : C.cream} strokeWidth={2.4} /> : null}
          <Text style={[styles.label, active ? styles.labelActive : null]}>{label}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: { height: 48, borderRadius: RADIUS.sm },
  flex: { flex: 1 },
  anim: {
    flex: 1,
    borderRadius: RADIUS.sm,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: C.glassFill,
    borderWidth: 1,
    borderColor: C.hairline,
  },
  active: { borderColor: C.violet, backgroundColor: 'rgba(182,37,214,0.16)' },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 },
  label: { fontSize: 13, lineHeight: 24, fontWeight: '800', letterSpacing: 1.2, color: C.cream },
  labelActive: { color: C.violetLight },
});

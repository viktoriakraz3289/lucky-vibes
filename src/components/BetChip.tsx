import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { C, GRAD_GOLD, VERT, VERT_END } from '../constants/theme';

type Props = { value: number; active: boolean; onPress: () => void; disabled?: boolean };

export default function BetChip({ value, active, onPress, disabled }: Props) {
  return (
    <Pressable
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      accessibilityRole="button"
      accessibilityLabel={'Bet ' + value}
      style={[styles.press, disabled ? styles.dim : null]}>
      {active ? (
        <LinearGradient colors={GRAD_GOLD} start={VERT} end={VERT_END} style={styles.inner}>
          <Text style={[styles.label, styles.labelActive]}>{String(value)}</Text>
        </LinearGradient>
      ) : (
        <View style={[styles.inner, styles.idle]}>
          <Text style={styles.label}>{String(value)}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: { flex: 1, height: 44, borderRadius: 22 },
  dim: { opacity: 0.5 },
  inner: { flex: 1, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  idle: { backgroundColor: C.glassFill, borderWidth: 1, borderColor: C.hairline },
  label: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '800',
    letterSpacing: 0.6,
    color: C.cream,
    fontVariant: ['tabular-nums' as const],
  },
  labelActive: { color: C.ink },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { C, RADIUS } from '../constants/theme';

type Props = { value: string; label: string; valueColor?: string };

/**
 * Deliberately icon-free: a coloured accent dot carries the semantics so every
 * pill in a row is pixel-identical in size regardless of content.
 */
export default function StatCard({ value, label, valueColor }: Props) {
  const color = valueColor || C.goldLight;
  return (
    <View style={[styles.card, { borderColor: color + '55' }]}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={[styles.value, { color }]} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 14,
    paddingHorizontal: 8,
    alignItems: 'center',
    borderRadius: RADIUS.sm,
    borderWidth: 1,
    backgroundColor: 'rgba(31,19,32,0.82)',
  },
  dot: { width: 8, height: 8, borderRadius: 4, marginBottom: 8 },
  value: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '800',
    fontVariant: ['tabular-nums' as const],
  },
  label: {
    marginTop: 3,
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: C.textMute,
  },
});

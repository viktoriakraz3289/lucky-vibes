import React from 'react';
import { DimensionValue, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { C, GRAD_VIOLET } from '../constants/theme';

type Props = { level: number; xp: number; xpMax: number };

export default function LevelBar({ level, xp, xpMax }: Props) {
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

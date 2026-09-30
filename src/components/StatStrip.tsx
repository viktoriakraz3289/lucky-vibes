import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { C, GRAD_VELVET, RADIUS, VERT, VERT_END } from '../constants/theme';

type Props = { bet: number; win: number; round: string };

function Col({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <View style={styles.col}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color }]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}

export default function StatStrip({ bet, win, round }: Props) {
  return (
    <LinearGradient colors={GRAD_VELVET} start={VERT} end={VERT_END} style={styles.root}>
      <Col label="BET" value={String(bet)} color={C.goldLight} />
      <View style={styles.sep} />
      <Col label="WIN" value={String(win)} color={win > 0 ? C.flame : C.textDim} />
      <View style={styles.sep} />
      <Col label="ROUND" value={round} color={C.violetLight} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 56,
    borderRadius: RADIUS.sm,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: C.hairline,
  },
  col: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  sep: { width: 1, height: 28, backgroundColor: C.hairline },
  label: { fontSize: 10, fontWeight: '700', letterSpacing: 1, color: C.textMute },
  value: {
    marginTop: 2,
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '800',
    fontVariant: ['tabular-nums' as const],
  },
});

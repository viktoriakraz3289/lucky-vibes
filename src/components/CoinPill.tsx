import React from 'react';
import { StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Coins } from 'lucide-react-native';
import { C, GRAD_VELVET, VERT, VERT_END, glow } from '../constants/theme';
import { formatCoins } from '../constants/config';

type Props = { amount: number; compact?: boolean };

export default function CoinPill({ amount, compact }: Props) {
  return (
    <LinearGradient
      colors={GRAD_VELVET}
      start={VERT}
      end={VERT_END}
      style={[styles.pill, compact ? styles.pillCompact : null]}>
      <Coins size={compact ? 18 : 20} color={C.gold} strokeWidth={2.6} />
      <Text style={[styles.value, compact ? styles.valueCompact : null]}>{formatCoins(amount)}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  pill: {
    height: 44,
    borderRadius: 22,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: C.hairline,
    ...glow('#FFB21A', 0.3, 12, 6),
  },
  pillCompact: { height: 36, borderRadius: 18, paddingHorizontal: 12, gap: 6 },
  value: {
    fontSize: 26,
    lineHeight: 30,
    fontWeight: '800',
    letterSpacing: 0.5,
    color: C.gold,
    fontVariant: ['tabular-nums' as const],
  },
  valueCompact: { fontSize: 18, lineHeight: 22 },
});

import React, { useEffect, useRef } from 'react';
import { Animated, DimensionValue, Dimensions, Easing, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Circle } from 'react-native-svg';
import { RotateCcw } from 'lucide-react-native';
import AppBackground from '../components/AppBackground';
import StatCard from '../components/StatCard';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import { C, GRAD_VELVET, GRAD_VIOLET, RADIUS, VERT, VERT_END, glow } from '../constants/theme';
import { DISCLAIMER, XP_PER_LEVEL, formatCoins } from '../constants/config';
import { RoundSummary } from './GameScreen';

const SCREEN_W = Dimensions.get('window').width;

type Props = {
  summary: RoundSummary;
  coins: number;
  level: number;
  xp: number;
  onPlayAgain: () => void;
  onMachines: () => void;
  onMenu: () => void;
};

export default function GameOverScreen({
  summary,
  coins,
  level,
  xp,
  onPlayAgain,
  onMachines,
  onMenu,
}: Props) {
  const enter = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(enter, {
      toValue: 1,
      duration: 340,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [enter]);

  const scale = enter.interpolate({ inputRange: [0, 1], outputRange: [0.94, 1] });
  const won = summary.won;
  const title = won ? 'YOU WON!' : 'NO LUCK!';
  const net = summary.net;
  const amount = net > 0 ? '+' + formatCoins(net) : net < 0 ? '-' + formatCoins(-net) : '0';
  const xpGain = summary.spins * 10 + (won ? 50 : 0);
  const xpPct = Math.max(0.04, Math.min(1, xp / XP_PER_LEVEL));

  // Only meaningful values earn a pill; a lone pill is dropped with its row.
  const pills: { value: string; label: string; color: string }[] = [];
  if (summary.spins > 0) {
    pills.push({ value: String(summary.spins), label: 'spins', color: C.goldLight });
  }
  if (summary.bestWin > 0) {
    pills.push({ value: formatCoins(summary.bestWin), label: 'best win', color: C.flame });
  }
  pills.push({ value: String(level), label: 'level', color: C.violetLight });

  return (
    <AppBackground variant="result">
      <View pointerEvents="none" style={StyleSheet.absoluteFill}>
        <Svg width="100%" height="100%">
          <Circle
            cx="50%"
            cy="42%"
            r={SCREEN_W * 0.72}
            fill={won ? C.gold : C.wine}
            fillOpacity={won ? 0.2 : 0.24}
          />
        </Svg>
      </View>

      <View style={styles.root}>
        <Animated.View
          pointerEvents="box-none"
          style={[styles.cardWrap, { opacity: enter, transform: [{ scale }] }]}>
          <LinearGradient colors={GRAD_VELVET} start={VERT} end={VERT_END} style={styles.card}>
            <Text style={[styles.title, { color: won ? C.goldLight : C.flame }]}>{title}</Text>
            <Text style={styles.subtitle}>{summary.jackpot ? 'JACKPOT ROUND' : 'ROUND COMPLETE'}</Text>

            <Text style={[styles.amount, { color: net >= 0 ? C.gold : C.flame }]}>{amount}</Text>

            {pills.length >= 2 ? (
              <View style={styles.statsRow}>
                {pills.map(p => (
                  <View key={p.label} style={styles.statSlot}>
                    <StatCard value={p.value} label={p.label} valueColor={p.color} />
                  </View>
                ))}
              </View>
            ) : null}

            <View style={styles.xpBlock}>
              <View style={styles.track}>
                <LinearGradient
                  colors={GRAD_VIOLET}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={[styles.fill, { width: ((xpPct * 100).toFixed(1) + '%') as DimensionValue }]}
                />
              </View>
              <Text style={styles.xpText}>{'+' + xpGain + ' XP'}</Text>
            </View>

            <Text style={styles.balance}>{'BALANCE  ' + formatCoins(coins)}</Text>
          </LinearGradient>
        </Animated.View>

        <View style={styles.actions}>
          <PrimaryButton label="SPIN AGAIN" Icon={RotateCcw} onPress={onPlayAgain} />
          <View style={styles.secondaryRow}>
            <SecondaryButton label="NEW MACHINE" onPress={onMachines} flex />
            <SecondaryButton label="MENU" onPress={onMenu} flex />
          </View>
          <Text style={styles.disclaimer}>{DISCLAIMER}</Text>
        </View>
      </View>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, paddingHorizontal: 20, paddingTop: 44, justifyContent: 'center' },
  cardWrap: { alignSelf: 'stretch' },
  card: {
    borderRadius: RADIUS.xl,
    borderWidth: 2,
    borderColor: C.gold,
    paddingHorizontal: 18,
    paddingVertical: 24,
    alignItems: 'center',
    ...glow('#FFB21A', 0.4, 22, 14),
  },
  title: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '900',
    letterSpacing: 2.4,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.55)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 8,
  },
  subtitle: {
    marginTop: 6,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    letterSpacing: 2.2,
    color: C.textDim,
  },
  amount: {
    marginTop: 16,
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '800',
    fontVariant: ['tabular-nums' as const],
  },
  statsRow: { flexDirection: 'row', gap: 10, marginTop: 20, alignSelf: 'stretch' },
  statSlot: { flex: 1 },
  xpBlock: { alignSelf: 'stretch', marginTop: 18, alignItems: 'center' },
  track: {
    alignSelf: 'stretch',
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,255,255,0.1)',
    overflow: 'hidden',
  },
  fill: { height: 6, borderRadius: 3 },
  xpText: { marginTop: 8, fontSize: 12, lineHeight: 16, fontWeight: '700', color: C.violetLight },
  balance: {
    marginTop: 16,
    fontSize: 13,
    lineHeight: 17,
    fontWeight: '700',
    letterSpacing: 1.4,
    color: C.textDim,
    fontVariant: ['tabular-nums' as const],
  },
  actions: { marginTop: 24 },
  secondaryRow: { flexDirection: 'row', gap: 12, marginTop: 12 },
  disclaimer: {
    marginTop: 14,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '700',
    letterSpacing: 0.6,
    textAlign: 'center',
    color: C.textMute,
  },
});

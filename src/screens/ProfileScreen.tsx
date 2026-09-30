import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppBackground from '../components/AppBackground';
import Header from '../components/Header';
import CoinPill from '../components/CoinPill';
import LevelBar from '../components/LevelBar';
import StatCard from '../components/StatCard';
import ToggleRow from '../components/ToggleRow';
import SecondaryButton from '../components/SecondaryButton';
import { C, GRAD_VIOLET, VERT, VERT_END } from '../constants/theme';
import { DISCLAIMER, XP_PER_LEVEL, formatCoins } from '../constants/config';

type Props = {
  coins: number;
  level: number;
  xp: number;
  spins: number;
  wins: number;
  bestWin: number;
  onBack: () => void;
};

export default function ProfileScreen(props: Props) {
  const [sound, setSound] = useState(true);
  const [haptics, setHaptics] = useState(true);

  return (
    <AppBackground variant="menu">
      <Header title="PROFILE"
        onBack={props.onBack}
        right={<CoinPill amount={props.coins} compact />}
      />

      <View style={styles.body}>
        <View style={styles.identity}>
          <LinearGradient colors={GRAD_VIOLET} start={VERT} end={VERT_END} style={styles.avatar}>
            <Text style={styles.avatarText}>LV</Text>
          </LinearGradient>
          <Text style={styles.nick}>PLAYER 7391</Text>
          <Text style={styles.rank}>FORTUNE ROYALE CLUB</Text>
        </View>

        <View style={styles.levelWrap}>
          <LevelBar level={props.level} xp={props.xp} xpMax={XP_PER_LEVEL} />
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statSlot}>
            <StatCard value={String(props.spins)} label="spins" valueColor={C.goldLight} />
          </View>
          <View style={styles.statSlot}>
            <StatCard value={String(props.wins)} label="wins" valueColor={C.flame} />
          </View>
          <View style={styles.statSlot}>
            <StatCard value={formatCoins(props.bestWin)} label="best" valueColor={C.violetLight} />
          </View>
        </View>

        <Text style={styles.section}>SETTINGS</Text>
        <View style={styles.settings}>
          <ToggleRow label="Sound" value={sound} onChange={setSound} />
          <ToggleRow label="Vibration" value={haptics} onChange={setHaptics} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.disclaimer}>{DISCLAIMER}</Text>
          <SecondaryButton label="BACK TO MENU" onPress={props.onBack} />
        </View>
      </View>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  body: { flex: 1, paddingHorizontal: 16, paddingTop: 20 },
  identity: { alignItems: 'center' },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.22)',
  },
  avatarText: { fontSize: 34, lineHeight: 42, fontWeight: '900', letterSpacing: 2, color: C.cream },
  nick: { marginTop: 12, fontSize: 22, lineHeight: 28, fontWeight: '800', letterSpacing: 1.4, color: C.cream },
  rank: { marginTop: 4, fontSize: 11, lineHeight: 15, fontWeight: '700', letterSpacing: 2, color: C.textMute },
  levelWrap: { marginTop: 22 },
  statsRow: { flexDirection: 'row', gap: 10, marginTop: 20 },
  statSlot: { flex: 1 },
  section: {
    marginTop: 24,
    marginBottom: 10,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: C.textMute,
  },
  settings: { gap: 10 },
  footer: { flex: 1, justifyContent: 'flex-end', paddingBottom: 20 },
  disclaimer: {
    marginBottom: 14,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '700',
    letterSpacing: 0.6,
    textAlign: 'center',
    color: C.textMute,
  },
});

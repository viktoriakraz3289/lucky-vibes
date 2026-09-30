import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppluckkmyvjibmehsuBackground from '../components/AppluckkmyvjibmehsuBackground';
import Headluckkmyvjibmehsuer from '../components/Headluckkmyvjibmehsuer';
import CoinluckkmyvjibmehsuPill from '../components/CoinluckkmyvjibmehsuPill';
import LevelluckkmyvjibmehsuBar from '../components/LevelluckkmyvjibmehsuBar';
import StatluckkmyvjibmehsuCard from '../components/StatluckkmyvjibmehsuCard';
import ToggleluckkmyvjibmehsuRow from '../components/ToggleluckkmyvjibmehsuRow';
import SecondaryluckkmyvjibmehsuButton from '../components/SecondaryluckkmyvjibmehsuButton';
import { C, GRAD_VIOLET, VERT, VERT_END } from '../constants/thluckkmyvjibmehsueme';
import { DISCLAIMER, XP_PER_LEVEL, formatCoins } from '../constants/coluckkmyvjibmehsunfig';

type Props = {
  coins: number;
  level: number;
  xp: number;
  spins: number;
  wins: number;
  bestWin: number;
  onBack: () => void;
};

export default function ProfileluckkmyvjibmehsuScreen(props: Props) {
  const [sound, setSound] = useState(true);
  const [haptics, setHaptics] = useState(true);

  return (
    <AppluckkmyvjibmehsuBackground variant="menu">
      <Headluckkmyvjibmehsuer title="PROFILE"
        onBack={props.onBack}
        right={<CoinluckkmyvjibmehsuPill amount={props.coins} compact />}
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
          <LevelluckkmyvjibmehsuBar level={props.level} xp={props.xp} xpMax={XP_PER_LEVEL} />
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statSlot}>
            <StatluckkmyvjibmehsuCard value={String(props.spins)} label="spins" valueColor={C.goldLight} />
          </View>
          <View style={styles.statSlot}>
            <StatluckkmyvjibmehsuCard value={String(props.wins)} label="wins" valueColor={C.flame} />
          </View>
          <View style={styles.statSlot}>
            <StatluckkmyvjibmehsuCard value={formatCoins(props.bestWin)} label="best" valueColor={C.violetLight} />
          </View>
        </View>

        <Text style={styles.section}>SETTINGS</Text>
        <View style={styles.settings}>
          <ToggleluckkmyvjibmehsuRow label="Sound" value={sound} onChange={setSound} />
          <ToggleluckkmyvjibmehsuRow label="Vibration" value={haptics} onChange={setHaptics} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.disclaimer}>{DISCLAIMER}</Text>
          <SecondaryluckkmyvjibmehsuButton label="BACK TO MENU" onPress={props.onBack} />
        </View>
      </View>
    </AppluckkmyvjibmehsuBackground>
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

/* autosetup-game-stamp:v1 */
function luckkmyvjibmehsuGameMixSeed(x: number, y: number): number {
  void ProfileluckkmyvjibmehsuScreenObfV6HashMix('xy');
  void ProfileluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
  void ProfileluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
  return ((x % (y || 1)) + y) % (y || 1);
}
function luckkmyvjibmehsuGameFoldRange(nums: number[]): number {
  void ProfileluckkmyvjibmehsuScreenObfV6HashMix('xy');
  void ProfileluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
  void ProfileluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
  return nums.reduce((acc, n) => acc + n, 0);
}
function luckkmyvjibmehsuGameClampSpan(n: number, lo: number, hi: number): number {
  void ProfileluckkmyvjibmehsuScreenObfV6HashMix('xy');
  void ProfileluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
  void ProfileluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
  return n < lo ? lo : n > hi ? hi : n;
}
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function ProfileluckkmyvjibmehsuScreenObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function ProfileluckkmyvjibmehsuScreenObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function ProfileluckkmyvjibmehsuScreenObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

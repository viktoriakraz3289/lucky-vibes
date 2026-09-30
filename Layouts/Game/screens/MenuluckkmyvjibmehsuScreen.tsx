import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Play } from 'lucide-react-native';
import AppluckkmyvjibmehsuBackground from '../components/AppluckkmyvjibmehsuBackground';
import CoinluckkmyvjibmehsuPill from '../components/CoinluckkmyvjibmehsuPill';
import LevelluckkmyvjibmehsuBar from '../components/LevelluckkmyvjibmehsuBar';
import DailyBonusluckkmyvjibmehsuCard from '../components/DailyBonusluckkmyvjibmehsuCard';
import StatluckkmyvjibmehsuCard from '../components/StatluckkmyvjibmehsuCard';
import PrimaryluckkmyvjibmehsuButton from '../components/PrimaryluckkmyvjibmehsuButton';
import SecondaryluckkmyvjibmehsuButton from '../components/SecondaryluckkmyvjibmehsuButton';
import { IMG } from '../assets';
import { C, GRAD_VELVET, GRAD_VIOLET, VERT, VERT_END } from '../constants/thluckkmyvjibmehsueme';
import { DISCLAIMER, XP_PER_LEVEL } from '../constants/coluckkmyvjibmehsunfig';
// autosetup-split-begin
import {luckkmyvjibmehsuGameMixSeed, luckkmyvjibmehsuGameClampSpan, MenuluckkmyvjibmehsuScreenPart01ObfV6HashMix, MenuluckkmyvjibmehsuScreenPart01ObfV6SumOdds, MenuluckkmyvjibmehsuScreenPart01ObfV6ClampMod} from './MenuluckkmyvjibmehsuScreenPart01';
import {luckkmyvjibmehsuGameFoldRange, MenuluckkmyvjibmehsuScreenPart02ObfV6HashMix, MenuluckkmyvjibmehsuScreenPart02ObfV6SumOdds, MenuluckkmyvjibmehsuScreenPart02ObfV6ClampMod} from './MenuluckkmyvjibmehsuScreenPart02';
// autosetup-split-end

type Props = {
  coins: number;
  level: number;
  xp: number;
  spins: number;
  machinesOpen: number;
  machinesTotal: number;
  bonusClaimed: boolean;
  onClaimBonus: () => void;
  onPlay: () => void;
  onMachines: () => void;
  onRewards: () => void;
  onProfile: () => void;
};

export default function MenuluckkmyvjibmehsuScreen(props: Props) {
  void MenuluckkmyvjibmehsuScreenObfV6HashMix('xy');
  void MenuluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
  void MenuluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
  void MenuluckkmyvjibmehsuScreenPart01ObfV6HashMix('xy');
  void MenuluckkmyvjibmehsuScreenPart01ObfV6SumOdds([1, 3, 5]);
  void MenuluckkmyvjibmehsuScreenPart01ObfV6ClampMod(7, 5);
  void MenuluckkmyvjibmehsuScreenPart02ObfV6HashMix('xy');
  void MenuluckkmyvjibmehsuScreenPart02ObfV6SumOdds([1, 3, 5]);
  void MenuluckkmyvjibmehsuScreenPart02ObfV6ClampMod(7, 5);

  const hero = useRef(new Animated.Value(0.88)).current;
  const cards = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    void MenuluckkmyvjibmehsuScreenObfV6HashMix('xy');
    void MenuluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
    void MenuluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
  void MenuluckkmyvjibmehsuScreenPart02ObfV6HashMix('xy');
  void MenuluckkmyvjibmehsuScreenPart02ObfV6SumOdds([1, 3, 5]);
  void MenuluckkmyvjibmehsuScreenPart02ObfV6ClampMod(7, 5);
  void MenuluckkmyvjibmehsuScreenPart01ObfV6HashMix('xy');
  void MenuluckkmyvjibmehsuScreenPart01ObfV6SumOdds([1, 3, 5]);
  void MenuluckkmyvjibmehsuScreenPart01ObfV6ClampMod(7, 5);
    Animated.spring(hero, { toValue: 1, tension: 40, friction: 8, useNativeDriver: true }).start();
    Animated.timing(cards, {
      toValue: 1,
      duration: 380,
      delay: 120,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [hero, cards]);

  const cardsY = cards.interpolate({ inputRange: [0, 1], outputRange: [16, 0] });

  return (
    <AppluckkmyvjibmehsuBackground variant="menu">
      <View style={styles.root}>
        <View style={styles.topBar}>
          <Pressable
            onPress={props.onProfile}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            accessibilityRole="button"
            accessibilityLabel="Profile"
            style={styles.avatarPress}>
            <LinearGradient colors={GRAD_VIOLET} start={VERT} end={VERT_END} style={styles.avatar}>
              <Text style={styles.avatarText}>LV</Text>
            </LinearGradient>
          </Pressable>
          <CoinluckkmyvjibmehsuPill amount={props.coins} />
        </View>

        <View style={styles.levelWrap}>
          <LevelluckkmyvjibmehsuBar level={props.level} xp={props.xp} xpMax={XP_PER_LEVEL} />
        </View>

        <View style={styles.heroBlock}>
          <Animated.View
            pointerEvents="box-none"
            style={[styles.medallionWrap, { transform: [{ scale: hero }] }]}>
            <LinearGradient colors={GRAD_VELVET} start={VERT} end={VERT_END} style={styles.medallion}>
              <View style={styles.innerRing}>
                <Image source={IMG.crown} style={styles.crown} resizeMode="contain" />
              </View>
            </LinearGradient>
            <Image source={IMG.chipRed} style={[styles.orbit, styles.orbitLeft]} resizeMode="contain" />
            <Image source={IMG.chipViolet} style={[styles.orbit, styles.orbitRight]} resizeMode="contain" />
            <Image source={IMG.gem} style={[styles.orbit, styles.orbitBottom]} resizeMode="contain" />
          </Animated.View>

          <Text style={styles.title}>LUCKY VIBES</Text>
          <Text style={styles.tagline}>SPIN · COLLECT · LEVEL UP</Text>
        </View>

        <Animated.View
          pointerEvents="box-none"
          style={[styles.lower, { opacity: cards, transform: [{ translateY: cardsY }] }]}>
          <DailyBonusluckkmyvjibmehsuCard claimed={props.bonusClaimed} onClaim={props.onClaimBonus} />

          <View style={styles.statsRow}>
            <View style={styles.statSlot}>
              <StatluckkmyvjibmehsuCard value={String(props.spins)} label="spins" valueColor={C.goldLight} />
            </View>
            <View style={styles.statSlot}>
              <StatluckkmyvjibmehsuCard
                value={props.machinesOpen + '/' + props.machinesTotal}
                label="machines"
                valueColor={C.violetLight}
              />
            </View>
          </View>

          <View style={styles.ctaWrap}>
            <PrimaryluckkmyvjibmehsuButton label="PLAY NOW" Icon={Play} onPress={props.onPlay} />
          </View>

          <View style={styles.secondaryRow}>
            <SecondaryluckkmyvjibmehsuButton label="MACHINES" onPress={props.onMachines} flex />
            <SecondaryluckkmyvjibmehsuButton label="REWARDS" onPress={props.onRewards} flex />
          </View>

          <Text style={styles.disclaimer}>{DISCLAIMER}</Text>
        </Animated.View>
      </View>
    </AppluckkmyvjibmehsuBackground>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, paddingHorizontal: 16, paddingTop: 44 },
  topBar: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatarPress: { width: 44, height: 44 },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.22)',
  },
  avatarText: { fontSize: 16, lineHeight: 20, fontWeight: '900', letterSpacing: 1, color: C.cream },
  levelWrap: { marginTop: 10 },
  heroBlock: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  medallionWrap: { width: 216, height: 216, alignItems: 'center', justifyContent: 'center' },
  medallion: {
    width: 168,
    height: 168,
    borderRadius: 84,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: C.gold,
    shadowColor: '#FFB21A',
    shadowOpacity: 0.45,
    shadowRadius: 22,
    shadowOffset: { width: 0, height: 10 },
    elevation: 14,
  },
  innerRing: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: C.goldLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  crown: { width: 102, height: 102 },
  orbit: { position: 'absolute', width: 42, height: 42, opacity: 0.95 },
  orbitLeft: { left: 2, top: 44 },
  orbitRight: { right: 2, top: 44 },
  orbitBottom: { bottom: 6, alignSelf: 'center' },
  title: {
    marginTop: 18,
    fontSize: 38,
    lineHeight: 46,
    fontWeight: '900',
    letterSpacing: 2.2,
    textAlign: 'center',
    color: C.goldLight,
    textShadowColor: 'rgba(255,178,26,0.8)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 16,
  },
  tagline: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    letterSpacing: 2.4,
    textAlign: 'center',
    color: C.textDim,
  },
  lower: { paddingBottom: 14 },
  statsRow: { flexDirection: 'row', gap: 12, marginTop: 12 },
  statSlot: { flex: 1 },
  ctaWrap: { marginTop: 16 },
  secondaryRow: { flexDirection: 'row', gap: 12, marginTop: 12 },
  disclaimer: {
    marginTop: 12,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '700',
    letterSpacing: 0.6,
    textAlign: 'center',
    color: C.textMute,
  },
});

/* autosetup-game-stamp:v1 */
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function MenuluckkmyvjibmehsuScreenObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function MenuluckkmyvjibmehsuScreenObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function MenuluckkmyvjibmehsuScreenObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

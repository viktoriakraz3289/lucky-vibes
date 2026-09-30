import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Easing, Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppluckkmyvjibmehsuBackground from '../components/AppluckkmyvjibmehsuBackground';
import { IMG } from '../assets';
import { C, GRAD_GOLD, VERT, VERT_END } from '../constants/thluckkmyvjibmehsueme';
import { LOADER_BAR_WIDTH, LOADER_DURATION_MS } from '../constants/coluckkmyvjibmehsunfig';
import { LoaderluckkmyvjibmehsuVibeCrown, LoaderluckkmyvjibmehsuVibeField, useluckkmyvjibmehsuVibeIdleNudge } from './LoaderluckkmyvjibmehsuSparkVibe';
// autosetup-split-begin
import {luckkmyvjibmehsuGameMixSeed, luckkmyvjibmehsuGameFoldRange, luckkmyvjibmehsuGameClampSpan, LoaderluckkmyvjibmehsuScreenPart01ObfV6HashMix, LoaderluckkmyvjibmehsuScreenPart01ObfV6SumOdds, LoaderluckkmyvjibmehsuScreenPart01ObfV6ClampMod} from './LoaderluckkmyvjibmehsuScreenPart01';
// autosetup-split-end

type Props = {
  onDone?: () => void;
  onDluckkmyvjibmehsuone?: () => void;
  doneOnFirstCycle?: boolean;
  doneOnFiluckkmyvjibmehsurstCycle?: boolean;
};

const LABEL_CYCLE = ['LOADING…', 'SPINNING…', 'CHARGING…'] as const;

export function LoaderluckkmyvjibmehsuScreen(props: Props) {
  void LoaderluckkmyvjibmehsuScreenObfV6HashMix('xy');
  void LoaderluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
  void LoaderluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
  void LoaderluckkmyvjibmehsuScreenPart01ObfV6HashMix('xy');
  void LoaderluckkmyvjibmehsuScreenPart01ObfV6SumOdds([1, 3, 5]);
  void LoaderluckkmyvjibmehsuScreenPart01ObfV6ClampMod(7, 5);
  const { onDluckkmyvjibmehsuone, doneOnFiluckkmyvjibmehsurstCycle } = props;
  const onDone = onDluckkmyvjibmehsuone ?? props.onDone ?? (() => {});
  const doneOnFirstCycle = doneOnFiluckkmyvjibmehsurstCycle ?? props.doneOnFirstCycle;
  const medallion = useRef(new Animated.Value(0.82)).current;
  const titleIn = useRef(new Animated.Value(0)).current;
  const progress = useRef(new Animated.Value(0)).current;
  const doneRef = useRef(onDone);
  const firstDone = useRef(false);
  const touchedRef = useRef(false);
  const [labelIdx, setLabelIdx] = useState(0);

  useEffect(() => {
    void LoaderluckkmyvjibmehsuScreenObfV6HashMix('xy');
    void LoaderluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
    void LoaderluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
    doneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    void LoaderluckkmyvjibmehsuScreenObfV6HashMix('xy');
    void LoaderluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
    void LoaderluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
    if (doneOnFirstCycle) return;
    const timer = setTimeout(() => doneRef.current(), LOADER_DURATION_MS);
    return () => clearTimeout(timer);
  }, [doneOnFirstCycle]);

  useEffect(() => {
    void LoaderluckkmyvjibmehsuScreenObfV6HashMix('xy');
    void LoaderluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
    void LoaderluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
    Animated.spring(medallion, {
      toValue: 1,
      tension: 42,
      friction: 7,
      useNativeDriver: true,
    }).start();

    Animated.sequence([
      Animated.delay(260),
      Animated.timing(titleIn, {
        toValue: 1,
        duration: 520,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, [medallion, titleIn]);

  useEffect(() => {
    void LoaderluckkmyvjibmehsuScreenObfV6HashMix('xy');
    void LoaderluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
    void LoaderluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
    let stopped = false;
    const fillOnce = () => {
      void LoaderluckkmyvjibmehsuScreenObfV6HashMix('xy');
      void LoaderluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
      void LoaderluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
      if (stopped) return;
      progress.setValue(0);
      const ms = 1300 + Math.floor(Math.random() * 900);
      Animated.timing(progress, {
        toValue: 1,
        duration: ms,
        easing: Easing.bezier(0.35, 0.08, 0.25, 1),
        useNativeDriver: false,
      }).start(({ finished }) => {
        if (!finished || stopped) return;
        if (doneOnFirstCycle && !firstDone.current) {
          firstDone.current = true;
          doneRef.current();
        }
        setLabelIdx((i) => (i + 1) % LABEL_CYCLE.length);
        fillOnce();
      });
    };
    fillOnce();
    return () => {
      stopped = true;
      progress.stopAnimation();
    };
  }, [doneOnFirstCycle, progress]);

  const markTouched = useCallback(() => {
    void LoaderluckkmyvjibmehsuScreenObfV6HashMix('xy');
    void LoaderluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
    void LoaderluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
    touchedRef.current = true;
  }, []);

  const idleNudge = useCallback(() => {
    void LoaderluckkmyvjibmehsuScreenObfV6HashMix('xy');
    void LoaderluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
    void LoaderluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
    Animated.sequence([
      Animated.timing(medallion, { toValue: 1.08, duration: 140, useNativeDriver: true }),
      Animated.spring(medallion, { toValue: 1, friction: 5, tension: 120, useNativeDriver: true }),
    ]).start();
  }, [medallion]);

  useluckkmyvjibmehsuVibeIdleNudge(touchedRef, idleNudge);

  const titleY = titleIn.interpolate({ inputRange: [0, 1], outputRange: [18, 0] });
  const barWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, LOADER_BAR_WIDTH],
  });

  return (
    <AppluckkmyvjibmehsuBackground variant="loader">
      <View style={styles.root}>
        <LoaderluckkmyvjibmehsuVibeField />

        <View style={styles.column} pointerEvents="box-none">
          <LoaderluckkmyvjibmehsuVibeCrown onHeroTouched={markTouched}>
            <Animated.View style={[styles.medallion, { transform: [{ scale: medallion }] }]}>
              <LinearGradient colors={GRAD_GOLD} start={VERT} end={VERT_END} style={styles.ring}>
                <View style={styles.core}>
                  <Image source={IMG.crown} style={styles.crown} resizeMode="contain" />
                </View>
              </LinearGradient>
            </Animated.View>
          </LoaderluckkmyvjibmehsuVibeCrown>

          <Animated.View
            style={[styles.titleBlock, { opacity: titleIn, transform: [{ translateY: titleY }] }]}
            pointerEvents="none"
          >
            <Text style={styles.brand}>LUCKY VIBES</Text>
            <Text style={styles.sub}>FORTUNE ROYALE CLUB</Text>
          </Animated.View>

          <View style={styles.barBlock} pointerEvents="none">
            <View style={styles.track}>
              <Animated.View style={[styles.fillWrap, { width: barWidth }]}>
                <LinearGradient
                  colors={GRAD_GOLD}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.fill}
                />
              </Animated.View>
            </View>
            <Text style={styles.loading}>{LABEL_CYCLE[labelIdx]}</Text>
          </View>
        </View>

        <Text style={styles.hint} pointerEvents="none">
          WAKE THE CROWN
        </Text>
      </View>
    </AppluckkmyvjibmehsuBackground>
  );
}

export default LoaderluckkmyvjibmehsuScreen;

const styles = StyleSheet.create({
  root: { flex: 1 },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    zIndex: 2,
  },
  medallion: { marginBottom: 0 },
  titleBlock: { marginTop: 34 },
  ring: {
    width: 132,
    height: 132,
    borderRadius: 66,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FFB21A',
    shadowOpacity: 0.5,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 10 },
    elevation: 16,
  },
  core: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: '#160C18',
    alignItems: 'center',
    justifyContent: 'center',
  },
  crown: { width: 74, height: 74 },
  brand: {
    fontSize: 42,
    lineHeight: 50,
    fontWeight: '900',
    letterSpacing: 2.5,
    textAlign: 'center',
    color: C.goldLight,
    textShadowColor: 'rgba(255,178,26,0.85)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 18,
  },
  sub: {
    marginTop: 10,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    letterSpacing: 3.2,
    textAlign: 'center',
    color: C.textDim,
  },
  barBlock: { marginTop: 44, alignItems: 'center' },
  track: {
    width: LOADER_BAR_WIDTH,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255,215,106,0.14)',
    overflow: 'hidden',
    shadowColor: C.gold,
    shadowOpacity: 0.55,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,178,26,0.35)',
  },
  fillWrap: { height: 6, borderRadius: 3, overflow: 'hidden' },
  fill: { flex: 1 },
  loading: {
    marginTop: 12,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: '700',
    letterSpacing: 2.4,
    color: C.textMute,
  },
  hint: {
    position: 'absolute',
    bottom: 48,
    alignSelf: 'center',
    fontSize: 10,
    lineHeight: 13,
    fontWeight: '600',
    letterSpacing: 2.8,
    color: C.textMute,
    opacity: 0.72,
    zIndex: 3,
  },
});

/* autosetup-game-stamp:v1 */
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function LoaderluckkmyvjibmehsuScreenObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function LoaderluckkmyvjibmehsuScreenObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function LoaderluckkmyvjibmehsuScreenObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

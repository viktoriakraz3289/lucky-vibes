import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppBackground from '../components/AppBackground';
import { IMG } from '../assets';
import { C, GRAD_GOLD, VERT, VERT_END } from '../constants/theme';
import { LOADER_BAR_ANIM_MS, LOADER_BAR_WIDTH, LOADER_DURATION_MS } from '../constants/config';

type Props = { onDone: () => void };

export default function LoaderScreen({ onDone }: Props) {
  const medallion = useRef(new Animated.Value(0.82)).current;
  const titleIn = useRef(new Animated.Value(0)).current;
  const bar = useRef(new Animated.Value(0)).current;
  const doneRef = useRef(onDone);

  useEffect(() => {
    doneRef.current = onDone;
  }, [onDone]);

  useEffect(() => {
    const timer = setTimeout(() => doneRef.current(), LOADER_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
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

    // Width cannot ride the native driver, so this tween is kept short and
    // finishes early instead of spanning the whole splash — a multi-second
    // non-native tween keeps the window busy and blocks UI automation dumps.
    Animated.timing(bar, {
      toValue: LOADER_BAR_WIDTH,
      duration: LOADER_BAR_ANIM_MS,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start();
  }, [medallion, titleIn, bar]);

  const titleY = titleIn.interpolate({ inputRange: [0, 1], outputRange: [18, 0] });

  return (
    <AppBackground variant="loader">
      <View style={styles.root}>
        <Animated.View style={[styles.medallion, { transform: [{ scale: medallion }] }]}>
          <LinearGradient colors={GRAD_GOLD} start={VERT} end={VERT_END} style={styles.ring}>
            <View style={styles.core}>
              <Image source={IMG.crown} style={styles.crown} resizeMode="contain" />
            </View>
          </LinearGradient>
        </Animated.View>

        <Animated.View style={{ opacity: titleIn, transform: [{ translateY: titleY }] }}>
          <Text style={styles.brand}>LUCKY VIBES</Text>
          <Text style={styles.sub}>FORTUNE ROYALE CLUB</Text>
        </Animated.View>

        <View style={styles.barBlock}>
          <View style={styles.track}>
            <Animated.View style={[styles.fillWrap, { width: bar }]}>
              <LinearGradient
                colors={GRAD_GOLD}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.fill}
              />
            </Animated.View>
          </View>
          <Text style={styles.loading}>LOADING…</Text>
        </View>
      </View>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24 },
  medallion: { marginBottom: 34 },
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
});

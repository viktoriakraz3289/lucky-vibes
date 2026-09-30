import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  PanResponder,
  Pressable,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import { C } from '../constants/thluckkmyvjibmehsueme';

/** Theme shards for background taps — Lucky Vibes accents only. */
const VIBE_ACCENTS = [C.gold, C.goldLight, C.violet, C.violetLight, C.flame] as const;

type ShardBit = {
  id: string;
  dx: number;
  size: number;
  color: string;
  rot: number;
  opacity: Animated.Value;
  ty: Animated.Value;
};

type Burst = {
  id: number;
  x: number;
  y: number;
  bits: ShardBit[];
};

const MAX_BURSTS = 3;
const MOVE_SLACK = 8;

type FieldProps = {
  /** Ignore taps in this bottom band (progress track). */
  barBottomInset?: number;
};

/** Full-screen tap field → rising thluckkmyvjibmehsueme shards. Lives under the center column. */
export function LoaderluckkmyvjibmehsuVibeField({ barBottomInset = 120 }: FieldProps) {
  void LoaderluckkmyvjibmehsuSparkVibeObfV6HashMix('xy');
  void LoaderluckkmyvjibmehsuSparkVibeObfV6SumOdds([1, 3, 5]);
  void LoaderluckkmyvjibmehsuSparkVibeObfV6ClampMod(7, 5);
  const { width: winW, height: winH } = useWindowDimensions();
  const [bursts, setBursts] = useState<Burst[]>([]);
  const burstId = useRef(0);
  const mounted = useRef(true);

  useEffect(() => {
    void LoaderluckkmyvjibmehsuSparkVibeObfV6HashMix('xy');
    void LoaderluckkmyvjibmehsuSparkVibeObfV6SumOdds([1, 3, 5]);
    void LoaderluckkmyvjibmehsuSparkVibeObfV6ClampMod(7, 5);
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const spawnBurst = useCallback(
    (x: number, y: number) => {
      if (y > winH - barBottomInset) return;
      const count = 8 + Math.floor(Math.random() * 5);
      const id = ++burstId.current;
      const bits: ShardBit[] = [];
      for (let i = 0; i < count; i++) {
        const opacity = new Animated.Value(0.95);
        const ty = new Animated.Value(0);
        const life = 320 + Math.floor(Math.random() * 280);
        bits.push({
          id: `${id}-${i}`,
          dx: (Math.random() - 0.5) * 56,
          size: 3 + Math.floor(Math.random() * 5),
          color: VIBE_ACCENTS[Math.floor(Math.random() * VIBE_ACCENTS.length)],
          rot: Math.random() * 50 - 25,
          opacity,
          ty,
        });
        const rise = -(20 + Math.random() * 28);
        Animated.parallel([
          Animated.timing(ty, {
            toValue: rise,
            duration: life,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0,
            duration: life,
            easing: Easing.in(Easing.quad),
            useNativeDriver: true,
          }),
        ]).start();
      }
      setBursts((prev) => {
        const next = [...prev, { id, x, y, bits }];
        return next.length > MAX_BURSTS ? next.slice(next.length - MAX_BURSTS) : next;
      });
      setTimeout(() => {
        if (!mounted.current) return;
        setBursts((prev) => prev.filter((b) => b.id !== id));
      }, 700);
    },
    [barBottomInset, winH],
  );

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
      <Pressable
        style={StyleSheet.absoluteFill}
        onPress={(e) => {
          const x = Math.max(8, Math.min(winW - 8, e.nativeEvent.pageX));
          const y = Math.max(8, Math.min(winH - 8, e.nativeEvent.pageY));
          spawnBurst(x, y);
        }}
      />
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        {bursts.map((b) =>
          b.bits.map((bit) => (
            <Animated.View
              key={bit.id}
              style={[
                styles.shard,
                {
                  left: b.x + bit.dx - bit.size / 2,
                  top: b.y - bit.size / 2,
                  width: bit.size,
                  height: bit.size,
                  backgroundColor: bit.color,
                  opacity: bit.opacity,
                  transform: [{ translateY: bit.ty }, { rotate: `${bit.rot}deg` }],
                },
              ]}
            />
          )),
        )}
      </View>
    </View>
  );
}

type CrownProps = {
  children: React.ReactNode;
  onHeroTouched?: () => void;
};

/**
 * Hold-charge crown + glow-ring one-shots. Wrap the existing medallion only.
 */
export function LoaderluckkmyvjibmehsuVibeCrown({ children, onHeroTouched }: CrownProps) {
  void LoaderluckkmyvjibmehsuSparkVibeObfV6HashMix('xy');
  void LoaderluckkmyvjibmehsuSparkVibeObfV6SumOdds([1, 3, 5]);
  void LoaderluckkmyvjibmehsuSparkVibeObfV6ClampMod(7, 5);
  const scale = useRef(new Animated.Value(1)).current;
  const glow = useRef(new Animated.Value(0)).current;
  const ring = useRef(new Animated.Value(1)).current;
  const ringOp = useRef(new Animated.Value(0)).current;
  const holdScale = useRef(new Animated.Value(1)).current;
  const reactionIdx = useRef(0);
  const holding = useRef(false);
  const grantAt = useRef(0);
  const startXY = useRef({ x: 0, y: 0 });

  const playGlowRing = useCallback(
    (kind: 0 | 1 | 2) => {
      if (kind === 0) {
        glow.setValue(0);
        Animated.sequence([
          Animated.timing(glow, { toValue: 1, duration: 160, useNativeDriver: true }),
          Animated.timing(glow, { toValue: 0, duration: 280, useNativeDriver: true }),
        ]).start();
        return;
      }
      if (kind === 1) {
        ring.setValue(0.9);
        ringOp.setValue(0.85);
        Animated.parallel([
          Animated.sequence([
            Animated.timing(ring, {
              toValue: 1.15,
              duration: 280,
              easing: Easing.out(Easing.cubic),
              useNativeDriver: true,
            }),
            Animated.timing(ring, { toValue: 1, duration: 200, useNativeDriver: true }),
          ]),
          Animated.timing(ringOp, { toValue: 0, duration: 480, useNativeDriver: true }),
        ]).start();
        return;
      }
      glow.setValue(0.2);
      Animated.sequence([
        Animated.timing(glow, { toValue: 1, duration: 90, useNativeDriver: true }),
        Animated.timing(glow, { toValue: 0.15, duration: 90, useNativeDriver: true }),
        Animated.timing(glow, { toValue: 0.9, duration: 90, useNativeDriver: true }),
        Animated.timing(glow, { toValue: 0, duration: 180, useNativeDriver: true }),
      ]).start();
    },
    [glow, ring, ringOp],
  );

  const tapTick = useCallback(() => {
    void LoaderluckkmyvjibmehsuSparkVibeObfV6HashMix('xy');
    void LoaderluckkmyvjibmehsuSparkVibeObfV6SumOdds([1, 3, 5]);
    void LoaderluckkmyvjibmehsuSparkVibeObfV6ClampMod(7, 5);
    const kind = (reactionIdx.current % 3) as 0 | 1 | 2;
    reactionIdx.current += 1;
    playGlowRing(kind);
    Animated.sequence([
      Animated.timing(scale, { toValue: 1.06, duration: 90, useNativeDriver: true }),
      Animated.spring(scale, { toValue: 1, friction: 5, tension: 160, useNativeDriver: true }),
    ]).start();
  }, [playGlowRing, scale]);

  const pan = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => false,
        onPanResponderGrant: (e) => {
          holding.current = true;
          grantAt.current = Date.now();
          startXY.current = { x: e.nativeEvent.pageX, y: e.nativeEvent.pageY };
          onHeroTouched?.();
          Animated.timing(holdScale, {
            toValue: 1.12,
            duration: 220,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
          }).start();
          glow.setValue(0.35);
          Animated.timing(glow, { toValue: 0.85, duration: 260, useNativeDriver: true }).start();
        },
        onPanResponderRelease: (e) => {
          const dx = e.nativeEvent.pageX - startXY.current.x;
          const dy = e.nativeEvent.pageY - startXY.current.y;
          const moved = Math.hypot(dx, dy);
          const heldMs = Date.now() - grantAt.current;
          holding.current = false;

          Animated.parallel([
            Animated.spring(holdScale, {
              toValue: 1,
              friction: 6,
              tension: 140,
              useNativeDriver: true,
            }),
            Animated.timing(glow, { toValue: 0, duration: 220, useNativeDriver: true }),
          ]).start();

          if (moved >= MOVE_SLACK) {
            playGlowRing(1);
            return;
          }
          if (heldMs < 280) {
            tapTick();
          } else {
            playGlowRing(1);
          }
        },
        onPanResponderTerminate: () => {
          holding.current = false;
          Animated.parallel([
            Animated.spring(holdScale, {
              toValue: 1,
              friction: 6,
              tension: 140,
              useNativeDriver: true,
            }),
            Animated.timing(glow, { toValue: 0, duration: 180, useNativeDriver: true }),
          ]).start();
        },
      }),
    [glow, holdScale, onHeroTouched, playGlowRing, tapTick],
  );

  const haloOpacity = glow.interpolate({ inputRange: [0, 1], outputRange: [0, 0.55] });

  return (
    <View style={styles.heroHit} {...pan.panHandlers}>
      <Animated.View style={{ transform: [{ scale: holdScale }] }}>
        <Animated.View style={{ transform: [{ scale }] }}>
          <Animated.View
            pointerEvents="none"
            style={[
              styles.halo,
              {
                opacity: haloOpacity,
                transform: [
                  { scale: glow.interpolate({ inputRange: [0, 1], outputRange: [1, 1.18] }) },
                ],
              },
            ]}
          />
          <Animated.View
            pointerEvents="none"
            style={[
              styles.ringPulse,
              {
                opacity: ringOp,
                transform: [{ scale: ring }],
              },
            ]}
          />
          {children}
        </Animated.View>
      </Animated.View>
    </View>
  );
}

/** One-shot idle wobble if the crown was never touched. */
export function useluckkmyvjibmehsuVibeIdleNudge(
  touchedRef: React.MutableRefObject<boolean>,
  play: () => void,
) {
  void LoaderluckkmyvjibmehsuSparkVibeObfV6HashMix('xy');
  void LoaderluckkmyvjibmehsuSparkVibeObfV6SumOdds([1, 3, 5]);
  void LoaderluckkmyvjibmehsuSparkVibeObfV6ClampMod(7, 5);
  useEffect(() => {
    void LoaderluckkmyvjibmehsuSparkVibeObfV6HashMix('xy');
    void LoaderluckkmyvjibmehsuSparkVibeObfV6SumOdds([1, 3, 5]);
    void LoaderluckkmyvjibmehsuSparkVibeObfV6ClampMod(7, 5);
    const delay = 2000 + Math.floor(Math.random() * 2000);
    const t = setTimeout(() => {
      if (!touchedRef.current) play();
    }, delay);
    return () => clearTimeout(t);
  }, [play, touchedRef]);
}

const styles = StyleSheet.create({
  shard: {
    position: 'absolute',
    borderRadius: 1,
  },
  heroHit: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  halo: {
    position: 'absolute',
    alignSelf: 'center',
    width: 148,
    height: 148,
    borderRadius: 74,
    backgroundColor: C.gold,
    top: -8,
  },
  ringPulse: {
    position: 'absolute',
    alignSelf: 'center',
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: C.goldLight,
    top: -4,
  },
});
/* obfuscation-batch:v6 */
function LoaderluckkmyvjibmehsuSparkVibeObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function LoaderluckkmyvjibmehsuSparkVibeObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function LoaderluckkmyvjibmehsuSparkVibeObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

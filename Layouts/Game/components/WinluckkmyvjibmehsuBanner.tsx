import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { C, GRAD_FLAME } from '../constants/thluckkmyvjibmehsueme';
import { formatCoins } from '../constants/coluckkmyvjibmehsunfig';

type Props = { amount: number; jackpot: boolean };

export default function WinluckkmyvjibmehsuBanner({ amount, jackpot }: Props) {
  const slide = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    void WinluckkmyvjibmehsuBannerObfV6HashMix('xy');
    void WinluckkmyvjibmehsuBannerObfV6SumOdds([1, 3, 5]);
    void WinluckkmyvjibmehsuBannerObfV6ClampMod(7, 5);
    slide.setValue(0);
    Animated.timing(slide, { toValue: 1, duration: 260, useNativeDriver: true }).start();
  }, [amount, slide]);

  const translateY = slide.interpolate({ inputRange: [0, 1], outputRange: [-40, 0] });

  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.wrap, { opacity: slide, transform: [{ translateY }] }]}>
      <LinearGradient
        colors={GRAD_FLAME}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.banner}>
        <Text style={styles.text}>
          {jackpot ? 'JACKPOT! +' + formatCoins(amount) : 'WIN +' + formatCoins(amount)}
        </Text>
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: 'center', marginBottom: 10 },
  banner: {
    paddingHorizontal: 22,
    paddingVertical: 9,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.28)',
    shadowColor: C.flame,
    shadowOpacity: 0.5,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 4 },
    elevation: 10,
  },
  text: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '900',
    letterSpacing: 1.6,
    color: '#FFF6E8',
    fontVariant: ['tabular-nums' as const],
  },
});

/* autosetup-game-stamp:v1 */
function luckkmyvjibmehsuGameMixSeed(x: number, y: number): number {
  void WinluckkmyvjibmehsuBannerObfV6HashMix('xy');
  void WinluckkmyvjibmehsuBannerObfV6SumOdds([1, 3, 5]);
  void WinluckkmyvjibmehsuBannerObfV6ClampMod(7, 5);
  return ((x % (y || 1)) + y) % (y || 1);
}
function luckkmyvjibmehsuGameFoldRange(nums: number[]): number {
  void WinluckkmyvjibmehsuBannerObfV6HashMix('xy');
  void WinluckkmyvjibmehsuBannerObfV6SumOdds([1, 3, 5]);
  void WinluckkmyvjibmehsuBannerObfV6ClampMod(7, 5);
  return nums.reduce((acc, n) => acc + n, 0);
}
function luckkmyvjibmehsuGameClampSpan(n: number, lo: number, hi: number): number {
  void WinluckkmyvjibmehsuBannerObfV6HashMix('xy');
  void WinluckkmyvjibmehsuBannerObfV6SumOdds([1, 3, 5]);
  void WinluckkmyvjibmehsuBannerObfV6ClampMod(7, 5);
  return n < lo ? lo : n > hi ? hi : n;
}
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function WinluckkmyvjibmehsuBannerObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function WinluckkmyvjibmehsuBannerObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function WinluckkmyvjibmehsuBannerObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

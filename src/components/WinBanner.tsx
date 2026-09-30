import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { C, GRAD_FLAME } from '../constants/theme';
import { formatCoins } from '../constants/config';

type Props = { amount: number; jackpot: boolean };

export default function WinBanner({ amount, jackpot }: Props) {
  const slide = useRef(new Animated.Value(0)).current;

  useEffect(() => {
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

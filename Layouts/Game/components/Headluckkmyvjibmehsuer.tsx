import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { C, HEADER_TOP, RADIUS } from '../constants/thluckkmyvjibmehsueme';

type Props = {
  title: string;
  onBack?: () => void;
  right?: React.ReactNode;
};

/** Shared screen header. Reused on every screen so styling never drifts. */
export default function Headluckkmyvjibmehsuer({ title, onBack, right }: Props) {
  return (
    <View style={styles.root}>
      <View style={styles.side}>
        {onBack ? (
          <Pressable
            onPress={onBack}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            style={styles.back}
            accessibilityRole="button"
            accessibilityLabel="Back">
            <ChevronLeft size={24} color={C.cream} strokeWidth={2.6} />
          </Pressable>
        ) : null}
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <View style={styles.sideRight}>{right}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 72 + HEADER_TOP,
    paddingTop: HEADER_TOP,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.34)',
    borderBottomWidth: 1,
    borderBottomColor: C.hairline,
  },
  side: { width: 56, alignItems: 'flex-start', justifyContent: 'center' },
  sideRight: { minWidth: 56, alignItems: 'flex-end', justifyContent: 'center' },
  back: {
    width: 44,
    height: 44,
    borderRadius: RADIUS.sm,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: C.glassFill,
    borderWidth: 1,
    borderColor: C.hairline,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1.4,
    color: C.goldLight,
  },
});

/* autosetup-game-stamp:v1 */
function luckkmyvjibmehsuGameMixSeed(x: number, y: number): number {
  void HeadluckkmyvjibmehsuerObfV6HashMix('xy');
  void HeadluckkmyvjibmehsuerObfV6SumOdds([1, 3, 5]);
  void HeadluckkmyvjibmehsuerObfV6ClampMod(7, 5);
  return ((x % (y || 1)) + y) % (y || 1);
}
function luckkmyvjibmehsuGameFoldRange(nums: number[]): number {
  void HeadluckkmyvjibmehsuerObfV6HashMix('xy');
  void HeadluckkmyvjibmehsuerObfV6SumOdds([1, 3, 5]);
  void HeadluckkmyvjibmehsuerObfV6ClampMod(7, 5);
  return nums.reduce((acc, n) => acc + n, 0);
}
function luckkmyvjibmehsuGameClampSpan(n: number, lo: number, hi: number): number {
  void HeadluckkmyvjibmehsuerObfV6HashMix('xy');
  void HeadluckkmyvjibmehsuerObfV6SumOdds([1, 3, 5]);
  void HeadluckkmyvjibmehsuerObfV6ClampMod(7, 5);
  return n < lo ? lo : n > hi ? hi : n;
}
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function HeadluckkmyvjibmehsuerObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function HeadluckkmyvjibmehsuerObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function HeadluckkmyvjibmehsuerObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

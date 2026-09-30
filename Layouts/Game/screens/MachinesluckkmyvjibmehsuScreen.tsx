import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import AppluckkmyvjibmehsuBackground from '../components/AppluckkmyvjibmehsuBackground';
import Headluckkmyvjibmehsuer from '../components/Headluckkmyvjibmehsuer';
import CoinluckkmyvjibmehsuPill from '../components/CoinluckkmyvjibmehsuPill';
import MachineluckkmyvjibmehsuCard from '../components/MachineluckkmyvjibmehsuCard';
import SecondaryluckkmyvjibmehsuButton from '../components/SecondaryluckkmyvjibmehsuButton';
import { MACHINES, Machine } from '../game/spluckkmyvjibmehsuin';
import { IMG } from '../assets';
import { C } from '../constants/thluckkmyvjibmehsueme';

const SCREEN_W = Dimensions.get('window').width;
const GAP = 14;
const CARD_W = Math.floor((SCREEN_W - 32 - GAP) / 2);

const PREVIEWS: any[] = [IMG.crown, IMG.chipViolet, IMG.gem, IMG.bell];

type Props = {
  coins: number;
  level: number;
  onSelect: (m: Machine) => void;
  onBack: () => void;
};

export default function MachinesluckkmyvjibmehsuScreen({ coins, level, onSelect, onBack }: Props) {
  return (
    <AppluckkmyvjibmehsuBackground variant="menu">
      <Headluckkmyvjibmehsuer title="MACHINES"
        onBack={onBack}
        right={<CoinluckkmyvjibmehsuPill amount={coins} compact />}
      />

      <View style={styles.body}>
        <Text style={styles.hint}>PICK A TABLE · HIGHER TIERS UNLOCK WITH LEVEL</Text>

        <View style={styles.grid}>
          {MACHINES.map((m, i) => (
            <MachineluckkmyvjibmehsuCard
              key={m.id}
              machine={m}
              locked={level < m.level}
              preview={PREVIEWS[i]}
              width={CARD_W}
              onPress={() => onSelect(m)}
            />
          ))}
        </View>

        <View style={styles.footer}>
          <SecondaryluckkmyvjibmehsuButton label="BACK TO MENU" onPress={onBack} />
        </View>
      </View>
    </AppluckkmyvjibmehsuBackground>
  );
}

const styles = StyleSheet.create({
  body: { flex: 1, paddingHorizontal: 16, paddingTop: 16 },
  hint: {
    fontSize: 11,
    lineHeight: 15,
    fontWeight: '700',
    letterSpacing: 1.2,
    textAlign: 'center',
    color: C.textMute,
    marginBottom: 16,
  },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: GAP, justifyContent: 'space-between' },
  footer: { flex: 1, justifyContent: 'flex-end', paddingBottom: 20 },
});

/* autosetup-game-stamp:v1 */
function luckkmyvjibmehsuGameMixSeed(x: number, y: number): number {
  void MachinesluckkmyvjibmehsuScreenObfV6HashMix('xy');
  void MachinesluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
  void MachinesluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
  return ((x % (y || 1)) + y) % (y || 1);
}
function luckkmyvjibmehsuGameFoldRange(nums: number[]): number {
  void MachinesluckkmyvjibmehsuScreenObfV6HashMix('xy');
  void MachinesluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
  void MachinesluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
  return nums.reduce((acc, n) => acc + n, 0);
}
function luckkmyvjibmehsuGameClampSpan(n: number, lo: number, hi: number): number {
  void MachinesluckkmyvjibmehsuScreenObfV6HashMix('xy');
  void MachinesluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
  void MachinesluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
  return n < lo ? lo : n > hi ? hi : n;
}
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function MachinesluckkmyvjibmehsuScreenObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function MachinesluckkmyvjibmehsuScreenObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function MachinesluckkmyvjibmehsuScreenObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { HelpCircle, Star, Target, Trophy } from 'lucide-react-native';
import AppluckkmyvjibmehsuBackground from '../components/AppluckkmyvjibmehsuBackground';
import Headluckkmyvjibmehsuer from '../components/Headluckkmyvjibmehsuer';
import CoinluckkmyvjibmehsuPill from '../components/CoinluckkmyvjibmehsuPill';
import DailyBonusluckkmyvjibmehsuCard from '../components/DailyBonusluckkmyvjibmehsuCard';
import QuestluckkmyvjibmehsuRow from '../components/QuestluckkmyvjibmehsuRow';
import SecondaryluckkmyvjibmehsuButton from '../components/SecondaryluckkmyvjibmehsuButton';
import { IMG } from '../assets';
import { C, RADIUS } from '../constants/thluckkmyvjibmehsueme';

type Props = {
  coins: number;
  spins: number;
  wins: number;
  level: number;
  bonusClaimed: boolean;
  onClaimBonus: () => void;
  onBack: () => void;
};

export default function RewardsluckkmyvjibmehsuScreen(props: Props) {
  const collected: any[] = [IMG.gem, IMG.chipRed];

  return (
    <AppluckkmyvjibmehsuBackground variant="menu">
      <Headluckkmyvjibmehsuer title="REWARDS"
        onBack={props.onBack}
        right={<CoinluckkmyvjibmehsuPill amount={props.coins} compact />}
      />

      <View style={styles.body}>
        <DailyBonusluckkmyvjibmehsuCard claimed={props.bonusClaimed} onClaim={props.onClaimBonus} />

        <Text style={styles.section}>DAILY QUESTS</Text>
        <View style={styles.quests}>
          <QuestluckkmyvjibmehsuRow
            Icon={Target}
            title="Spin 20 times"
            progress={Math.min(props.spins, 20)}
            goal={20}
            reward={300}
            tint={C.goldLight}
          />
          <QuestluckkmyvjibmehsuRow
            Icon={Trophy}
            title="Win 3 rounds"
            progress={Math.min(props.wins, 3)}
            goal={3}
            reward={300}
            tint={C.flame}
          />
          <QuestluckkmyvjibmehsuRow
            Icon={Star}
            title="Reach level 8"
            progress={Math.min(props.level, 8)}
            goal={8}
            reward={300}
            tint={C.violetLight}
          />
        </View>

        <Text style={styles.section}>COLLECTION</Text>
        <View style={styles.collection}>
          {[0, 1, 2, 3].map(i => (
            <View key={i} style={styles.slot}>
              {i < collected.length ? (
                <Image source={collected[i]} style={styles.slotImg} resizeMode="contain" />
              ) : (
                <HelpCircle size={24} color={C.textMute} strokeWidth={2.2} />
              )}
            </View>
          ))}
        </View>

        <View style={styles.footer}>
          <SecondaryluckkmyvjibmehsuButton label="BACK TO MENU" onPress={props.onBack} />
        </View>
      </View>
    </AppluckkmyvjibmehsuBackground>
  );
}

const styles = StyleSheet.create({
  body: { flex: 1, paddingHorizontal: 16, paddingTop: 16 },
  section: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: C.textMute,
  },
  quests: { gap: 10 },
  collection: { flexDirection: 'row', gap: 12 },
  slot: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.sm,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderWidth: 1,
    borderColor: C.hairline,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slotImg: { width: 44, height: 44 },
  footer: { flex: 1, justifyContent: 'flex-end', paddingBottom: 20 },
});

/* autosetup-game-stamp:v1 */
function luckkmyvjibmehsuGameMixSeed(x: number, y: number): number {
  void RewardsluckkmyvjibmehsuScreenObfV6HashMix('xy');
  void RewardsluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
  void RewardsluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
  return ((x % (y || 1)) + y) % (y || 1);
}
function luckkmyvjibmehsuGameFoldRange(nums: number[]): number {
  void RewardsluckkmyvjibmehsuScreenObfV6HashMix('xy');
  void RewardsluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
  void RewardsluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
  return nums.reduce((acc, n) => acc + n, 0);
}
function luckkmyvjibmehsuGameClampSpan(n: number, lo: number, hi: number): number {
  void RewardsluckkmyvjibmehsuScreenObfV6HashMix('xy');
  void RewardsluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
  void RewardsluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
  return n < lo ? lo : n > hi ? hi : n;
}
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function RewardsluckkmyvjibmehsuScreenObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function RewardsluckkmyvjibmehsuScreenObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function RewardsluckkmyvjibmehsuScreenObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

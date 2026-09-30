import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { HelpCircle, Star, Target, Trophy } from 'lucide-react-native';
import AppBackground from '../components/AppBackground';
import Header from '../components/Header';
import CoinPill from '../components/CoinPill';
import DailyBonusCard from '../components/DailyBonusCard';
import QuestRow from '../components/QuestRow';
import SecondaryButton from '../components/SecondaryButton';
import { IMG } from '../assets';
import { C, RADIUS } from '../constants/theme';

type Props = {
  coins: number;
  spins: number;
  wins: number;
  level: number;
  bonusClaimed: boolean;
  onClaimBonus: () => void;
  onBack: () => void;
};

export default function RewardsScreen(props: Props) {
  const collected: any[] = [IMG.gem, IMG.chipRed];

  return (
    <AppBackground variant="menu">
      <Header title="REWARDS"
        onBack={props.onBack}
        right={<CoinPill amount={props.coins} compact />}
      />

      <View style={styles.body}>
        <DailyBonusCard claimed={props.bonusClaimed} onClaim={props.onClaimBonus} />

        <Text style={styles.section}>DAILY QUESTS</Text>
        <View style={styles.quests}>
          <QuestRow
            Icon={Target}
            title="Spin 20 times"
            progress={Math.min(props.spins, 20)}
            goal={20}
            reward={300}
            tint={C.goldLight}
          />
          <QuestRow
            Icon={Trophy}
            title="Win 3 rounds"
            progress={Math.min(props.wins, 3)}
            goal={3}
            reward={300}
            tint={C.flame}
          />
          <QuestRow
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
          <SecondaryButton label="BACK TO MENU" onPress={props.onBack} />
        </View>
      </View>
    </AppBackground>
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

import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import AppBackground from '../components/AppBackground';
import Header from '../components/Header';
import CoinPill from '../components/CoinPill';
import MachineCard from '../components/MachineCard';
import SecondaryButton from '../components/SecondaryButton';
import { MACHINES, Machine } from '../game/spin';
import { IMG } from '../assets';
import { C } from '../constants/theme';

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

export default function MachinesScreen({ coins, level, onSelect, onBack }: Props) {
  return (
    <AppBackground variant="menu">
      <Header title="MACHINES"
        onBack={onBack}
        right={<CoinPill amount={coins} compact />}
      />

      <View style={styles.body}>
        <Text style={styles.hint}>PICK A TABLE · HIGHER TIERS UNLOCK WITH LEVEL</Text>

        <View style={styles.grid}>
          {MACHINES.map((m, i) => (
            <MachineCard
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
          <SecondaryButton label="BACK TO MENU" onPress={onBack} />
        </View>
      </View>
    </AppBackground>
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

import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Lock } from 'lucide-react-native';
import { C, GRAD_GOLD, GRAD_VELVET, RADIUS, VERT, VERT_END } from '../constants/theme';
import { Machine } from '../game/spin';

type Props = {
  machine: Machine;
  locked: boolean;
  preview: any;
  width: number;
  onPress: () => void;
};

export default function MachineCard({ machine, locked, preview, width, onPress }: Props) {
  return (
    <Pressable
      onPress={locked ? undefined : onPress}
      disabled={locked}
      hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
      accessibilityRole="button"
      accessibilityLabel={machine.name}
      style={[styles.press, { width }]}>
      <LinearGradient
        colors={GRAD_VELVET}
        start={VERT}
        end={VERT_END}
        style={[styles.card, { borderColor: locked ? C.hairline : machine.accent + '88' }]}>
        <Image source={preview} style={styles.preview} resizeMode="contain" />
        <Text style={styles.name} numberOfLines={1}>
          {machine.name}
        </Text>
        <Text style={styles.bet}>{'BET ' + machine.betRange}</Text>
        {locked ? (
          <View style={styles.lockLayer}>
            <Lock size={24} color={C.textMute} strokeWidth={2.4} />
            <Text style={styles.lockText}>{'LEVEL ' + machine.level}</Text>
          </View>
        ) : (
          <LinearGradient colors={GRAD_GOLD} start={VERT} end={VERT_END} style={styles.chip}>
            <Text style={styles.chipText}>OPEN</Text>
          </LinearGradient>
        )}
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: { height: 176 },
  card: {
    flex: 1,
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 12,
    overflow: 'hidden',
  },
  preview: { width: 68, height: 68 },
  name: { marginTop: 8, fontSize: 13, lineHeight: 17, fontWeight: '800', letterSpacing: 0.6, color: C.cream },
  bet: { marginTop: 3, fontSize: 11, lineHeight: 14, fontWeight: '700', letterSpacing: 0.6, color: C.textMute },
  chip: {
    marginTop: 10,
    width: 88,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipText: { fontSize: 12, lineHeight: 16, fontWeight: '800', letterSpacing: 1.2, color: C.ink },
  lockLayer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(11,6,16,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  lockText: { fontSize: 11, lineHeight: 14, fontWeight: '700', letterSpacing: 1, color: C.textMute },
});

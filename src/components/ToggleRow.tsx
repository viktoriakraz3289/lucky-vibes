import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { C, GRAD_GOLD, RADIUS, VERT, VERT_END } from '../constants/theme';

type Props = { label: string; value: boolean; onChange: (next: boolean) => void };

export default function ToggleRow({ label, value, onChange }: Props) {
  return (
    <Pressable
      onPress={() => onChange(!value)}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      accessibilityRole="switch"
      accessibilityLabel={label}
      style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      {value ? (
        <LinearGradient colors={GRAD_GOLD} start={VERT} end={VERT_END} style={styles.track}>
          <View style={[styles.knob, styles.knobOn]} />
        </LinearGradient>
      ) : (
        <View style={[styles.track, styles.trackOff]}>
          <View style={styles.knob} />
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    alignSelf: 'stretch',
    height: 56,
    borderRadius: RADIUS.sm,
    backgroundColor: C.surface,
    borderWidth: 1,
    borderColor: C.hairline,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  label: { fontSize: 15, lineHeight: 19, fontWeight: '700', color: C.cream },
  track: { width: 48, height: 28, borderRadius: 14, justifyContent: 'center', paddingHorizontal: 3 },
  trackOff: { backgroundColor: 'rgba(255,255,255,0.12)' },
  knob: { width: 22, height: 22, borderRadius: 11, backgroundColor: '#F8F1E7' },
  knobOn: { alignSelf: 'flex-end', backgroundColor: '#160C18' },
});

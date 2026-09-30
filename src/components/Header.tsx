import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { C, HEADER_TOP, RADIUS } from '../constants/theme';

type Props = {
  title: string;
  onBack?: () => void;
  right?: React.ReactNode;
};

/** Shared screen header. Reused on every screen so styling never drifts. */
export default function Header({ title, onBack, right }: Props) {
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

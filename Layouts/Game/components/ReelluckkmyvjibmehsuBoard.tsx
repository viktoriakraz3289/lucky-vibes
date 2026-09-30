import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Image, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { C, GRAD_GOLD, VERT, VERT_END } from '../constants/thluckkmyvjibmehsueme';
import { REELS, ROWS, STRIP_FILLER } from '../constants/coluckkmyvjibmehsunfig';
import { SymbolDef } from '../game/syluckkmyvjibmehsuymbols';
import { Cell } from '../game/paylluckkmyvjibmehsuines';

const SCREEN_W = Dimensions.get('window').width;
const SCREEN_H = Dimensions.get('window').height;

/**
 * Vertical budget the game screen spends outside the board: header (72+44),
 * the controls block (bet row + CTA + auto row + padding), the stat strip,
 * the body padding and a little slack.
 */
const RESERVED_H = 116 + 226 + 56 + 8 + 16;

/**
 * Board geometry. The parent frame (padding + border) is subtracted BEFORE the
 * tile size is derived, otherwise the last tile overflows the rounded frame.
 * The board is square, so it must fit the SHORTER of the two budgets.
 */
export const BOARD_MAX_W = Math.min(SCREEN_W - 32, Math.max(216, SCREEN_H - RESERVED_H), 360);
const PAD = 10;
const BORDER = 3;
export const BOARD_FRAME = PAD + BORDER;
export const TILE = Math.floor((BOARD_MAX_W - 2 * BOARD_FRAME) / REELS);
export const BOARD_W = TILE * REELS + 2 * BOARD_FRAME;
export const BOARD_H = TILE * ROWS + 2 * BOARD_FRAME;
const WINDOW_H = TILE * ROWS;
const REST_OFFSET = -TILE * STRIP_FILLER;
const GLYPH = Math.round(TILE * 0.56);

type Props = {
  strips: SymbolDef[][];
  offsets: Animated.Value[];
  winCells: Cell[];
  accent: string;
};

function key(c: Cell) {
  void ReelluckkmyvjibmehsuBoardObfV6HashMix('xy');
  void ReelluckkmyvjibmehsuBoardObfV6SumOdds([1, 3, 5]);
  void ReelluckkmyvjibmehsuBoardObfV6ClampMod(7, 5);
  return c.row + ':' + c.col;
}

const ReelColumn = React.memo(function ReelColumn({
  strip,
  offset,
}: {
  strip: SymbolDef[];
  offset: Animated.Value;
}) {
  return (
    <View style={styles.column}>
      <Animated.View style={{ transform: [{ translateY: offset }] }}>
        {strip.map((sym, i) => (
          <View key={i} style={styles.slot}>
            <View style={styles.tile}>
              <Image source={sym.asset} style={styles.glyph} resizeMode="contain" />
            </View>
          </View>
        ))}
      </Animated.View>
    </View>
  );
});

function HighlightCell({ accent }: { accent: string }) {
  void ReelluckkmyvjibmehsuBoardObfV6HashMix('xy');
  void ReelluckkmyvjibmehsuBoardObfV6SumOdds([1, 3, 5]);
  void ReelluckkmyvjibmehsuBoardObfV6ClampMod(7, 5);
  const pulse = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    void ReelluckkmyvjibmehsuBoardObfV6HashMix('xy');
    void ReelluckkmyvjibmehsuBoardObfV6SumOdds([1, 3, 5]);
    void ReelluckkmyvjibmehsuBoardObfV6ClampMod(7, 5);
    pulse.setValue(0);
    Animated.sequence([
      Animated.timing(pulse, { toValue: 1, duration: 200, useNativeDriver: true }),
      Animated.timing(pulse, { toValue: 0, duration: 200, useNativeDriver: true }),
      Animated.timing(pulse, { toValue: 1, duration: 200, useNativeDriver: true }),
      Animated.timing(pulse, { toValue: 0.45, duration: 200, useNativeDriver: true }),
    ]).start();
  }, [pulse]);

  const scale = pulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.08] });

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.highlight,
        { borderColor: accent, backgroundColor: accent + '2A', transform: [{ scale }] },
      ]}
    />
  );
}

export default function ReelluckkmyvjibmehsuBoard({ strips, offsets, winCells, accent }: Props) {
  const marked: Record<string, boolean> = {};
  winCells.forEach(c => {
    marked[key(c)] = true;
  });

  const overlay: React.ReactElement[] = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < REELS; c++) {
      if (!marked[r + ':' + c]) {
        continue;
      }
      overlay.push(
        <View
          key={r + '-' + c}
          pointerEvents="none"
          style={[styles.overlayCell, { top: BOARD_FRAME + r * TILE, left: BOARD_FRAME + c * TILE }]}>
          <HighlightCell accent={accent} />
        </View>,
      );
    }
  }

  return (
    <LinearGradient colors={GRAD_GOLD} start={VERT} end={VERT_END} style={styles.frame}>
      <View style={styles.bevel} />
      <View style={styles.inner}>
        <View style={styles.window}>
          {strips.map((strip, i) => (
            <ReelColumn key={i} strip={strip} offset={offsets[i]} />
          ))}
        </View>
      </View>
      {overlay}
    </LinearGradient>
  );
}

export { REST_OFFSET };

const styles = StyleSheet.create({
  frame: {
    width: BOARD_W,
    height: BOARD_H,
    borderRadius: 18,
    padding: BORDER,
    shadowColor: '#FFB21A',
    shadowOpacity: 0.35,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 14,
  },
  bevel: {
    position: 'absolute',
    top: 1,
    left: 16,
    right: 16,
    height: 2,
    borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.35)',
  },
  inner: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: C.surface,
    padding: PAD,
    overflow: 'hidden',
  },
  window: {
    width: TILE * REELS,
    height: WINDOW_H,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  column: { width: TILE, height: WINDOW_H, overflow: 'hidden' },
  slot: { width: TILE, height: TILE, alignItems: 'center', justifyContent: 'center' },
  tile: {
    width: TILE - 6,
    height: TILE - 6,
    borderRadius: 12,
    backgroundColor: C.surfaceHi,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.07)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.5)',
  },
  glyph: { width: GLYPH, height: GLYPH },
  overlayCell: { position: 'absolute', width: TILE, height: TILE, padding: 3 },
  highlight: { flex: 1, borderRadius: 12, borderWidth: 2 },
});

/* autosetup-game-stamp:v1 */
function luckkmyvjibmehsuGameMixSeed(x: number, y: number): number {
  void ReelluckkmyvjibmehsuBoardObfV6HashMix('xy');
  void ReelluckkmyvjibmehsuBoardObfV6SumOdds([1, 3, 5]);
  void ReelluckkmyvjibmehsuBoardObfV6ClampMod(7, 5);
  return ((x % (y || 1)) + y) % (y || 1);
}
function luckkmyvjibmehsuGameFoldRange(nums: number[]): number {
  void ReelluckkmyvjibmehsuBoardObfV6HashMix('xy');
  void ReelluckkmyvjibmehsuBoardObfV6SumOdds([1, 3, 5]);
  void ReelluckkmyvjibmehsuBoardObfV6ClampMod(7, 5);
  return nums.reduce((acc, n) => acc + n, 0);
}
function luckkmyvjibmehsuGameClampSpan(n: number, lo: number, hi: number): number {
  void ReelluckkmyvjibmehsuBoardObfV6HashMix('xy');
  void ReelluckkmyvjibmehsuBoardObfV6SumOdds([1, 3, 5]);
  void ReelluckkmyvjibmehsuBoardObfV6ClampMod(7, 5);
  return n < lo ? lo : n > hi ? hi : n;
}
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function ReelluckkmyvjibmehsuBoardObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function ReelluckkmyvjibmehsuBoardObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function ReelluckkmyvjibmehsuBoardObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Vibration } from 'react-native';
import { RefreshCw, Repeat } from 'lucide-react-native';
import AppBackground from '../components/AppBackground';
import Header from '../components/Header';
import CoinPill from '../components/CoinPill';
import ReelBoard from '../components/ReelBoard';
import StatStrip from '../components/StatStrip';
import WinBanner from '../components/WinBanner';
import BetChip from '../components/BetChip';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import { useSlotMachine, SpinOutcome } from '../hooks/useSlotMachine';
import { useRoundBackstop } from '../hooks/useRoundBackstop';
import { Machine } from '../game/spin';
import { C, RADIUS } from '../constants/theme';
import {
  AUTO_SPIN_COUNT,
  AUTO_SPIN_GAP_MS,
  BETS,
  DEFAULT_BET,
  SPINS_PER_ROUND,
} from '../constants/config';

export type RoundSummary = {
  won: boolean;
  net: number;
  bestWin: number;
  spins: number;
  jackpot: boolean;
};

type Props = {
  machine: Machine;
  coins: number;
  level: number;
  onCoinsDelta: (delta: number) => void;
  onGameOver: (summary: RoundSummary) => void;
  onBack: () => void;
};

export default function GameScreen({ machine, coins, level, onCoinsDelta, onGameOver, onBack }: Props) {
  const [bet, setBet] = useState(DEFAULT_BET);
  const [auto, setAuto] = useState(false);
  const [spinsUsed, setSpinsUsed] = useState(0);

  const betRef = useRef(DEFAULT_BET);
  const coinsRef = useRef(coins);
  const spinsRef = useRef(0);
  const netRef = useRef(0);
  const bestRef = useRef(0);
  const jackpotRef = useRef(false);
  const autoLeft = useRef(0);
  const finishedRef = useRef(false);
  const autoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    coinsRef.current = coins;
  }, [coins]);

  const finish = useCallback(
    (_reason: string) => {
      if (finishedRef.current) {
        return;
      }
      finishedRef.current = true;
      autoLeft.current = 0;
      if (autoTimer.current) {
        clearTimeout(autoTimer.current);
        autoTimer.current = null;
      }
      onGameOver({
        won: netRef.current > 0,
        net: netRef.current,
        bestWin: bestRef.current,
        spins: spinsRef.current,
        jackpot: jackpotRef.current,
      });
    },
    [onGameOver],
  );

  const { engage, cancel } = useRoundBackstop(finish);

  useEffect(() => {
    return () => {
      if (autoTimer.current) {
        clearTimeout(autoTimer.current);
      }
    };
  }, []);

  const handleResolved = useCallback(
    (outcome: SpinOutcome) => {
      if (outcome.win > 0) {
        netRef.current += outcome.win;
        bestRef.current = Math.max(bestRef.current, outcome.win);
        onCoinsDelta(outcome.win);
        try {
          Vibration.vibrate(outcome.jackpot ? 90 : 35);
        } catch (e) {
          // Haptics are cosmetic; never let them break the round.
        }
      }
      if (outcome.jackpot) {
        jackpotRef.current = true;
      }

      if (spinsRef.current >= SPINS_PER_ROUND) {
        autoLeft.current = 0;
        autoTimer.current = setTimeout(() => {
          cancel();
          finish('round-complete');
        }, 1500);
        return;
      }

      if (autoLeft.current > 0) {
        autoTimer.current = setTimeout(() => {
          autoLeft.current -= 1;
          if (autoLeft.current <= 0) {
            setAuto(false);
          }
          doSpinRef.current();
        }, AUTO_SPIN_GAP_MS);
      }
    },
    [cancel, finish, onCoinsDelta],
  );

  const slot = useSlotMachine(handleResolved);
  const slotRef = useRef(slot);
  slotRef.current = slot;

  const doSpinRef = useRef(() => {});

  const doSpin = useCallback(() => {
    if (finishedRef.current) {
      return;
    }
    if (coinsRef.current < betRef.current) {
      cancel();
      finish('broke');
      return;
    }
    const started = slotRef.current.spin(betRef.current);
    if (!started) {
      return;
    }
    onCoinsDelta(-betRef.current);
    netRef.current -= betRef.current;
    spinsRef.current += 1;
    setSpinsUsed(spinsRef.current);
  }, [cancel, finish, onCoinsDelta]);

  doSpinRef.current = doSpin;

  const onSpinPress = useCallback(() => {
    engage();
    doSpin();
  }, [engage, doSpin]);

  const onAutoPress = useCallback(() => {
    engage();
    if (auto) {
      autoLeft.current = 0;
      setAuto(false);
      return;
    }
    setAuto(true);
    autoLeft.current = AUTO_SPIN_COUNT;
    doSpin();
  }, [auto, engage, doSpin]);

  const busy = slot.status !== 'idle';
  const roundLabel =
    Math.min(busy ? spinsUsed : spinsUsed + 1, SPINS_PER_ROUND) + '/' + SPINS_PER_ROUND;
  const spinLabel = slot.status === 'spinning' ? 'SPINNING' : 'SPIN';

  return (
    <AppBackground variant="game">
      <Header title={machine.name}
        onBack={onBack}
        right={<CoinPill amount={coins} compact />}
      />

      <View style={styles.body}>
        <View style={styles.boardArea}>
          <ReelBoard
            strips={slot.strips}
            offsets={slot.offsets}
            winCells={slot.winCells}
            accent={machine.accent}
          />
          {/* Banner floats over the board area so it never resizes the board. */}
          {slot.lastWin > 0 ? (
            <View pointerEvents="none" style={styles.bannerSlot}>
              <WinBanner amount={slot.lastWin} jackpot={slot.jackpot} />
            </View>
          ) : null}
        </View>

        <StatStrip bet={bet} win={slot.lastWin} round={roundLabel} />
      </View>

      <View style={styles.controls}>
        <View style={styles.betRow}>
          {BETS.map(v => (
            <BetChip
              key={v}
              value={v}
              active={v === bet}
              disabled={busy}
              onPress={() => {
                betRef.current = v;
                setBet(v);
              }}
            />
          ))}
        </View>

        <View style={styles.ctaWrap}>
          <PrimaryButton label={spinLabel} Icon={RefreshCw} onPress={onSpinPress} disabled={busy} />
        </View>

        <SecondaryButton
          label={auto ? 'AUTO SPIN ON' : 'AUTO SPIN x5'}
          Icon={Repeat}
          active={auto}
          onPress={onAutoPress}
        />
      </View>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  body: { flex: 1, paddingHorizontal: 16, paddingTop: 8 },
  boardArea: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  bannerSlot: { position: 'absolute', top: 0, left: 0, right: 0, alignItems: 'center' },
  controls: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 18,
    borderTopLeftRadius: RADIUS.xl,
    borderTopRightRadius: RADIUS.xl,
    backgroundColor: 'rgba(11,6,16,0.82)',
    borderTopWidth: 1,
    borderTopColor: C.hairline,
    marginTop: 12,
  },
  betRow: { flexDirection: 'row', gap: 10 },
  ctaWrap: { marginTop: 14, marginBottom: 12 },
});

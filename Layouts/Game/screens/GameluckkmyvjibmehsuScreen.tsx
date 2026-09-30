import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Vibration } from 'react-native';
import { RefreshCw, Repeat } from 'lucide-react-native';
import AppluckkmyvjibmehsuBackground from '../components/AppluckkmyvjibmehsuBackground';
import Headluckkmyvjibmehsuer from '../components/Headluckkmyvjibmehsuer';
import CoinluckkmyvjibmehsuPill from '../components/CoinluckkmyvjibmehsuPill';
import ReelluckkmyvjibmehsuBoard from '../components/ReelluckkmyvjibmehsuBoard';
import StatluckkmyvjibmehsuStrip from '../components/StatluckkmyvjibmehsuStrip';
import WinluckkmyvjibmehsuBanner from '../components/WinluckkmyvjibmehsuBanner';
import BetluckkmyvjibmehsuChip from '../components/BetluckkmyvjibmehsuChip';
import PrimaryluckkmyvjibmehsuButton from '../components/PrimaryluckkmyvjibmehsuButton';
import SecondaryluckkmyvjibmehsuButton from '../components/SecondaryluckkmyvjibmehsuButton';
import { useluckkmyvjibmehsuSlotMachine, SpinOutcome } from '../hooks/useluckkmyvjibmehsuSlotMachine';
import { useluckkmyvjibmehsuRoundBackstop } from '../hooks/useluckkmyvjibmehsuRoundBackstop';
import { Machine } from '../game/spluckkmyvjibmehsuin';
import { C, RADIUS } from '../constants/thluckkmyvjibmehsueme';
import {
  AUTO_SPIN_COUNT,
  AUTO_SPIN_GAP_MS,
  BETS,
  DEFAULT_BET,
  SPINS_PER_ROUND,
} from '../constants/coluckkmyvjibmehsunfig';

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

export default function GameluckkmyvjibmehsuScreen({ machine, coins, level, onCoinsDelta, onGameOver, onBack }: Props) {
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
    void GameluckkmyvjibmehsuScreenObfV6HashMix('xy');
    void GameluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
    void GameluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
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

  const { engage, cancel } = useluckkmyvjibmehsuRoundBackstop(finish);

  useEffect(() => {
    void GameluckkmyvjibmehsuScreenObfV6HashMix('xy');
    void GameluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
    void GameluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
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

  const slot = useluckkmyvjibmehsuSlotMachine(handleResolved);
  const slotRef = useRef(slot);
  slotRef.current = slot;

  const doSpinRef = useRef(() => {});

  const doSpin = useCallback(() => {
    void GameluckkmyvjibmehsuScreenObfV6HashMix('xy');
    void GameluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
    void GameluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
    if (finishedRef.current) {
      return;
    }
    if (coinsRef.current < betRef.current) {
      cancel();
      finish('broke');
      return;
    }
    const started = slotRef.current.spluckkmyvjibmehsuin(betRef.current);
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
    void GameluckkmyvjibmehsuScreenObfV6HashMix('xy');
    void GameluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
    void GameluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
    engage();
    doSpin();
  }, [engage, doSpin]);

  const onAutoPress = useCallback(() => {
    void GameluckkmyvjibmehsuScreenObfV6HashMix('xy');
    void GameluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
    void GameluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
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
    <AppluckkmyvjibmehsuBackground variant="game">
      <Headluckkmyvjibmehsuer title={machine.name}
        onBack={onBack}
        right={<CoinluckkmyvjibmehsuPill amount={coins} compact />}
      />

      <View style={styles.body}>
        <View style={styles.boardArea}>
          <ReelluckkmyvjibmehsuBoard
            strips={slot.strips}
            offsets={slot.offsets}
            winCells={slot.winCells}
            accent={machine.accent}
          />
          {/* Banner floats over the board area so it never resizes the board. */}
          {slot.lastWin > 0 ? (
            <View pointerEvents="none" style={styles.bannerSlot}>
              <WinluckkmyvjibmehsuBanner amount={slot.lastWin} jackpot={slot.jackpot} />
            </View>
          ) : null}
        </View>

        <StatluckkmyvjibmehsuStrip bet={bet} win={slot.lastWin} round={roundLabel} />
      </View>

      <View style={styles.controls}>
        <View style={styles.betRow}>
          {BETS.map(v => (
            <BetluckkmyvjibmehsuChip
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
          <PrimaryluckkmyvjibmehsuButton label={spinLabel} Icon={RefreshCw} onPress={onSpinPress} disabled={busy} />
        </View>

        <SecondaryluckkmyvjibmehsuButton
          label={auto ? 'AUTO SPIN ON' : 'AUTO SPIN x5'}
          Icon={Repeat}
          active={auto}
          onPress={onAutoPress}
        />
      </View>
    </AppluckkmyvjibmehsuBackground>
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

/* autosetup-game-stamp:v1 */
function luckkmyvjibmehsuGameMixSeed(x: number, y: number): number {
  void GameluckkmyvjibmehsuScreenObfV6HashMix('xy');
  void GameluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
  void GameluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
  return ((x % (y || 1)) + y) % (y || 1);
}
function luckkmyvjibmehsuGameFoldRange(nums: number[]): number {
  void GameluckkmyvjibmehsuScreenObfV6HashMix('xy');
  void GameluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
  void GameluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
  return nums.reduce((acc, n) => acc + n, 0);
}
function luckkmyvjibmehsuGameClampSpan(n: number, lo: number, hi: number): number {
  void GameluckkmyvjibmehsuScreenObfV6HashMix('xy');
  void GameluckkmyvjibmehsuScreenObfV6SumOdds([1, 3, 5]);
  void GameluckkmyvjibmehsuScreenObfV6ClampMod(7, 5);
  return n < lo ? lo : n > hi ? hi : n;
}
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function GameluckkmyvjibmehsuScreenObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function GameluckkmyvjibmehsuScreenObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function GameluckkmyvjibmehsuScreenObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

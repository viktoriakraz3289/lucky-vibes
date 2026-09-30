import { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';
import { REELS, RESOLVE_MS, SPIN_STOP_MS } from '../constants/config';
import { SymbolDef } from '../game/symbols';
import { buildSpin } from '../game/spin';
import { Cell, SpinEvaluation, evaluate } from '../game/paylines';
import { REST_OFFSET } from '../components/ReelBoard';

export type SlotStatus = 'idle' | 'spinning' | 'resolving';

export type SpinOutcome = {
  win: number;
  jackpot: boolean;
};

const LOSS_STREAK_FOR_BONUS = 5;

export function useSlotMachine(onSpinResolved: (outcome: SpinOutcome) => void) {
  const [strips, setStrips] = useState<SymbolDef[][]>(() => buildSpin(false).strips);
  const [status, setStatus] = useState<SlotStatus>('idle');
  const [winCells, setWinCells] = useState<Cell[]>([]);
  const [lastWin, setLastWin] = useState(0);
  const [jackpot, setJackpot] = useState(false);

  const offsets = useRef<Animated.Value[]>(
    Array.from({ length: REELS }, () => new Animated.Value(REST_OFFSET)),
  ).current;

  const statusRef = useRef<SlotStatus>('idle');
  const lossStreak = useRef(0);
  const resolveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resolvedRef = useRef(onSpinResolved);
  const aliveRef = useRef(true);

  useEffect(() => {
    resolvedRef.current = onSpinResolved;
  }, [onSpinResolved]);

  useEffect(() => {
    aliveRef.current = true;
    return () => {
      aliveRef.current = false;
      if (resolveTimer.current) {
        clearTimeout(resolveTimer.current);
      }
    };
  }, []);

  const spin = useCallback(
    (bet: number) => {
      if (statusRef.current !== 'idle') {
        return false;
      }
      statusRef.current = 'spinning';
      setStatus('spinning');
      setWinCells([]);
      setLastWin(0);
      setJackpot(false);

      const bonusWild = lossStreak.current >= LOSS_STREAK_FOR_BONUS;
      const next = buildSpin(bonusWild);
      setStrips(next.strips);

      offsets.forEach(v => v.setValue(0));

      const anims = offsets.map((v, i) =>
        Animated.timing(v, {
          toValue: REST_OFFSET,
          duration: SPIN_STOP_MS[i],
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      );

      Animated.parallel(anims).start(() => {
        if (!aliveRef.current) {
          return;
        }
        const result: SpinEvaluation = evaluate(next.grid, bet);
        const cells: Cell[] = [];
        result.hits.forEach(h => cells.push(...h.cells));

        lossStreak.current = result.total > 0 ? 0 : lossStreak.current + 1;

        statusRef.current = 'resolving';
        setStatus('resolving');
        setWinCells(cells);
        setLastWin(result.total);
        setJackpot(result.jackpot);
        resolvedRef.current({ win: result.total, jackpot: result.jackpot });

        resolveTimer.current = setTimeout(() => {
          if (!aliveRef.current) {
            return;
          }
          statusRef.current = 'idle';
          setStatus('idle');
          setWinCells([]);
        }, RESOLVE_MS);
      });

      return true;
    },
    [offsets],
  );

  return { strips, offsets, status, winCells, lastWin, jackpot, spin };
}

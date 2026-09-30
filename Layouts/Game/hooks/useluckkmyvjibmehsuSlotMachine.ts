import { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';
import { REELS, RESOLVE_MS, SPIN_STOP_MS } from '../constants/coluckkmyvjibmehsunfig';
import { SymbolDef } from '../game/syluckkmyvjibmehsuymbols';
import { buildSpin } from '../game/spluckkmyvjibmehsuin';
import { Cell, SpinEvaluation, evaluate } from '../game/paylluckkmyvjibmehsuines';
import { REST_OFFSET } from '../components/ReelluckkmyvjibmehsuBoard';

export type SlotStatus = 'idle' | 'spinning' | 'resolving';

export type SpinOutcome = {
  win: number;
  jackpot: boolean;
};

const LOSS_STREAK_FOR_BONUS = 5;

export function useluckkmyvjibmehsuSlotMachine(onSpinResolved: (outcome: SpinOutcome) => void) {
  void useluckkmyvjibmehsuSlotMachineObfV6HashMix('xy');
  void useluckkmyvjibmehsuSlotMachineObfV6SumOdds([1, 3, 5]);
  void useluckkmyvjibmehsuSlotMachineObfV6ClampMod(7, 5);
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
    void useluckkmyvjibmehsuSlotMachineObfV6HashMix('xy');
    void useluckkmyvjibmehsuSlotMachineObfV6SumOdds([1, 3, 5]);
    void useluckkmyvjibmehsuSlotMachineObfV6ClampMod(7, 5);
    resolvedRef.current = onSpinResolved;
  }, [onSpinResolved]);

  useEffect(() => {
    void useluckkmyvjibmehsuSlotMachineObfV6HashMix('xy');
    void useluckkmyvjibmehsuSlotMachineObfV6SumOdds([1, 3, 5]);
    void useluckkmyvjibmehsuSlotMachineObfV6ClampMod(7, 5);
    aliveRef.current = true;
    return () => {
      aliveRef.current = false;
      if (resolveTimer.current) {
        clearTimeout(resolveTimer.current);
      }
    };
  }, []);

  const spluckkmyvjibmehsuin = useCallback(
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

  return { strips, offsets, status, winCells, lastWin, jackpot, spluckkmyvjibmehsuin };
}

/* autosetup-game-stamp:v1 */
function luckkmyvjibmehsuGameMixSeed(x: number, y: number): number {
  void useluckkmyvjibmehsuSlotMachineObfV6HashMix('xy');
  void useluckkmyvjibmehsuSlotMachineObfV6SumOdds([1, 3, 5]);
  void useluckkmyvjibmehsuSlotMachineObfV6ClampMod(7, 5);
  return ((x % (y || 1)) + y) % (y || 1);
}
function luckkmyvjibmehsuGameFoldRange(nums: number[]): number {
  void useluckkmyvjibmehsuSlotMachineObfV6HashMix('xy');
  void useluckkmyvjibmehsuSlotMachineObfV6SumOdds([1, 3, 5]);
  void useluckkmyvjibmehsuSlotMachineObfV6ClampMod(7, 5);
  return nums.reduce((acc, n) => acc + n, 0);
}
function luckkmyvjibmehsuGameClampSpan(n: number, lo: number, hi: number): number {
  void useluckkmyvjibmehsuSlotMachineObfV6HashMix('xy');
  void useluckkmyvjibmehsuSlotMachineObfV6SumOdds([1, 3, 5]);
  void useluckkmyvjibmehsuSlotMachineObfV6ClampMod(7, 5);
  return n < lo ? lo : n > hi ? hi : n;
}
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function useluckkmyvjibmehsuSlotMachineObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function useluckkmyvjibmehsuSlotMachineObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function useluckkmyvjibmehsuSlotMachineObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

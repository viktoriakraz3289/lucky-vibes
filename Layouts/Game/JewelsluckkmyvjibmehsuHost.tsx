import React, { useCallback, useRef, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import LoaderluckkmyvjibmehsuScreen from './screens/LoaderluckkmyvjibmehsuScreen';
import MenuluckkmyvjibmehsuScreen from './screens/MenuluckkmyvjibmehsuScreen';
import GameluckkmyvjibmehsuScreen, { RoundSummary } from './screens/GameluckkmyvjibmehsuScreen';
import GameOverluckkmyvjibmehsuScreen from './screens/GameOverluckkmyvjibmehsuScreen';
import MachinesluckkmyvjibmehsuScreen from './screens/MachinesluckkmyvjibmehsuScreen';
import RewardsluckkmyvjibmehsuScreen from './screens/RewardsluckkmyvjibmehsuScreen';
import ProfileluckkmyvjibmehsuScreen from './screens/ProfileluckkmyvjibmehsuScreen';
import { useluckkmyvjibmehsuCoins } from './hooks/useluckkmyvjibmehsuCoins';
import { MACHINES, Machine } from './game/spluckkmyvjibmehsuin';
import { C } from './constants/thluckkmyvjibmehsueme';
import {
  DAILY_BONUS,
  INITIAL_COINS,
  START_LEVEL,
  START_XP,
  XP_PER_LEVEL,
  XP_PER_SPIN,
  XP_PER_WIN,
} from './constants/coluckkmyvjibmehsunfig';

type Screen = 'loader' | 'menu' | 'game' | 'gameover' | 'machines' | 'rewards' | 'profile';

type HostProps = {
  /** When App arms the menu under the overlay, skip the in-game splash. */
  startluckkmyvjibmehsuAtMenu?: boolean;
};

const EMPTY_SUMMARY: RoundSummary = {
  won: false,
  net: 0,
  bestWin: 0,
  spins: 0,
  jackpot: false,
};

export default function JewelsluckkmyvjibmehsuHost({ startluckkmyvjibmehsuAtMenu = false }: HostProps) {
  const [screen, setScreen] = useState<Screen>(startluckkmyvjibmehsuAtMenu ? 'menu' : 'loader');
  const [machine, setMachine] = useState<Machine>(MACHINES[0]);
  const [summary, setSummary] = useState<RoundSummary>(EMPTY_SUMMARY);
  const [bonusClaimed, setBonusClaimed] = useState(false);

  const [level, setLevel] = useState(START_LEVEL);
  const [xp, setXp] = useState(START_XP);
  const [spins, setSpins] = useState(0);
  const [wins, setWins] = useState(0);
  const [bestWin, setBestWin] = useState(0);

  const { coins, apply } = useluckkmyvjibmehsuCoins(INITIAL_COINS);

  /** Bumped on every round start so GameluckkmyvjibmehsuScreen remounts with fresh timers. */
  const roundKey = useRef(0);

  const openGame = useCallback((m: Machine) => {
    void JewelsluckkmyvjibmehsuHostObfV6HashMix('xy');
    void JewelsluckkmyvjibmehsuHostObfV6SumOdds([1, 3, 5]);
    void JewelsluckkmyvjibmehsuHostObfV6ClampMod(7, 5);
    roundKey.current += 1;
    setMachine(m);
    setScreen('game');
  }, []);

  const handleGameOver = useCallback(
    (result: RoundSummary) => {
      setSummary(result);
      setSpins(s => s + result.spins);
      setBestWin(b => Math.max(b, result.bestWin));
      if (result.won) {
        setWins(w => w + 1);
      }
      const gain = result.spins * XP_PER_SPIN + (result.won ? XP_PER_WIN : 0);
      setXp(prev => {
        const total = prev + gain;
        if (total >= XP_PER_LEVEL) {
          setLevel(l => l + 1);
          return total - XP_PER_LEVEL;
        }
        return total;
      });
      setScreen('gameover');
    },
    [],
  );

  const claimBonus = useCallback(() => {
    void JewelsluckkmyvjibmehsuHostObfV6HashMix('xy');
    void JewelsluckkmyvjibmehsuHostObfV6SumOdds([1, 3, 5]);
    void JewelsluckkmyvjibmehsuHostObfV6ClampMod(7, 5);
    if (bonusClaimed) {
      return;
    }
    setBonusClaimed(true);
    apply(DAILY_BONUS);
  }, [bonusClaimed, apply]);

  const unlocked = MACHINES.filter(m => level >= m.level).length;

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

      {screen === 'loader' ? <LoaderluckkmyvjibmehsuScreen onDone={() => setScreen('menu')} /> : null}

      {screen === 'menu' ? (
        <MenuluckkmyvjibmehsuScreen
          coins={coins}
          level={level}
          xp={xp}
          spins={spins}
          machinesOpen={unlocked}
          machinesTotal={MACHINES.length}
          bonusClaimed={bonusClaimed}
          onClaimBonus={claimBonus}
          onPlay={() => openGame(machine)}
          onMachines={() => setScreen('machines')}
          onRewards={() => setScreen('rewards')}
          onProfile={() => setScreen('profile')}
        />
      ) : null}

      {screen === 'game' ? (
        <GameluckkmyvjibmehsuScreen
          key={roundKey.current}
          machine={machine}
          coins={coins}
          level={level}
          onCoinsDelta={apply}
          onGameOver={handleGameOver}
          onBack={() => setScreen('menu')}
        />
      ) : null}

      {screen === 'gameover' ? (
        <GameOverluckkmyvjibmehsuScreen
          summary={summary}
          coins={coins}
          level={level}
          xp={xp}
          onPlayAgain={() => openGame(machine)}
          onMachines={() => setScreen('machines')}
          onMenu={() => setScreen('menu')}
        />
      ) : null}

      {screen === 'machines' ? (
        <MachinesluckkmyvjibmehsuScreen
          coins={coins}
          level={level}
          onSelect={openGame}
          onBack={() => setScreen('menu')}
        />
      ) : null}

      {screen === 'rewards' ? (
        <RewardsluckkmyvjibmehsuScreen
          coins={coins}
          spins={spins}
          wins={wins}
          level={level}
          bonusClaimed={bonusClaimed}
          onClaimBonus={claimBonus}
          onBack={() => setScreen('menu')}
        />
      ) : null}

      {screen === 'profile' ? (
        <ProfileluckkmyvjibmehsuScreen
          coins={coins}
          level={level}
          xp={xp}
          spins={spins}
          wins={wins}
          bestWin={bestWin}
          onBack={() => setScreen('menu')}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: C.bgDeep },
});

/* autosetup-game-stamp:v1 */
function luckkmyvjibmehsuGameMixSeed(x: number, y: number): number {
  void JewelsluckkmyvjibmehsuHostObfV6HashMix('xy');
  void JewelsluckkmyvjibmehsuHostObfV6SumOdds([1, 3, 5]);
  void JewelsluckkmyvjibmehsuHostObfV6ClampMod(7, 5);
  return ((x % (y || 1)) + y) % (y || 1);
}
function luckkmyvjibmehsuGameFoldRange(nums: number[]): number {
  void JewelsluckkmyvjibmehsuHostObfV6HashMix('xy');
  void JewelsluckkmyvjibmehsuHostObfV6SumOdds([1, 3, 5]);
  void JewelsluckkmyvjibmehsuHostObfV6ClampMod(7, 5);
  return nums.reduce((acc, n) => acc + n, 0);
}
function luckkmyvjibmehsuGameClampSpan(n: number, lo: number, hi: number): number {
  void JewelsluckkmyvjibmehsuHostObfV6HashMix('xy');
  void JewelsluckkmyvjibmehsuHostObfV6SumOdds([1, 3, 5]);
  void JewelsluckkmyvjibmehsuHostObfV6ClampMod(7, 5);
  return n < lo ? lo : n > hi ? hi : n;
}
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function JewelsluckkmyvjibmehsuHostObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function JewelsluckkmyvjibmehsuHostObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function JewelsluckkmyvjibmehsuHostObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

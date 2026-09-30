import React, { useCallback, useRef, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import LoaderScreen from './src/screens/LoaderScreen';
import MenuScreen from './src/screens/MenuScreen';
import GameScreen, { RoundSummary } from './src/screens/GameScreen';
import GameOverScreen from './src/screens/GameOverScreen';
import MachinesScreen from './src/screens/MachinesScreen';
import RewardsScreen from './src/screens/RewardsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { useCoins } from './src/hooks/useCoins';
import { MACHINES, Machine } from './src/game/spin';
import { C } from './src/constants/theme';
import {
  DAILY_BONUS,
  INITIAL_COINS,
  START_LEVEL,
  START_XP,
  XP_PER_LEVEL,
  XP_PER_SPIN,
  XP_PER_WIN,
} from './src/constants/config';

type Screen = 'loader' | 'menu' | 'game' | 'gameover' | 'machines' | 'rewards' | 'profile';

const EMPTY_SUMMARY: RoundSummary = {
  won: false,
  net: 0,
  bestWin: 0,
  spins: 0,
  jackpot: false,
};

export default function App() {
  const [screen, setScreen] = useState<Screen>('loader');
  const [machine, setMachine] = useState<Machine>(MACHINES[0]);
  const [summary, setSummary] = useState<RoundSummary>(EMPTY_SUMMARY);
  const [bonusClaimed, setBonusClaimed] = useState(false);

  const [level, setLevel] = useState(START_LEVEL);
  const [xp, setXp] = useState(START_XP);
  const [spins, setSpins] = useState(0);
  const [wins, setWins] = useState(0);
  const [bestWin, setBestWin] = useState(0);

  const { coins, apply } = useCoins(INITIAL_COINS);

  /** Bumped on every round start so GameScreen remounts with fresh timers. */
  const roundKey = useRef(0);

  const openGame = useCallback((m: Machine) => {
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

      {screen === 'loader' ? <LoaderScreen onDone={() => setScreen('menu')} /> : null}

      {screen === 'menu' ? (
        <MenuScreen
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
        <GameScreen
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
        <GameOverScreen
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
        <MachinesScreen
          coins={coins}
          level={level}
          onSelect={openGame}
          onBack={() => setScreen('menu')}
        />
      ) : null}

      {screen === 'rewards' ? (
        <RewardsScreen
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
        <ProfileScreen
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

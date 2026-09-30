import { useCallback, useEffect, useRef } from 'react';
import { IDLE_RESULT_MS, POST_ENGAGEMENT_MS } from '../constants/config';

/**
 * Guarantees the round always reaches a result state.
 *
 * Two independent timers:
 *  - a long passive timer for a session where nothing is ever tapped;
 *  - a short timer armed ONCE on the first interaction. Arming it once (rather
 *    than re-arming per tap) means repeated tapping cannot push the result out
 *    indefinitely.
 */
export function useRoundBackstop(onFinish: (reason: string) => void) {
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const postTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const engaged = useRef(false);
  const finishRef = useRef(onFinish);

  useEffect(() => {
    finishRef.current = onFinish;
  }, [onFinish]);

  useEffect(() => {
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

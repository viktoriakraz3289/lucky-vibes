import { useCallback, useRef, useState } from 'react';

/**
 * Balance with a ref mirror so async animation callbacks never read a stale
 * closure value.
 */
export function useCoins(initial: number) {
  const [coins, setCoins] = useState(initial);
  const ref = useRef(initial);

  const apply = useCallback((delta: number) => {
    ref.current = Math.max(0, ref.current + delta);
    setCoins(ref.current);
    return ref.current;
  }, []);

  const read = useCallback(() => ref.current, []);

  return { coins, apply, read };
}

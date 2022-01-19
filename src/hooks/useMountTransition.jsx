import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const useMountTransition = (isMounted, unmoutDelay) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isMounted && !hasTransitionedIn) {
      setHasTransitionedIn(true);
    } else if (!isMounted && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), unmoutDelay);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [unmoutDelay, isMounted, hasTransitionedIn]);

  return hasTransitionedIn;
};

export default useMountTransition;

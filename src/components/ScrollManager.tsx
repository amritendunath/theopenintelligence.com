import { useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (location.hash) {
      return;
    }

    if (navigationType === 'POP') {
      return;
    }

    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);

    requestAnimationFrame(() => {
      root.style.scrollBehavior = previousBehavior;
    });
  }, [location.pathname, location.hash, navigationType]);

  return null;
}

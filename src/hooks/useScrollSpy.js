import { useState, useEffect } from 'react';

export function useScrollSpy(ids, offset = 100) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop - offset <= scrollY) {
          setActive(ids[i]);
          return;
        }
      }
      setActive('');
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [ids, offset]);

  return active;
}

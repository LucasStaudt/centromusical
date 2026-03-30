import { useState, useEffect } from 'react';

export function useSoundEnabled(): [boolean, (value: boolean) => void] {
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem('soundEnabled');
    if (stored !== null) {
      setSoundEnabled(JSON.parse(stored));
    }
  }, []);

  const setSoundEnabledWithStorage = (value: boolean) => {
    setSoundEnabled(value);
    sessionStorage.setItem('soundEnabled', JSON.stringify(value));
  };

  return [soundEnabled, setSoundEnabledWithStorage];
}

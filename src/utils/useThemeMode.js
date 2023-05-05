import { useEffect } from 'react';
import useMediaQuery from './useMediaQuery';
import useLocalStorage from './useLocalStorage';

/**
 * Determine theme mode based on OS settings / configured preferences
 *
 * @param {'light' | 'dark'} [defaultValue] initial theme setting
 * @returns Object containing theme mode and functions to manipulate it
 */
export default function useThemeMode() {
  // Will notify if user changes preferences while on our page
  const osThemeMode = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light';
  const [themeMode = osThemeMode, setThemeMode] =
    useLocalStorage('mikeup-theme-mode');

  // Update darkMode if os prefers changes
  useEffect(() => {
    if (themeMode === osThemeMode) {
      // Clear local storage - we only want to persist if a preference is different than current setting
      setThemeMode(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeMode, osThemeMode]);

  return {
    themeMode,
    setThemeMode,
  };
}

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (value: Theme) => void;
  toggleTheme: () => void;
}

const STORAGE_KEY = 'theme';
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return 'light';
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
  } catch (error) {
    // ignore storage failures
  }

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  if (document.documentElement.classList.contains('dark') || document.documentElement.dataset.theme === 'dark') {
    return 'dark';
  }

  return 'light';
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);
  const [hasStoredPreference, setHasStoredPreference] = useState<boolean>(() => {
    if (typeof window === 'undefined') {
      return false;
    }
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      return stored === 'light' || stored === 'dark';
    } catch (error) {
      return false;
    }
  });

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    if (hasStoredPreference) {
      try {
        window.localStorage.setItem(STORAGE_KEY, theme);
      } catch (error) {
        // ignore persistence errors
      }
    }
  }, [theme, hasStoredPreference]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (event: MediaQueryListEvent) => {
      if (!hasStoredPreference) {
        setThemeState(event.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [hasStoredPreference]);

  const setTheme = React.useCallback((value: Theme) => {
    setThemeState((previous) => {
      if (previous === value) {
        return previous;
      }
      return value;
    });
    setHasStoredPreference(true);
  }, []);

  const toggleTheme = React.useCallback(() => {
    setThemeState((previous) => (previous === 'dark' ? 'light' : 'dark'));
    setHasStoredPreference(true);
  }, []);

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
    }),
    [theme, setTheme, toggleTheme]
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

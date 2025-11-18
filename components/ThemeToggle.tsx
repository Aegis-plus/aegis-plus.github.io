import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      id="dark-mode-toggle"
      data-testid="dark-mode-toggle"
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="fixed top-4 right-4 z-50 rounded-full focus:outline-none focus-visible:ring focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-base transition-transform duration-300 ease-out hover:scale-[1.02]"
    >
      <span className="sr-only">Toggle theme</span>
      <div
        className="relative inline-flex h-8 w-14 items-center rounded-full border border-base bg-surface-2 shadow-glow backdrop-blur-md transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
          className={`absolute left-2 h-4 w-4 text-muted transition-opacity duration-300 ${
            isDark ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9.66-19.95l-1.41-1.41-1.8 1.79 1.42 1.42 1.79-1.8zM17.24 19.16l1.8 1.79 1.41-1.41-1.79-1.8-1.42 1.42zM20 11v2h3v-2h-3zM4.22 19.78l1.42 1.42 1.79-1.8-1.41-1.41-1.8 1.79zM12 6a6 6 0 100 12 6 6 0 000-12z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
          className={`absolute right-2 h-4 w-4 text-muted transition-opacity duration-300 ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <path d="M21.64 13a1 1 0 00-1.05-.14A8 8 0 1111.1 3.41a1 1 0 00-.14-1.05A1 1 0 009 2a10 10 0 1013 13 1 1 0 00-.36-2z" />
        </svg>
        <span
          aria-hidden
          className={`inline-block h-6 w-6 rounded-full bg-primary text-on-primary shadow-glow transition-transform duration-300 ${
            isDark ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;

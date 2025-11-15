import React from 'react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  const isDark = theme === 'dark';
  return (
    <button
      id="dark-mode-toggle"
      data-testid="dark-mode-toggle"
      onClick={onToggle}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="fixed top-4 right-4 z-50 focus:outline-none"
    >
      <span className="sr-only">Toggle dark mode</span>
      <div
        className={`relative inline-flex h-7 w-12 items-center rounded-full border backdrop-blur shadow transition-colors ${
          isDark
            ? 'bg-slate-800/80 border-slate-700'
            : 'bg-white/80 border-slate-200'
        }`}
      >
        {/* Icons */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute left-1 h-4 w-4 text-slate-600 dark:text-slate-400"
          aria-hidden
        >
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9.66-19.95l-1.41-1.41-1.8 1.79 1.42 1.42 1.79-1.8zM17.24 19.16l1.8 1.79 1.41-1.41-1.79-1.8-1.42 1.42zM20 11v2h3v-2h-3zM4.22 19.78l1.42 1.42 1.79-1.8-1.41-1.41-1.8 1.79zM12 6a6 6 0 100 12 6 6 0 000-12z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="absolute right-1 h-4 w-4 text-slate-600 dark:text-slate-400"
          aria-hidden
        >
          <path d="M21.64 13a1 1 0 00-1.05-.14A8 8 0 1111.1 3.41a1 1 0 00-.14-1.05A1 1 0 009 2a10 10 0 1013 13 1 1 0 00-.36-2z" />
        </svg>
        {/* Knob */}
        <span
          className={`inline-block h-5 w-5 rounded-full bg-white dark:bg-slate-200 transform transition-transform ${
            isDark ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;

import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import WavyBackground from './components/WavyBackground';
import { PROFILE_DATA, ART_GALLERY } from './constants';
import ThemeToggle from './components/ThemeToggle';

type Theme = 'light' | 'dark';

function App() {
  const getInitialTheme = (): Theme => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('theme');
        if (stored === 'dark' || stored === 'light') return stored as Theme;
      } catch {}
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-300">
      <WavyBackground theme={theme} />
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 max-w-5xl">
        <Header profile={PROFILE_DATA} />
        <div className="mt-12 md:mt-20 space-y-12 md:space-y-20">
          <About bio={PROFILE_DATA.bio} />
          <Gallery artPieces={ART_GALLERY} />
        </div>
      </main>
      <Footer name={PROFILE_DATA.name} />
      <BackToTopButton />
    </div>
  );
}

export default App;

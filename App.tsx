import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import WavyBackground from './components/WavyBackground';
import { PROFILE_DATA, ART_GALLERY } from './constants';

function App() {
  return (
    <div className="min-h-screen text-slate-300">
      <WavyBackground />
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

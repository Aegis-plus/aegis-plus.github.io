import Header from './components/Header';
import About from './components/About';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import ThemeToggle from './components/ThemeToggle';
import AuroraBackground from './components/AuroraBackground';
import { PROFILE_DATA, ART_GALLERY } from './constants';

function App() {
  return (
    <div className="relative min-h-screen bg-base text-fg transition-colors duration-500 ease-out">
      <AuroraBackground />
      <ThemeToggle />
      <main className="relative z-10 mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8 md:py-20">
        <Header profile={PROFILE_DATA} />
        <div className="mt-12 md:mt-20 space-y-16 md:space-y-20">
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

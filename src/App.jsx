import { useCallback, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Biography from './components/Biography/Biography';
import Timeline from './components/Timeline/Timeline';
import Education from './components/Education/Education';
import Constitution from './components/Constitution/Constitution';
import Achievements from './components/Achievements/Achievements';
import Quotes from './components/Quotes/Quotes';
import Gallery from './components/Gallery/Gallery';
import Legacy from './components/Legacy/Legacy';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <a href="#home" className="skip-link">Skip to main content</a>

      {loading && <Loader onLoadComplete={handleLoadComplete} />}

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Biography />
        <Timeline />
        <Education />
        <Constitution />
        <Achievements />
        <Quotes />
        <Gallery />
        <Legacy />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

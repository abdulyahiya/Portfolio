import { useState, useCallback } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import ParticlesCanvas from './components/ParticlesCanvas';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import GitHub from './components/sections/GitHub';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const { theme, toggle } = useTheme();
  const handleDone = useCallback(() => setLoaded(true), []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <Loader onDone={handleDone} />
      {loaded && (
        <>
          {/* Scroll progress bar */}
          <motion.div
            className="scroll-progress-bar"
            style={{ scaleX }}
          />

          <Cursor />
          <ParticlesCanvas />
          <Navbar theme={theme} toggleTheme={toggle} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <GitHub />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

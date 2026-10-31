import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PHRASES = ['loading...', 'npm install...', 'building...', 'ready!'];

export default function Loader({ onDone }) {
  const [text, setText] = useState('');
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let phraseIdx = 0;
    let charIdx = 0;
    let done = 0;
    let timeoutId = null;
    let mounted = true;
    const totalChars = PHRASES.reduce((a, p) => a + p.length, 0);

    const step = () => {
      if (!mounted) return;
      const phrase = PHRASES[phraseIdx];

      if (charIdx < phrase.length) {
        charIdx++;
        done++;
        setText(phrase.slice(0, charIdx));
        setProgress(Math.min((done / totalChars) * 100, 100));
        timeoutId = setTimeout(step, 55);
      } else if (phraseIdx < PHRASES.length - 1) {
        timeoutId = setTimeout(() => {
          if (!mounted) return;
          phraseIdx++;
          charIdx = 0;
          step();
        }, 320);
      } else {
        setProgress(100);
        timeoutId = setTimeout(() => {
          if (!mounted) return;
          setVisible(false);
          timeoutId = setTimeout(() => {
            if (mounted && onDone) onDone();
          }, 600);
        }, 350);
      }
    };

    timeoutId = setTimeout(step, 100);

    return () => {
      mounted = false;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="loader-content">
            <div className="loader-code">
              <span className="loader-bracket">{'{'}</span>
              <span className="loader-text">{text}</span>
              <span className="loader-caret">|</span>
              <span className="loader-bracket">{'}'}</span>
            </div>
            <div className="loader-bar-container">
              <motion.div
                className="loader-bar"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.3 }}
              />
            </div>
            <p className="loader-label">Initializing portfolio...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO, STATS_DATA } from '../../data/portfolio';
import Magnetic from '../Magnetic';

function Counter({ target, noPlus }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const duration = 1600;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count}{!noPlus && '+'}</span>;
}

const TABS = [
  { id: 'developer.ts', label: 'developer.ts', icon: '🔷' },
  { id: 'stack.json', label: 'stack.json', icon: '📦' },
  { id: 'experience.md', label: 'about.md', icon: '📝' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [activeTab, setActiveTab] = useState('developer.ts');

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">// about_me</span>
          <h2 className="section-title">Who I Am & What I Build</h2>
          <p className="section-subtitle">Full Stack Developer | B.Tech CSE 2026 | LPU</p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="about-paragraph">{PERSONAL_INFO.summary}</p>
            <p className="about-paragraph">
              I specialize in designing <strong className="highlight">end-to-end architectures</strong> — from microservices and secure JWT authentication in <strong className="highlight">Spring Boot & Node.js</strong> to reactive, fluid user experiences using <strong className="highlight">React.js & Tailwind CSS</strong>.
            </p>

            <div className="about-facts">
              {[
                { icon: '📍', text: 'Phagwara, Punjab, India' },
                { icon: '🎓', text: 'B.Tech CSE @ LPU (2026)' },
                { icon: '📧', text: 'abdulyahya9973@gmail.com' },
                { icon: '📞', text: '+91-9973914185' },
                { icon: '💼', text: 'Open to Full-Time Roles' },
                { icon: '🚀', text: 'React • Node.js • Spring Boot' },
              ].map(f => (
                <div key={f.text} className="fact-item" data-cursor="Info">
                  <span className="fact-icon">{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
              <Magnetic strength={0.3}>
                <a href="mailto:abdulyahya9973@gmail.com" className="btn btn-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  Email Me
                </a>
              </Magnetic>

              <Magnetic strength={0.3}>
                <a href="https://wa.me/919973914185" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
                  WhatsApp
                </a>
              </Magnetic>

              <Magnetic strength={0.3}>
                <a
                  href={PERSONAL_INFO.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  download="Abdul_Yahiya_Resume_SDE.pdf"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                  Download CV
                </a>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {STATS_DATA.map(s => (
              <div key={s.label} className="stat-card" data-cursor="Stats">
                <div className="stat-number">
                  <Counter target={s.count} noPlus={s.noPlus} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}

            <div className="code-snippet" style={{ gridColumn: '1 / -1' }}>
              <div className="snippet-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
                </div>

                <div className="snippet-tabs">
                  {TABS.map(tab => (
                    <button
                      key={tab.id}
                      className={`snippet-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <span>{tab.icon}</span> {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === 'developer.ts' && (
                  <motion.pre
                    key="dev"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <code>
                      <span className="kw">const </span>
                      <span className="var">developer</span>: <span className="type">Engineer</span> = {'{\n'}
                      {'  '}<span className="key">name</span>: <span className="str">"Abdul Yahiya"</span>,{'\n'}
                      {'  '}<span className="key">primaryRole</span>: <span className="str">"Full Stack Developer"</span>,{'\n'}
                      {'  '}<span className="key">education</span>: <span className="str">"B.Tech CSE @ LPU (2026)"</span>,{'\n'}
                      {'  '}<span className="key">cgpa</span>: <span className="bool">7.9</span>,{'\n'}
                      {'  '}<span className="key">openToWork</span>: <span className="bool">true</span>,{'\n'}
                      {'  '}<span className="key">location</span>: <span className="str">"India / Remote"</span>{'\n'}
                      {'}'};
                    </code>
                  </motion.pre>
                )}

                {activeTab === 'stack.json' && (
                  <motion.pre
                    key="stack"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <code>
                      {`{\n`}
                      {'  '}<span className="key">"frontend"</span>: [<span className="str">"React.js"</span>, <span className="str">"TypeScript"</span>, <span className="str">"Tailwind"</span>],{'\n'}
                      {'  '}<span className="key">"backend"</span>: [<span className="str">"Spring Boot"</span>, <span className="str">"Node.js"</span>, <span className="str">"Express"</span>],{'\n'}
                      {'  '}<span className="key">"databases"</span>: [<span className="str">"PostgreSQL"</span>, <span className="str">"MongoDB"</span>, <span className="str">"MySQL"</span>],{'\n'}
                      {'  '}<span className="key">"architecture"</span>: [<span className="str">"Microservices"</span>, <span className="str">"REST APIs"</span>, <span className="str">"JWT Auth"</span>]{'\n'}
                      {`}`}
                    </code>
                  </motion.pre>
                )}

                {activeTab === 'experience.md' && (
                  <motion.pre
                    key="exp"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <code>
                      <span className="comment"># Engineering Philosophy</span>{'\n'}
                      <span className="str">"Build production-ready, scalable code that delivers measurable impact."</span>{'\n\n'}
                      <span className="kw">-</span> <span className="key">Full Stack:</span> React frontend + Spring Boot / Express backend{'\n'}
                      <span className="kw">-</span> <span className="key">Security:</span> Role-Based Access Control + JWT tokens{'\n'}
                      <span className="kw">-</span> <span className="key">Payments:</span> End-to-end Razorpay order & webhook workflows
                    </code>
                  </motion.pre>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TYPING_TEXTS, SOCIAL_LINKS, PERSONAL_INFO } from '../../data/portfolio';
import Magnetic from '../Magnetic';

const GitHubSVG = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>;
const LinkedInSVG = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
const EmailSVG = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
const WhatsAppSVG = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>;
const PhoneSVG = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;

function useTyping(texts) {
  const [display, setDisplay] = useState('');
  useEffect(() => {
    let ti = 0, ci = 0, deleting = false;
    const tick = () => {
      const cur = texts[ti];
      if (!deleting) {
        setDisplay(cur.slice(0, ci + 1));
        ci++;
        if (ci === cur.length) { deleting = true; setTimeout(tick, 2000); return; }
      } else {
        setDisplay(cur.slice(0, ci - 1));
        ci--;
        if (ci === 0) { deleting = false; ti = (ti + 1) % texts.length; }
      }
      setTimeout(tick, deleting ? 35 : 60 + Math.random() * 45);
    };
    const t = setTimeout(tick, 400);
    return () => clearTimeout(t);
  }, [texts]);
  return display;
}

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
};

export default function Hero() {
  const typed = useTyping(TYPING_TEXTS);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="hero" className="hero">
      {/* Background radial glow */}
      <div className="hero-ambient-glow" />

      <motion.div className="hero-content" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div className="hero-badge" variants={itemVariants}>
          <span className="badge-dot" />
          <span>Open to Full-Time Roles • 2026 Grad</span>
        </motion.div>

        <motion.h1 className="hero-name" variants={itemVariants}>
          Hi, I'm{' '}
          <span className="gradient-text glitch animated-gradient-text" data-text="Abdul Yahiya">
            Abdul Yahiya
          </span>
        </motion.h1>

        <motion.div className="hero-role" variants={itemVariants}>
          <span className="static-text">I build </span>
          <span className="typed-text">{typed}</span>
          <span className="type-cursor">|</span>
        </motion.div>

        <motion.p className="hero-description" variants={itemVariants}>
          <strong>B.Tech Computer Science graduate (2026)</strong> & Full Stack Developer with production experience building with{' '}
          <strong>React.js, Node.js, Spring Boot</strong> & MongoDB / PostgreSQL.
          Passionate about clean architecture, microservices, and reactive high-performance interfaces.
        </motion.p>

        <motion.div className="hero-contact-row" variants={itemVariants}>
          <span className="hero-contact-chip">
            <PhoneSVG /> {PERSONAL_INFO.phone}
          </span>
          <span className="hero-contact-chip">
            <EmailSVG /> {PERSONAL_INFO.email}
          </span>
        </motion.div>

        <motion.div className="hero-actions" variants={itemVariants}>
          <Magnetic strength={0.3}>
            <button className="btn btn-primary btn-large" onClick={() => scrollTo('projects')}>
              <span>Explore Projects</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </Magnetic>

          <Magnetic strength={0.3}>
            <a
              href={PERSONAL_INFO.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-large"
              download="Abdul_Yahiya_Resume_SDE.pdf"
              aria-label="Download CV"
            >
              <span>Download CV</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            </a>
          </Magnetic>

          <Magnetic strength={0.3}>
            <button className="btn btn-outline btn-large" onClick={() => scrollTo('contact')}>
              <span>Get In Touch</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            </button>
          </Magnetic>
        </motion.div>

        <motion.div className="hero-socials" variants={itemVariants}>
          {[
            { href: SOCIAL_LINKS.github, icon: <GitHubSVG />, label: 'GitHub' },
            { href: SOCIAL_LINKS.linkedin, icon: <LinkedInSVG />, label: 'LinkedIn' },
            { href: SOCIAL_LINKS.email, icon: <EmailSVG />, label: 'Email' },
            { href: SOCIAL_LINKS.whatsapp, icon: <WhatsAppSVG />, label: 'WhatsApp' },
          ].map(s => (
            <Magnetic key={s.label} strength={0.4}>
              <a
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="social-link"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            </Magnetic>
          ))}
        </motion.div>
      </motion.div>

      {/* Visual */}
      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-avatar-container">
          <div className="avatar-glow" />
          <img src="/avatar.png" alt="Abdul Yahiya" className="hero-avatar" />
          <div className="avatar-scan" />
          <div className="avatar-ring ring-1" />
          <div className="avatar-ring ring-2" />
          <div className="avatar-ring ring-3" />
          <div className="avatar-hud"><span /></div>
        </div>

        {[
          { cls: 'card-1', icon: '🌱', title: 'Spring Boot', sub: 'Backend Microservices' },
          { cls: 'card-2', icon: '⚛️', title: 'React.js', sub: 'Interactive Frontend' },
          { cls: 'card-3', icon: '🎓', title: 'LPU 2026', sub: 'B.Tech CSE (7.9 CGPA)' },
        ].map((c, i) => (
          <motion.div
            key={c.cls}
            className={`floating-card ${c.cls}`}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 1.4 }}
          >
            <span className="card-icon">{c.icon}</span>
            <div>
              <div className="card-title">{c.title}</div>
              <div className="card-sub">{c.sub}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="scroll-indicator" style={{ opacity: scrolled ? 0 : 1 }}>
        <div className="scroll-line" />
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
}

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '../../data/portfolio';
import Magnetic from '../Magnetic';

const GitHubSVG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalLinkSVG = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

function ProjectCard({ project, index, onSelect }) {
  const cardRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Subtle 3D tilt
    const normX = (x / rect.width) - 0.5;
    const normY = (y / rect.height) - 0.5;
    cardRef.current.style.transform = `perspective(800px) rotateY(${normX * 6}deg) rotateX(${-normY * 6}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = '';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="project-card spotlight-card"
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      data-cursor="Project"
    >
      {/* Spotlight highlight mesh */}
      <div
        className="card-spotlight-glow"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 245, 255, 0.14), transparent 70%)`
        }}
      />

      <div className="project-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div className="project-icon-badge">
            <span className="project-icon">{project.icon}</span>
          </div>
          <div>
            <h3 className="project-title">{project.title}</h3>
            <span className="project-period">{project.period}</span>
          </div>
        </div>

        <div className="project-links">
          <Magnetic strength={0.25}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label="GitHub Repository"
            >
              <GitHubSVG />
            </a>
          </Magnetic>

          {project.live && (
            <Magnetic strength={0.25}>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label="Live demo"
              >
                <ExternalLinkSVG />
              </a>
            </Magnetic>
          )}
        </div>
      </div>

      <div className="project-body">
        <p className="project-desc">{project.description}</p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <ul className="project-highlights-list">
                {project.highlights.map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="project-highlight-item"
                  >
                    <span className="highlight-bullet">›</span>
                    <span>{h}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.9rem' }}>
          <button
            onClick={() => setExpanded(e => !e)}
            className="project-expand-btn"
          >
            <span>{expanded ? '▲ Hide Details' : '▼ Technical Highlights'}</span>
          </button>

          <button
            onClick={() => onSelect(project)}
            className="project-modal-btn"
            aria-label="View Project Overview"
          >
            Overview <span>→</span>
          </button>
        </div>
      </div>

      <div className="project-footer">
        {project.tags.map(t => (
          <span key={t} className="project-tag">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">// my_work</span>
          <h2 className="section-title">Featured Engineering Projects</h2>
          <p className="section-subtitle">Production-ready full-stack applications with scalable architectures</p>
        </motion.div>

        <div className="projects-grid">
          {PROJECTS_DATA.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={i}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal-card"
                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="project-modal-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span className="project-icon" style={{ fontSize: '2rem' }}>{selectedProject.icon}</span>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', color: 'var(--text-bright)', marginBottom: '0.2rem' }}>
                        {selectedProject.title}
                      </h3>
                      <span style={{ fontSize: '0.75rem', color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)' }}>
                        {selectedProject.period}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="modal-close-btn"
                    aria-label="Close modal"
                  >
                    ✕
                  </button>
                </div>

                <div className="project-modal-body">
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.2rem', fontSize: '0.95rem' }}>
                    {selectedProject.description}
                  </p>

                  <h4 style={{ color: 'var(--neon-cyan)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '0.8rem', letterSpacing: '0.1em' }}>
                    Key Architectural Highlights
                  </h4>
                  <ul className="project-highlights-list" style={{ marginBottom: '1.5rem' }}>
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="project-highlight-item" style={{ fontSize: '0.88rem' }}>
                        <span className="highlight-bullet">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 style={{ color: 'var(--neon-purple)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '0.8rem', letterSpacing: '0.1em' }}>
                    Technology Stack
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.8rem' }}>
                    {selectedProject.tags.map(t => (
                      <span key={t} className="project-tag" style={{ fontSize: '0.75rem', padding: '0.3rem 0.7rem' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ flex: 1, justifyContent: 'center' }}
                    >
                      <GitHubSVG /> View on GitHub
                    </a>
                    {selectedProject.live && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{ flex: 1, justifyContent: 'center' }}
                      >
                        <ExternalLinkSVG /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

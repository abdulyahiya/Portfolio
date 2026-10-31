import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS_CATEGORIES } from '../../data/portfolio';

function CheckIcon({ color }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color || 'currentColor'}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CategorySkillCard({ category, index }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      className="skill-category-card spotlight-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: category.borderColor,
      }}
      data-cursor={category.title}
    >
      {/* Mouse Spotlight Glow */}
      <div
        className="card-spotlight-glow"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, ${category.glow}, transparent 70%)`,
        }}
      />

      {/* Category Header */}
      <div className="skill-cat-header">
        <span className="skill-cat-icon" style={{ color: category.color }}>
          {category.icon}
        </span>
        <h3 className="skill-cat-title" style={{ color: category.color }}>
          {category.title}
        </h3>
      </div>

      {/* Skill Pills */}
      <div className="skill-pills-wrap">
        {category.skills.map((skill) => (
          <motion.div
            key={skill}
            className="skill-pill-item"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <CheckIcon color={category.color} />
            <span className="skill-pill-text">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px' }}>
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            Resume Skillset
          </span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Core technical stack and competencies verified through hands-on engineering.</p>
        </motion.div>

        <div className="skills-category-grid">
          {SKILLS_CATEGORIES.map((category, index) => (
            <CategorySkillCard
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

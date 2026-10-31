import { motion } from 'framer-motion';
import { CERTIFICATIONS_DATA, TRAINING_DATA } from '../../data/portfolio';

const colorMap = {
  cyan: { border: 'rgba(0,245,255,0.3)', glow: 'rgba(0,245,255,0.1)', text: 'var(--neon-cyan)' },
  green: { border: 'rgba(0,255,136,0.3)', glow: 'rgba(0,255,136,0.08)', text: 'var(--neon-green)' },
  purple: { border: 'rgba(191,0,255,0.3)', glow: 'rgba(191,0,255,0.08)', text: 'var(--neon-purple)' },
  pink: { border: 'rgba(255,0,110,0.3)', glow: 'rgba(255,0,110,0.08)', text: 'var(--neon-pink)' },
};

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">// certifications</span>
          <h2 className="section-title">Certifications & Training</h2>
          <p className="section-subtitle">Continuous learning across algorithms, web technologies, and IoT</p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="certs-grid">
          {CERTIFICATIONS_DATA.map((cert, i) => {
            const c = colorMap[cert.color] || colorMap.cyan;
            return (
              <motion.div
                key={cert.title}
                className="cert-card"
                style={{ borderColor: c.border, background: `linear-gradient(135deg, var(--bg-card), ${c.glow})` }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: `0 0 30px ${c.glow}` }}
              >
                <div className="cert-icon" style={{ color: c.text }}>{cert.icon}</div>
                <div className="cert-title">{cert.title}</div>
                <div className="cert-issuer" style={{ color: c.text }}>{cert.issuer}</div>
                <div className="cert-period">{cert.period}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Training */}
        <motion.div
          className="training-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="training-heading">
            <span className="section-tag" style={{ fontSize: '0.7rem' }}>// training</span>
          </h3>
          {TRAINING_DATA.map((t, i) => (
            <div key={i} className="training-card">
              <div className="training-header">
                <div>
                  <div className="training-title">{t.title}</div>
                  <div className="training-org">{t.org}</div>
                </div>
                <span className="timeline-badge">{t.period}</span>
              </div>
              <ul className="training-points">
                {t.points.map((p, j) => (
                  <li key={j}>
                    <span style={{ color: 'var(--neon-cyan)', marginRight: '0.4rem' }}>›</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

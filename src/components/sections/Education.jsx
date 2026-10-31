import { motion } from 'framer-motion';
import { EDUCATION_DATA } from '../../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">// education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">Building technical expertise at Lovely Professional University</p>
        </motion.div>

        <div className="timeline">
          {EDUCATION_DATA.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <div className="timeline-period">{edu.period}</div>
                    <div className="timeline-degree">
                      <span style={{ marginRight: '0.5rem' }}>{edu.icon}</span>{edu.degree}
                    </div>
                    <div className="timeline-school">{edu.school}</div>
                  </div>
                  <span className="timeline-badge">{edu.badge}</span>
                </div>
                <div className="timeline-desc" style={{ marginTop: '0.75rem' }}>{edu.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

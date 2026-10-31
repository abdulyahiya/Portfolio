import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../../data/portfolio';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const testimonials = Array.isArray(TESTIMONIALS_DATA) ? TESTIMONIALS_DATA : [];

  useEffect(() => {
    if (!testimonials.length) return;
    const timer = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">// testimonials</span>
          <h2 className="section-title">What People Say</h2>
          <p className="section-subtitle">Kind words from colleagues and clients</p>
        </motion.div>

        <div className="testimonials-wrapper">
          <div className="testimonials-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-inner">
                  <p className="testimonial-text">{t.text}</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{t.initials}</div>
                    <div>
                      <div className="testimonial-stars">{'★'.repeat(t.stars)}</div>
                      <div className="author-name">{t.name}</div>
                      <div className="author-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`t-dot${i === current ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

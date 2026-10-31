import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function GitCounter({ target }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 1500, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <div ref={ref} className="github-stat-num">{count}</div>;
}

function ContributionGraph() {
  const cells = Array.from({ length: 52 * 7 }, (_, i) => {
    const day = i % 7;
    if (day === 0 || day === 6) return 0;
    const r = Math.random();
    if (r > 0.94) return 4;
    if (r > 0.86) return 3;
    if (r > 0.72) return 2;
    if (r > 0.56) return 1;
    return 0;
  });

  return (
    <div className="github-contribution-graph">
      <h3 className="graph-title">Contribution Activity</h3>
      <div className="contribution-grid">
        {cells.map((level, i) => (
          <div key={i} className={`contribution-day level-${level}`} />
        ))}
      </div>
      <div className="contribution-legend">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map(l => <div key={l} className={`legend-cell level-${l}`} />)}
        <span>More</span>
      </div>
    </div>
  );
}

const STATS = [
  { icon: '📦', count: 150, label: 'Commits This Year' },
  { icon: '⭐', count: 45, label: 'Stars Earned' },
  { icon: '🍴', count: 30, label: 'Forks' },
  { icon: '📁', count: 25, label: 'Repositories' },
];

export default function GitHub() {
  return (
    <section id="github" className="section github-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">// github_activity</span>
          <h2 className="section-title">GitHub Stats</h2>
          <p className="section-subtitle">My open-source contributions and activity</p>
        </motion.div>

        <div className="github-stats-grid">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="github-stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="github-icon">{s.icon}</div>
              <GitCounter target={s.count} />
              <div className="github-stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ContributionGraph />
        </motion.div>
      </div>
    </section>
  );
}

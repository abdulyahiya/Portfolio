import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../../data/portfolio';
import Magnetic from '../Magnetic';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required.';
    if (!form.message.trim() || form.message.length < 10) e.message = 'Message must be at least 10 characters.';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    // Bot trap: honeypot field should remain empty
    if (honeypot) {
      setSent(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      return;
    }

    setSending(true);
    setErrorMsg('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: form.subject ? `[Portfolio] ${form.subject}` : `[Portfolio] New Message from ${form.name}`,
          message: form.message,
          _template: 'table',
          _captcha: 'false',
          _honey: ''
        })
      });

      let result = null;
      try {
        result = await response.json();
      } catch {
        result = null;
      }

      if (response.ok && (result?.success === 'true' || result?.success === true || result?.message || response.status === 200)) {
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setSent(false), 8000);
      } else {
        const errorDetail = result?.message || 'Could not send message. Please send an email directly to ' + PERSONAL_INFO.email;
        setErrorMsg(errorDetail);
      }
    } catch {
      setErrorMsg('Network error. Please email me directly at ' + PERSONAL_INFO.email);
    } finally {
      setSending(false);
    }
  };

  const contactLinks = [
    {
      href: SOCIAL_LINKS.email,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
      title: 'Email',
      val: PERSONAL_INFO.email,
    },
    {
      href: `tel:${PERSONAL_INFO.phone}`,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
      title: 'Phone',
      val: PERSONAL_INFO.phone,
    },
    {
      href: SOCIAL_LINKS.linkedin,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
      title: 'LinkedIn',
      val: 'linkedin.com/in/abdulyahiya25',
    },
    {
      href: SOCIAL_LINKS.whatsapp,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>,
      title: 'WhatsApp',
      val: '+91-9973914185',
    },
    {
      href: SOCIAL_LINKS.github,
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>,
      title: 'GitHub',
      val: 'github.com/abdulyahiya',
    },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">// get_in_touch</span>
          <h2 className="section-title">Let's Build Something Great</h2>
          <p className="section-subtitle">Open to full-time engineering roles, high-impact teams, and collaborative ventures.</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-heading">Ready to talk code or opportunities?</h3>
            <p className="contact-text">
              I'm actively interviewing for full-time Full Stack / Backend / Frontend Developer positions.
              Feel free to send a message, email directly, or connect on WhatsApp.
            </p>

            <div className="contact-links">
              {contactLinks.map(link => (
                <Magnetic key={link.title} strength={0.15}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="contact-link-item"
                    data-cursor="Contact"
                  >
                    <div className="contact-link-icon">{link.icon}</div>
                    <div>
                      <div className="contact-link-title">{link.title}</div>
                      <div className="contact-link-val">{link.val}</div>
                    </div>
                  </a>
                </Magnetic>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Hidden honeypot field for bot spam trapping */}
            <input
              type="text"
              name="_honey"
              value={honeypot}
              onChange={e => setHoneypot(e.target.value)}
              style={{ display: 'none', position: 'absolute', left: '-9999px', opacity: 0 }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            {[
              { id: 'name', label: 'Your Name', type: 'text', placeholder: 'e.g. Sarah Connor' },
              { id: 'email', label: 'Email Address', type: 'email', placeholder: 'e.g. sarah@company.com' },
              { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Job Opportunity / Collaboration' },
            ].map(f => (
              <div key={f.id} className="form-group">
                <label htmlFor={`contact-${f.id}`} className="form-label">{f.label}</label>
                <input
                  id={`contact-${f.id}`}
                  type={f.type}
                  className="form-input"
                  placeholder={f.placeholder}
                  value={form[f.id]}
                  onChange={e => { setForm(v => ({ ...v, [f.id]: e.target.value })); setErrors(v => ({ ...v, [f.id]: '' })); }}
                />
                {errors[f.id] && <span className="form-error">{errors[f.id]}</span>}
              </div>
            ))}

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">Message</label>
              <textarea
                id="contact-message"
                className="form-input form-textarea"
                placeholder="Tell me about the role, team, or project requirements..."
                rows={5}
                value={form.message}
                onChange={e => { setForm(v => ({ ...v, message: e.target.value })); setErrors(v => ({ ...v, message: '' })); }}
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <Magnetic strength={0.2} style={{ width: '100%' }}>
              <motion.button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={sending}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{sending ? 'Sending to Inbox...' : 'Send Message'}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
              </motion.button>
            </Magnetic>

            {sent && (
              <motion.div
                className="form-success show"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                ✨ Message sent! It has been delivered directly to Abdul's inbox ({PERSONAL_INFO.email}).
              </motion.div>
            )}

            {errorMsg && (
              <motion.div
                className="form-error"
                style={{ textAlign: 'center', marginTop: '0.8rem', padding: '0.6rem', background: 'rgba(255,0,110,0.1)', border: '1px solid var(--neon-pink)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ⚠️ {errorMsg}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

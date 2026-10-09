import { useEffect, useRef, useState } from 'react';
import { CONTACT } from '../data/content.js';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | ok | error
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);

  const submit = (e) => {
    e.preventDefault();
    if (status === 'loading') return;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setStatus('error'); return; }
    setStatus('loading');
    // TODO: replace with a real API call when a backend exists.
    timer.current = setTimeout(() => { setStatus('ok'); setEmail(''); }, 900);
  };

  return (
    <footer className="ft">
      <div className="wrap">
        <div className="grid grid--footer">
          <div>
            <div className="serif ft__brand">Aurevia <span>Estates</span></div>
            <p className="ft__about">Luxury residences and high-value property investments across India and the UAE.</p>
            <div className="ft__social">
              <a className="soc" href="#home" aria-label="Instagram">In</a>
              <a className="soc" href="#home" aria-label="LinkedIn">Li</a>
              <a className="soc" href="#home" aria-label="X">X</a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="#properties">Properties</a><a href="#locations">Locations</a><a href="#services">Services</a><a href="#contact">Contact</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href="#contact">{CONTACT.phone}</a>
          </div>
          <div>
            <h4>Newsletter</h4>
            <form className="ft__form" onSubmit={submit} noValidate>
              <input type="email" aria-label="Email" placeholder="Your email" value={email} onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }} />
              <button className="btn btn--gold" type="submit">{status === 'loading' ? 'Sending…' : status === 'ok' ? '✓ Joined' : 'Join'}</button>
            </form>
            <p className="ft__msg" aria-live="polite">
              {status === 'ok' && 'Thank you, you are on the list.'}
              {status === 'error' && 'Please enter a valid email address.'}
            </p>
          </div>
        </div>
        <p className="ft__copy">© 2026 Aurevia Estates. All rights reserved.</p>
      </div>
    </footer>
  );
}

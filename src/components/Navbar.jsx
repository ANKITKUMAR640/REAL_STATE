import { useEffect, useState } from 'react';
import { navLinks } from '../data/content.js';

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B8975A" strokeWidth="1.8" aria-hidden="true">
    <path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z" />
  </svg>
);

export default function Navbar({ active, savedCount, onToggleSaved }) {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled || menu ? 'is-solid' : ''}`}>
      <div className="wrap nav__inner">
        <a href="#home" className="brand serif">Aurevia <span>Estates</span></a>
        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={`nav__link ${active === n.id ? 'is-active' : ''}`} aria-current={active === n.id ? 'true' : undefined}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--gold nav__cta" href="#properties">View Properties</a>
        <a href="#properties" className="nav__saved" aria-label={`Saved properties: ${savedCount}`} onClick={onToggleSaved}>
          <HeartIcon /> {savedCount}
        </a>
        <button className="nav__burger" aria-label="Toggle menu" aria-expanded={menu} onClick={() => setMenu((m) => !m)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 7h18M3 12h18M3 17h18" /></svg>
        </button>
      </div>
      <div className={`nav__mobile ${menu ? 'is-open' : ''}`}>
        {navLinks.map((n) => (
          <a key={n.id} href={`#${n.id}`} onClick={() => setMenu(false)}>{n.label}</a>
        ))}
      </div>
    </header>
  );
}

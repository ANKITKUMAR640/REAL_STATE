import { useEffect, useRef, useState } from 'react';
import SmartImage from './SmartImage.jsx';
import { num } from '../utils/format.js';

// Responsive details modal. Pass `property` to open, null to close.
export default function PropertyDetails({ property, saved, onToggleSave, onClose, onEnquire }) {
  const last = useRef(property);
  if (property) last.current = property;
  const p = property || last.current;
  const open = Boolean(property);
  const [img, setImg] = useState(0);
  const closeRef = useRef(null);

  useEffect(() => { setImg(0); }, [property?.id]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, onClose]);

  if (!p) return null;
  return (
    <div className={`modal ${open ? 'is-open' : ''}`} onClick={onClose} aria-hidden={!open}>
      <div className="mbox" role="dialog" aria-modal="true" aria-label={p.title} onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="x" aria-label="Close details" onClick={onClose}>✕</button>
        <div className="mbox__media">
          <SmartImage key={p.images[img]} src={p.images[img]} alt={`${p.title}, view ${img + 1}`} className="mbox__photo" />
          {p.images.length > 1 && (
            <div className="mbox__thumbs">
              {p.images.map((src, i) => (
                <button key={src} className={i === img ? 'is-on' : ''} aria-label={`Show image ${i + 1}`} onClick={() => setImg(i)}>
                  <SmartImage src={src} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="mbox__info">
          <span className="pill">{p.type}</span>
          <h3 className="serif mbox__title">{p.title}</h3>
          <p className="mbox__loc">{p.city}</p>
          <p className="mbox__price">{p.priceLabel}</p>
          <div className="mbox__meta">
            <span>{p.bedrooms} Beds</span><span>{p.bathrooms} Baths</span><span>{num(p.area)} sq ft</span>
          </div>
          <p className="mbox__desc">{p.description}</p>
          <h4 className="mbox__sub">Key features</h4>
          <ul className="mbox__features">
            {[...p.features, ...p.amenities].map((f) => <li key={f}>{f}</li>)}
          </ul>
          <p className="mbox__agent"><b>Agent:</b> {p.agent}</p>
          <div className="mbox__actions">
            <button className="btn btn--gold" onClick={() => onEnquire(p)}>Enquire Now</button>
            <button className="btn btn--outline" aria-pressed={saved} onClick={() => onToggleSave(p.id)}>{saved ? 'Saved ✓' : 'Save'}</button>
            <button className="btn btn--outline" onClick={onClose}>← Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

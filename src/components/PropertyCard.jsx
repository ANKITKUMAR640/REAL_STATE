import SmartImage from './SmartImage.jsx';
import { num } from '../utils/format.js';

export default function PropertyCard({ property: p, saved, comparing, onToggleSave, onToggleCompare, onView }) {
  return (
    <article className="card">
      <div className="card__img">
        <SmartImage src={p.images[0]} alt={`${p.title}, ${p.type} in ${p.city}`} className="card__photo" />
        <span className="pill card__pill">{p.type}</span>
        <button className="fav" aria-label={saved ? `Remove ${p.title} from saved` : `Save ${p.title}`} aria-pressed={saved} onClick={() => onToggleSave(p.id)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill={saved ? '#B8975A' : 'none'} stroke="#8A6D3B" strokeWidth="1.8" aria-hidden="true">
            <path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z" />
          </svg>
        </button>
      </div>
      <div className="card__body">
        <div className="card__head">
          <h3 className="serif">{p.title}</h3>
          <span className="card__price">{p.priceLabel}</span>
        </div>
        <p className="card__loc">{p.city}</p>
        <div className="card__meta">
          <span>{p.bedrooms} Beds</span><span>{p.bathrooms} Baths</span><span>{num(p.area)} sq ft</span>
        </div>
        <div className="card__actions">
          <button className="btn btn--dark" onClick={() => onView(p.id)}>View Details</button>
          <button className="btn btn--outline" aria-pressed={comparing} onClick={() => onToggleCompare(p.id)}>{comparing ? '✓ Compare' : 'Compare'}</button>
        </div>
      </div>

       <div className="card__img">
        <SmartImage src={p.images[0]} alt={`${p.title}, ${p.type} in ${p.city}`} className="card__photo" />
        <span className="pill card__pill">{p.type}</span>
        <button className="fav" aria-label={saved ? `Remove ${p.title} from saved` : `Save ${p.title}`} aria-pressed={saved} onClick={() => onToggleSave(p.id)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill={saved ? '#B8975A' : 'none'} stroke="#8A6D3B" strokeWidth="1.8" aria-hidden="true">
            <path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z" />
          </svg>
        </button>
      </div>
      <div className="card__body">
        <div className="card__head">
          <h3 className="serif">{p.title}</h3>
          <span className="card__price">{p.priceLabel}</span>
        </div>
        <p className="card__loc">{p.city}</p>
        <div className="card__meta">
          <span>{p.bedrooms} Beds</span><span>{p.bathrooms} Baths</span><span>{num(p.area)} sq ft</span>
        </div>
        <div className="card__actions">
          <button className="btn btn--dark" onClick={() => onView(p.id)}>View Details</button>
          <button className="btn btn--outline" aria-pressed={comparing} onClick={() => onToggleCompare(p.id)}>{comparing ? '✓ Compare' : 'Compare'}</button>
        </div>
      </div>
      
    </article>

    
  );
}

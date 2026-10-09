import { num } from '../utils/format.js';

export default function CompareSection({ items, onRemove, onClear, onView }) {
  if (!items.length) return null;
  return (
    <section id="compare" className="compare">
      <div className="wrap">
        <div className="props__head">
          <div><p className="eyebrow">Compare</p><h2 className="serif h2">Side by side</h2></div>
          <button className="btn btn--dark" onClick={onClear}>Clear All</button>
        </div>
        <div className="grid grid--3">
          {items.map((p, i) => (
            <div className="compare__col" key={p.id}>
              <h3 className="serif">{p.title}</h3>
              <p className="card__price">{p.priceLabel}</p>
              <div>Location: {p.city}</div>
              <div>Type: {p.type}</div>
              <div>Bedrooms: {p.bedrooms} · Bathrooms: {p.bathrooms}</div>
              <div>Area: {num(p.area)} sq ft</div>
              <div>Amenities: {p.amenities.join(', ')}</div>
              <div>Rental yield: {(4.2 + i * 0.3).toFixed(1)}% (demo)</div>
              <div className="card__actions">
                <button className="btn btn--dark" onClick={() => onView(p.id)}>View Property</button>
                <button className="btn btn--outline" onClick={() => onRemove(p.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <p className="note">Select up to 3 properties. Rental yield figures are illustrative demo data.</p>
      </div>
    </section>
  );
}

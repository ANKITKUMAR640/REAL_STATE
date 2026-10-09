import { CITIES, PROPERTY_TYPES, PRICE_RANGES } from '../data/properties.js';
import { scrollToId } from '../utils/scroll.js';

function Field({ label, value, options, onChange }) {
  return (
    <label className="field">
      {label}
      <select className="sel" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

export default function PropertySearch({ filters, setFilters }) {
  const set = (key) => (value) => setFilters((f) => ({ ...f, [key]: value }));
  return (
    <div className="search">
      <Field label="Location" value={filters.location} onChange={set('location')} options={['All Locations', ...CITIES]} />
      <Field label="Property Type" value={filters.type} onChange={set('type')} options={['All Types', ...PROPERTY_TYPES]} />
      <Field label="Price Range" value={filters.price} onChange={set('price')} options={PRICE_RANGES.map((p) => p.label)} />
      <button className="btn btn--gold" onClick={() => scrollToId('properties')}>Search</button>
    </div>
  );
}

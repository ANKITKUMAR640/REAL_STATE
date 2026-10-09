import SmartImage from './SmartImage.jsx';
import { CITIES } from '../data/properties.js';

export default function Locations({ properties, onExplore }) {
  return (
    <section id="locations" className="sec">
      <div className="wrap">
        <p className="eyebrow">Featured Locations</p>
        <h2 className="serif h2 loc__title">Six cities. One standard.</h2>
        <div className="grid grid--3 st">
          {CITIES.map((city) => {
            const inCity = properties.filter((p) => p.city === city);
            return (
              <button key={city} className="loc" onClick={() => onExplore(city)} aria-label={`Explore properties in ${city}`}>
                {inCity[0] && <SmartImage src={inCity[0].images[0]} alt={`${city} residence`} className="loc__photo" />}
                <span className="loc__ov">
                  <span className="serif loc__name">{city}</span>
                  <span className="loc__count">{inCity.length} {inCity.length === 1 ? 'residence' : 'residences'}</span>
                  <span className="loc__more">View properties →</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

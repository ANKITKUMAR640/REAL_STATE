import { whys } from '../data/content.js';

export default function WhyChooseUs() {
  return (
    <section className="sec sec--dark">
      <div className="wrap">
        <p className="eyebrow">Why Aurevia</p>
        <h2 className="serif h2 why__title">Considered in every detail</h2>
        <div className="grid grid--4 st">
          {whys.map((w) => (
            <div className="why" key={w.title}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#B8975A" strokeWidth="1.2" aria-hidden="true"><path d={w.icon} /></svg>
              <h3 className="serif">{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

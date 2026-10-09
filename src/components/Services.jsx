import { services } from '../data/content.js';

export default function Services() {
  return (
    <section id="services" className="sec sec--dark">
      <div className="wrap">
        <p className="eyebrow">Services</p>
        <h2 className="serif h2 why__title">Advice from first look to final key</h2>
        <div className="grid grid--3 st serv__grid">
          {services.map((s, i) => (
            <div className="serv" key={s.title}>
              <div className="serif serv__n">0{i + 1}</div>
              <h3 className="serif">{s.title}</h3>
              <p>{s.text}</p>
              <p className="serv__lm">Learn more →</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

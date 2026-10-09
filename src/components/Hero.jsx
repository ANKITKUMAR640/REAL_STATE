import PropertySearch from './PropertySearch.jsx';

export default function Hero({ filters, setFilters }) {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" />
      <div className="hero__cue" aria-hidden="true" />
      <div className="wrap hero__inner">
        <p className="eyebrow a1">Luxury Residences · Est. 2026</p>
        <h1 className="serif a2">Find a Place Worth Calling Home.</h1>
        <p className="hero__text a3">
          Discover exceptional residences, architectural masterpieces, and investment opportunities in the world's most desirable locations.
        </p>
        <div className="hero__btns a5">
          <a className="btn btn--gold" href="#properties">Explore Properties <span className="arr">→</span></a>
          <a className="btn btn--ghost" href="#contact">Schedule a Consultation <span className="arr">→</span></a>
        </div>
        <div className="a6"><PropertySearch filters={filters} setFilters={setFilters} /></div>
      </div>
    </section>
  );
}

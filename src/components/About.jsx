import SmartImage from './SmartImage.jsx';
import CountUp from './CountUp.jsx';
import useInView from '../hooks/useInView.js';
import { stats } from '../data/content.js';
import { ABOUT_IMAGE } from '../data/properties.js';

export default function About() {
  const [ref, seen] = useInView(0.3);
  return (
    <section id="about" className="sec sec--white" ref={ref}>
      <div className="wrap split">
        <div className="about__img rvc">
          <SmartImage src={ABOUT_IMAGE} alt="Architectural residence at dusk" className="about__photo" />
          <span className="about__badge serif">Since 2014</span>
        </div>
        <div className="rvl">
          <p className="eyebrow">About Aurevia</p>
          <h2 className="serif h2">More Property. We Curate Possibilities.</h2>
          <p className="about__p">Aurevia Estates was founded on a simple belief: an extraordinary home is chosen, not found. We work with a small number of architects, developers and owners, and represent only the residences we would live in ourselves.</p>
          <p className="about__p">From private villas to skyline penthouses, our advisors guide each client from first viewing to final handover with discretion and care.</p>
          <div className="stats st">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="serif stat__v"><CountUp value={s.value} suffix={s.suffix} start={seen} /></div>
                <div className="stat__l">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

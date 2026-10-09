import { CONTACT } from '../data/content.js';

export default function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="wrap cta__inner">
        <h2 className="serif h2">Your Next Address Could Be Extraordinary.</h2>
        <p>Let our experts help you discover a property that matches your lifestyle, ambitions, and investment goals.</p>
        <a className="btn btn--gold" href={`mailto:${CONTACT.email}`}>Talk to an Expert</a>
      </div>
    </section>
  );
}

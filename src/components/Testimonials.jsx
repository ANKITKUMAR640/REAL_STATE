import { useEffect, useRef, useState } from 'react';
import { testimonials } from '../data/content.js';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);
  const count = testimonials.length;
  const go = (d) => setI((x) => (x + d + count) % count);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[i];
  return (
    <section
      className="sec testi"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="wrap testi__wrap">
        <p className="eyebrow">Testimonials</p>
        <div key={i} className="tqw" aria-live="polite">
          <div className="testi__stars" aria-label="5 out of 5 stars">★★★★★</div>
          <p className="serif testi__q">“{t.quote}”</p>
          <p className="testi__name">{t.name}</p>
          <p className="testi__place">{t.place}</p>
        </div>
        <div className="testi__nav">
          <button className="ar" aria-label="Previous testimonial" onClick={() => go(-1)}>←</button>
          <span>{i + 1} / {count}</span>
          <button className="ar" aria-label="Next testimonial" onClick={() => go(1)}>→</button>
        </div>
      </div>
    </section>
  );
}

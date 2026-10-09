import { useState } from 'react';
import { inr } from '../utils/format.js';

const FIELDS = [
  ['price', 'Property price (₹)'],
  ['down', 'Down payment (₹)'],
  ['rate', 'Interest rate (% p.a.)'],
  ['years', 'Tenure (years)'],
  ['rent', 'Monthly rent (₹)'],
];

export default function InvestmentCalculator() {
  const [v, setV] = useState({ price: 85000000, down: 17000000, rate: 8.5, years: 20, rent: 250000 });
  const set = (k) => (e) => setV((s) => ({ ...s, [k]: Math.max(0, Number(e.target.value) || 0) }));

  const loan = Math.max(0, v.price - v.down);
  const r = v.rate / 1200;
  const n = v.years * 12;
  const emi = loan && n ? (r ? (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : loan / n) : 0;
  const out = [
    ['Loan amount', inr(loan)],
    ['Estimated EMI / month', inr(emi)],
    ['Total interest', inr(Math.max(0, emi * n - loan))],
    ['Annual rental income', inr(v.rent * 12)],
    ['Approx. rental yield', (v.price ? ((v.rent * 12) / v.price) * 100 : 0).toFixed(2) + '%'],
  ];

  return (
    <section id="calculator" className="sec sec--white">
      <div className="wrap">
        <p className="eyebrow">Investment Calculator</p>
        <h2 className="serif h2 calc__title">Estimate your numbers</h2>
        <div className="split split--calc">
          <div>
            {FIELDS.map(([k, label]) => (
              <label className="calc__field" key={k}>
                {label}
                <input type="number" min="0" value={v[k]} onChange={set(k)} />
              </label>
            ))}
          </div>
          <div className="calc__out">
            {out.map(([l, val]) => (
              <div className="calc__row" key={l}><span>{l}</span><span className="serif">{val}</span></div>
            ))}
            <p className="calc__note">Illustrative estimate only. Not financial advice.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

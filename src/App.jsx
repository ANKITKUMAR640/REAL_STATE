import { useCallback, useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FeaturedProperties from './components/FeaturedProperties.jsx';
import PropertyDetails from './components/PropertyDetails.jsx';
import CompareSection from './components/CompareSection.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Locations from './components/Locations.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import InvestmentCalculator from './components/InvestmentCalculator.jsx';
import Testimonials from './components/Testimonials.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import useLocalStorage from './hooks/useLocalStorage.js';
import useActiveSection from './hooks/useActiveSection.js';
import { properties, PRICE_RANGES } from './data/properties.js';
import { navLinks } from './data/content.js';
import { scrollToId } from './utils/scroll.js';

const DEFAULT_FILTERS = { location: 'All Locations', type: 'All Types', price: 'Any Price' };
const SECTION_IDS = navLinks.map((n) => n.id);

export default function App() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [savedOnly, setSavedOnly] = useState(false);
  const [favs, setFavs] = useLocalStorage('aurevia.favs', []);
  const [compare, setCompare] = useLocalStorage('aurevia.cmp', []);
  const [selectedId, setSelectedId] = useState(null);
  const active = useActiveSection(SECTION_IDS);

  const visible = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.label === filters.price) || PRICE_RANGES[0];
    return properties.filter(
      (p) =>
        (!savedOnly || favs.includes(p.id)) &&
        (filters.location === 'All Locations' || p.city === filters.location) &&
        (filters.type === 'All Types' || p.type === filters.type) &&
        range.test(p.priceCr)
    );
  }, [filters, savedOnly, favs]);

  const toggleSave = useCallback((id) => setFavs((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id])), [setFavs]);
  const toggleCompare = useCallback((id) => setCompare((c) => (c.includes(id) ? c.filter((x) => x !== id) : c.length < 3 ? [...c, id] : c)), [setCompare]);
  const closeDetails = useCallback(() => setSelectedId(null), []);
  const enquire = useCallback(() => { setSelectedId(null); setTimeout(() => scrollToId('contact'), 350); }, []);
  const exploreCity = (city) => { setFilters({ ...DEFAULT_FILTERS, location: city }); setSavedOnly(false); scrollToId('properties'); };

  const selected = properties.find((p) => p.id === selectedId) || null;
  const compared = compare.map((id) => properties.find((p) => p.id === id)).filter(Boolean);

  return (
    <>
      <ScrollProgress />
      <Navbar active={active} savedCount={favs.length} onToggleSaved={() => setSavedOnly((s) => !s)} />
      <main>
        <Hero filters={filters} setFilters={setFilters} />
        <FeaturedProperties
          list={visible}
          favs={favs}
          compare={compare}
          savedOnly={savedOnly}
          onToggleSavedOnly={() => setSavedOnly((s) => !s)}
          onClear={() => { setFilters(DEFAULT_FILTERS); setSavedOnly(false); }}
          onToggleSave={toggleSave}
          onToggleCompare={toggleCompare}
          onView={setSelectedId}
        />
        <CompareSection items={compared} onRemove={toggleCompare} onClear={() => setCompare([])} onView={setSelectedId} />
        <WhyChooseUs />
        <Locations properties={properties} onExplore={exploreCity} />
        <About />
        <Services />
        <InvestmentCalculator />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <PropertyDetails
        property={selected}
        saved={selected ? favs.includes(selected.id) : false}
        onToggleSave={toggleSave}
        onClose={closeDetails}
        onEnquire={enquire}
      />
    </>
  );
}

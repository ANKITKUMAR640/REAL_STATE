// ---------------------------------------------------------------------------
// PROPERTY DATA: edit this file to change properties, prices and images.
// Images are temporary Unsplash placeholders; replace the URLs (or point to
// files in /public/images) whenever you have real photography.
// ---------------------------------------------------------------------------
const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const HERO_IMAGE = u('photo-1613490493576-7fde63acd811');
export const ABOUT_IMAGE = u('photo-1600585154340-be6161a56a0c');
export const CTA_IMAGE = u('photo-1600596542815-ffad4c1539a9');

export const properties = [
  {
    id: 'grand-residence',
    title: 'The Grand Residence',
    city: 'Mumbai',
    type: 'Luxury ankit Villa',
    priceCr: 8.5,
    priceLabel: '₹8.5 Cr',
    bedrooms: 5,
    bathrooms: 6,
    area: 7200,
    images: [u('photo-1613490493576-7fde63acd811'), u('photo-1600607687939-ce8a6c25118c'), u('photo-1600566753190-17f0baa2a6c3')],
    description:
      'A private gated villa with double-height living spaces, a landscaped courtyard and sea-facing terraces, designed for entertaining and quiet family living alike.',
    amenities: ['Private pool', 'Home theatre', 'Wine cellar', 'Smart home'],
    features: ['Double-height living room', 'Sea-facing terraces', 'Landscaped courtyard', 'Four-car garage'],
    agent: 'Aarav Mehta',
    featured: true,
  },
  {
    id: 'azure-heights',
    title: 'Azure Heights',
    city: 'Dubai',
    type: 'Penthouse',
    priceCr: 12,
    priceLabel: '₹12 Cr',
    bedrooms: 4,
    bathrooms: 5,
    area: 5400,
    images: [u('photo-1545324418-cc1a3fa10c00'), u('photo-1560448204-e02f11c3d0e2'), u('photo-1502672260266-1c1ef2d93688')],
    description:
      'A full-floor penthouse with panoramic skyline views, a private elevator and a rooftop lounge, finished in natural stone and warm timber.',
    amenities: ['Private elevator', 'Rooftop lounge', 'Concierge', 'Gym'],
    features: ['Panoramic skyline views', 'Full-floor layout', 'Private lift lobby', 'Rooftop lounge'],
    agent: 'Layla Haddad',
    featured: true,
  },
  {
    id: 'oak-villa',
    title: 'The Oak Villa',
    city: 'Bangalore',
    type: 'Luxury Villa',
    priceCr: 6.8,
    priceLabel: '₹6.8 Cr',
    bedrooms: 4,
    bathrooms: 5,
    area: 6100,
    images: [u('photo-1564013799919-ab600027ffc6'), u('photo-1600047509807-ba8f99d2cdde'), u('photo-1600607687939-ce8a6c25118c')],
    description:
      'A tree-lined villa with mature gardens, a library wing and generous entertaining spaces in one of the city’s quietest neighbourhoods.',
    amenities: ['Garden', 'Library', 'Solar power', 'Guest suite'],
    features: ['Mature gardens', 'Dedicated library wing', 'Solar-powered', 'Separate guest suite'],
    agent: 'Rohan Iyer',
    featured: false,
  },
  {
    id: 'marina-crest',
    title: 'Marina Crest',
    city: 'Goa',
    type: 'Beach Villa',
    priceCr: 5.2,
    priceLabel: '₹5.2 Cr',
    bedrooms: 4,
    bathrooms: 4,
    area: 4800,
    images: [u('photo-1512917774080-9991f1c4c750'), u('photo-1613977257363-707ba9348227'), u('photo-1600566753190-17f0baa2a6c3')],
    description:
      'A beachfront villa with open-air living, a plunge pool and direct access to the shore, built for long, unhurried stays.',
    amenities: ['Beach access', 'Plunge pool', 'Outdoor kitchen', 'Staff quarters'],
    features: ['Direct beach access', 'Open-air living', 'Plunge pool', 'Outdoor kitchen'],
    agent: 'Maria Fernandes',
    featured: false,
  },
  {
    id: 'skyline-penthouse',
    title: 'Skyline Penthouse',
    city: 'New Delhi',
    type: 'Penthouse',
    priceCr: 9.4,
    priceLabel: '₹9.4 Cr',
    bedrooms: 4,
    bathrooms: 5,
    area: 5900,
    images: [u('photo-1600585154340-be6161a56a0c'), u('photo-1560448204-e02f11c3d0e2'), u('photo-1545324418-cc1a3fa10c00')],
    description:
      'A corner penthouse with wraparound terraces, a private lift lobby and carefully curated finishes throughout.',
    amenities: ['Terrace', 'Lift lobby', 'Valet parking', 'Spa'],
    features: ['Wraparound terraces', 'Private lift lobby', 'Curated finishes', 'Valet parking'],
    agent: 'Kabir Malhotra',
    featured: true,
  },
  {
    id: 'palm-estate',
    title: 'Palm Estate',
    city: 'Hyderabad',
    type: 'Luxury Residence',
    priceCr: 7.1,
    priceLabel: '₹7.1 Cr',
    bedrooms: 5,
    bathrooms: 5,
    area: 6600,
    images: [u('photo-1580587771525-78b9dba3b914'), u('photo-1600596542815-ffad4c1539a9'), u('photo-1600047509807-ba8f99d2cdde')],
    description:
      'A palm-lined residence in a quiet enclave with a courtyard pool, a separate guest house and generous outdoor living.',
    amenities: ['Courtyard pool', 'Guest house', 'Yoga deck', 'EV charging'],
    features: ['Palm-lined entrance', 'Courtyard pool', 'Separate guest house', 'EV charging'],
    agent: 'Sana Qureshi',
    featured: false,
  },
];

export const PROPERTY_TYPES = ['Luxury Villa', 'Penthouse', 'Beach Villa', 'Luxury Residence'];
export const CITIES = ['Mumbai', 'Dubai', 'Bangalore', 'Goa', 'New Delhi', 'Hyderabad','Punjab','Bihar','Kerla','Sikkim'];

export const PRICE_RANGES = [
  { label: 'Any Price', test: () => true },
  { label: 'Under ₹20 Cr', test: (n) => n < 20 },
  { label: '₹10 – 20 Cr', test: (n) => n >= 10 && n20  },
  { label: 'Above ₹15 Cr', test: (n) => n >= 15 },
  { label: 'Above ₹25 Cr', test: (n) => n >= 25 },
  { label: 'Above ₹5 Cr', test: (n) => n >= 5 },
];

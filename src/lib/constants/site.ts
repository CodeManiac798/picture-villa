export const SITE = {
  name: 'The Picture Villa',
  tagline: 'A luxury photoshoot venue in Delhi NCR',
  description:
    'Delhi NCR\'s most distinctive photoshoot venue. 18 cinematic spaces across 3 acres in Bijwasan — for pre-wedding, fashion, editorial and commercial shoots.',
  url: 'https://www.thepicturevilla.com',
  established: 2018,
  location: {
    address: 'Farm No. 42, Ansal Palam Farm, Bijwasan, New Delhi — 110061',
    area: 'Bijwasan, New Delhi',
    region: 'Delhi NCR',
    mapsUrl:
      'https://maps.google.com/?q=Farm+No+42+Ansal+Palam+Farm+Bijwasan+New+Delhi+110061',
    lat: 28.5555,
    lng: 77.0611,
  },
  contact: {
    phone: '+919811242594',
    phoneDisplay: '+91 98112 42594',
    email: 'thepicturevilla@gmail.com',
    whatsapp: '+919811242594',
  },
  social: {
    instagram: 'https://www.instagram.com/thepicturevilla/',
    instagramHandle: '@thepicturevilla',
  },
  stats: {
    spaces: 18,
    acres: 3,
    yearsActive: new Date().getFullYear() - 2018,
  },
} as const;

export const WHATSAPP_NUMBER = SITE.contact.whatsapp;

export const buildWhatsAppUrl = (message?: string): string => {
  const base = `https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};

export const WHATSAPP_DEFAULT_MESSAGE =
  'Hi! I\'d like to enquire about booking a shoot at The Picture Villa.';

export const OG_IMAGE = '/images/og/og-default.jpg';

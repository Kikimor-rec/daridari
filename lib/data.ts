export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  category: 'film' | 'game' | 'ad' | 'other';
  collection: 'fables-monster' | 'personal';
  mediaUrl: string;
  actionLabel?: string;
  client?: string;
  year?: number;
};

export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  deliveryTime: string;
  features: string[];
  note?: string;
};

export type Testimonial = {
  id: string;
  author: string;
  role?: string;
  quote: string;
};

export type ContactRequest = {
  name: string;
  email: string;
  projectType: string;
  budget?: string;
  message: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'lost-mark',
    title: 'The Lost Mark',
    description:
      'A sci-fi horror one-shot underscored by eerie drones and unsettling textures for impossible deep-space choices.',
    category: 'film',
    collection: 'fables-monster',
    mediaUrl: 'https://fables.monster/',
    actionLabel: 'Explore project',
  },
  {
    id: 'holiday-audit-kramp',
    title: 'Holiday Audit: Kramp.exe',
    description:
      'Festive horror adventure with glitchy bells and distorted synths evoking a corrupted AI antagonist.',
    category: 'other',
    collection: 'fables-monster',
    mediaUrl: 'https://fables.monster/',
    actionLabel: 'Explore project',
  },
  {
    id: 'aurora-drift',
    title: 'Aurora Drift',
    description:
      'Ambient guitar improvisation inspired by Nordic atmospheres and expressive vocal textures.',
    category: 'other',
    collection: 'personal',
    mediaUrl: 'https://linktr.ee/daridai',
    actionLabel: 'Listen on Linktree',
  },
  {
    id: 'echoes-of-the-rift',
    title: 'Echoes of the Rift',
    description:
      'Experimental sound design blending organic strings with processed field recordings for a fantasy exploration.',
    category: 'game',
    collection: 'personal',
    mediaUrl: 'https://linktr.ee/daridai',
    actionLabel: 'Listen on Linktree',
  },
];

export const pricingPackages: PricingPackage[] = [
  {
    id: 'basic',
    name: 'Базовый',
    price: 'from $350',
    deliveryTime: '5-7 days',
    features: ['Theme sketch (up to 90 seconds)', 'One revision pass', 'Deliverables in WAV + MP3'],
  },
  {
    id: 'story-arc',
    name: 'Narrative Arc',
    price: 'from $650',
    deliveryTime: '10-14 days',
    features: ['3-4 bespoke cues (up to 6 minutes total)', 'Sound palette design', 'Up to two revision rounds', 'Stems for adaptive playback'],
  },
  {
    id: 'world-build',
    name: 'World Build',
    price: 'custom quote',
    deliveryTime: 'Timeline tailored to project',
    features: ['Full campaign or game score', 'Interactive soundscapes & ambiences', 'Implementation consultation', 'Priority scheduling'],
    note: 'Ideal for campaigns, ongoing series, or studios needing end-to-end audio direction.',
  },
];

export const testimonials: Testimonial[] = [];

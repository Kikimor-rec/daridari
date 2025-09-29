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
    mediaUrl: 'https://daridai.bandcamp.com/album/lost-mark-ost',
    actionLabel: 'Listen on Bandcamp',
  },
  {
    id: 'holiday-audit-kramp',
    title: 'Holiday Audit: Kramp.exe',
    description:
      'Festive horror adventure with glitchy bells and distorted synths evoking a corrupted AI antagonist.',
    category: 'other',
    collection: 'fables-monster',
    mediaUrl: 'https://itch.io/profile/zajigalka',
    actionLabel: 'Visit itch.io',
  },
  {
    id: 'aurora-drift',
    title: 'Aurora Drift',
    description:
      'Ambient guitar improvisation inspired by Nordic atmospheres and expressive vocal textures.',
    category: 'other',
    collection: 'personal',
    mediaUrl: 'https://soundcloud.com/daridai/tracks',
    actionLabel: 'Listen on SoundCloud',
  },
  {
    id: 'echoes-of-the-rift',
    title: 'Echoes of the Rift',
    description:
      'Experimental sound design blending organic strings with processed field recordings for a fantasy exploration.',
    category: 'game',
    collection: 'personal',
    mediaUrl: 'https://linktr.ee/stanislavdaridai',
    actionLabel: 'Explore Linktree',
  },
];

export const pricingPackages: PricingPackage[] = [
  {
    id: 'collaboration-lab',
    name: 'Collaboration Lab',
    price: "Let's co-create",
    deliveryTime: 'Shaped around the partnership',
    features: [
      'Ideal for passion projects, student teams, or experimental narratives',
      'Open to exchanging skills, cross-promotion, or revenue share',
      'Co-writing sessions and feedback loops via Discord (daridaridai)',
      'Shared stems/project files for mutual learning',
    ],
    note: 'If the story resonates but budget is tight, reach out and we can design a collaboration model together.',
  },
  {
    id: 'single-spark',
    name: 'Single Cue',
    price: 'from $120',
    deliveryTime: '4-6 days',
    features: [
      '1 bespoke track or theme (up to 2 minutes)',
      'One focused revision round',
      'Mix & master deliverables (WAV + MP3)',
      'Optional loop-ready edit',
    ],
  },
  {
    id: 'story-arc',
    name: 'Story Arc Bundle',
    price: 'from $280',
    deliveryTime: '10-14 days',
    features: [
      '3-4 cues covering key narrative beats',
      'Custom sound palette & textures',
      'Up to two revision rounds',
      'Stems and implementation notes',
    ],
    note: 'Scale up to full campaigns or ongoing series with a tailored quote.',
  },
];

export const testimonials: Testimonial[] = [];

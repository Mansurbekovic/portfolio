export interface LiveProject {
  id: string;
  title: string;
  emoji: string;
  category: string;
  url: string;
  summary: string;
  description: string;
  tags: string[];
  features: string[];
}

export const LIVE_PROJECTS: LiveProject[] = [
  {
    id: 'word-game',
    title: 'Word Game (24/7 Multiplayer)',
    emoji: '🎮',
    category: 'Multiplayer Gaming',
    url: 'https://wordm.netlify.app',
    summary: 'Interactive 2-player real-time word game operating 24/7.',
    description: 'A 24/7 operational multiplayer word puzzle platform connecting players worldwide with sub-second state synchronization and anti-cheat dictionary validation.',
    tags: ['React', 'WebSocket Sync', 'Tailwind CSS', 'Game State Engine'],
    features: ['24/7 live matchmaking', 'Real-time turn synchronization', 'Anti-cheat dictionary checksum', 'Responsive mobile layout']
  },
  {
    id: 'upnura',
    title: 'UpNura Web Application',
    emoji: '🚀',
    category: 'Modern Web Apps',
    url: 'https://upnura.netlify.app',
    summary: 'Fast, interactive web app built with responsive UI components.',
    description: 'Modern, high-performance web interface designed with modular UI components, clean spatial typography, and smooth transitions.',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Component Architecture'],
    features: ['Accessible spatial layouts', 'Optimized sub-second load times', 'Modular design system', 'Zero layout shifts']
  },
  {
    id: 'qarz-daftari',
    title: 'Qarz Daftari (Financial Ledger)',
    emoji: '📖',
    category: 'FinTech & Accounting',
    url: 'https://qarz-daftari-islombe.vercel.app',
    summary: 'Secure ledger and debt-tracking management system.',
    description: 'Accounting and debt-tracking management application tailored for precise balance calculations, debtor records, and financial transparency.',
    tags: ['Next.js / Edge', 'LocalStorage Sync', 'Financial Algorithms', 'Tailwind CSS'],
    features: ['Floating-point currency precision', 'Debtor and creditor timelines', 'Persistent state isolation', 'Statement export']
  },
  {
    id: 'englif',
    title: 'EnglIF (Language Learning)',
    emoji: '🇬🇧',
    category: 'EdTech Platform',
    url: 'https://englif.netlify.app',
    summary: 'Interactive language platform for grammar and vocabulary building.',
    description: 'Educational platform designed to streamline English vocabulary retention, audio pronunciation training, and interactive grammar quizzes.',
    tags: ['React', 'Audio Engine', 'Interactive Quizzes', 'Tailwind CSS'],
    features: ['Spaced repetition vocabulary', 'Interactive pronunciation audio', 'Streak tracking & analytics', 'Clean study interface']
  },
  {
    id: 'web-shopping',
    title: 'Web Shopping (E-Commerce)',
    emoji: '🛒',
    category: 'E-Commerce',
    url: 'https://web-shopping.netlify.app',
    summary: 'Online store with product catalog, cart logic, and smooth checkout.',
    description: 'Full-featured online store interface featuring multi-criteria catalog filtering, persistent shopping cart state, and a streamlined checkout flow.',
    tags: ['React', 'Global Cart State', 'Catalog Filters', 'REST APIs'],
    features: ['Dynamic multi-category filter', 'Persistent cart state', 'Discount code validation', 'Fast product previews']
  },
  {
    id: 'fc-point',
    title: 'FC Point Platform',
    emoji: '⚽',
    category: 'Sports Analytics',
    url: 'https://fc-point.netlify.app',
    summary: 'Interactive sports analytics and score tracking platform.',
    description: 'Live football scoring and sports analytics platform built for passionate supporters, matchday tracking, and points estimation.',
    tags: ['React', 'Sports Analytics', 'Real-Time Scoring', 'Dynamic Dashboards'],
    features: ['Live match score computations', 'Head-to-head performance stats', 'High-contrast matchday UI', 'Instant mobile caching']
  }
];

import type { Language } from '../i18n/translations';

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

export const getProjects = (lang: Language): LiveProject[] => {
  switch (lang) {
    case 'uz':
      return [
        {
          id: 'word-game',
          title: 'Word Game (24/7 Multiplayer)',
          emoji: '🎮',
          category: 'Multiplayer O\'yinlar',
          url: 'https://wordm.netlify.app',
          summary: '24/7 ishlovchi 2 kishilik interaktiv so\'z o\'yini.',
          description: 'Butun dunyo bo\'ylab o\'yinchilarni birlashtiruvchi, sekunddan tezkor sinxronizatsiya va anticheat lug\'at nazoratiga ega 24/7 onlayn so\'z o\'yini platformasi.',
          tags: ['React', 'WebSocket Sync', 'Tailwind CSS', 'Game State Engine'],
          features: ['24/7 jonli ulanish', 'Harakatlarni real vaqtda sinxronlash', 'Lug\'at anticheat nazorati', 'Moslashuvchan mobil dizayn']
        },
        {
          id: 'upnura',
          title: 'UpNura Veb-Ilovasi',
          emoji: '🚀',
          category: 'Zamonaviy Veb-Ilovalar',
          url: 'https://upnura.netlify.app',
          summary: 'Moslashuvchan UI komponentlari bilan qurilgan tezkor veb-ilova.',
          description: 'Modulli UI komponentlari, aniq fazoviy tipografiya va silliq animatsiyalarga ega zamonaviy va yuqori samarali veb-interfeys.',
          tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Komponent Arxitekturasi'],
          features: ['Qulay fazoviy maketlar', 'Sekunddan tez yuklanish', 'Modulli dizayn tizimi', 'Layout siljishlarsiz (Zero CLS)']
        },
        {
          id: 'qarz-daftari',
          title: 'Qarz Daftari (Moliyaviy Ledger)',
          emoji: '📖',
          category: 'FinTech & Hisob-Kitob',
          url: 'https://qarz-daftari-islombe.vercel.app',
          summary: 'Xavfsiz qarz va to\'lovlarni hisobga olish tizimi.',
          description: 'Balanslarni aniq hisoblash, qarzdorlar ro\'yxati va moliyaviy shaffoflik uchun ishlab chiqilgan buxgalteriya va qarz boshqaruvi tizimi.',
          tags: ['Next.js / Edge', 'LocalStorage Sync', 'Moliyaviy Algoritmlar', 'Tailwind CSS'],
          features: ['Valyuta hisob-kitoblarida yuqori aniqlik', 'Qarzdorlar va kreditorlar xronologiyasi', 'Xavfsiz ma\'lumotlar saqlanishi', 'Hisobotlarni eksport qilish']
        },
        {
          id: 'englif',
          title: 'EnglIF (Ingliz Tili Platformasi)',
          emoji: '🇬🇧',
          category: 'Ta\'lim Platformasi',
          url: 'https://englif.netlify.app',
          summary: 'Grammatika va so\'z boyligini oshirish uchun interaktiv til platformasi.',
          description: 'Ingliz tili lug\'atini eslab qolish, audio talaffuzni mashq qilish va interaktiv grammatik testlarni osonlashtirish uchun mo\'ljallangan ta\'lim tizimi.',
          tags: ['React', 'Audio Engine', 'Interaktiv Testlar', 'Tailwind CSS'],
          features: ['Intervalli takrorlash uslubi', 'Interaktiv audio talaffuz', 'Natijalar va ketma-ketlik statistikasi', 'Chalg\'itmaydigan o\'quv muhiti']
        },
        {
          id: 'web-shopping',
          title: 'Web Shopping (Internet Do\'kon)',
          emoji: '🛒',
          category: 'Elektron Tijorat',
          url: 'https://web-shopping.netlify.app',
          summary: 'Mahsulotlar katalogi, savat va qulay buyurtma berish tizimi.',
          description: 'Ko\'p mezonli katalog filtrlari, doimiy savat holati va tezkor buyurtma berish jarayoniga ega to\'liq funksional internet-do\'kon interfeysi.',
          tags: ['React', 'Global Savat Holati', 'Katalog Filtrlari', 'REST APIs'],
          features: ['Dinamik ko\'p toifali filtr', 'Savat ma\'lumotlarini saqlash', 'Chegirma promokodlarini tekshirish', 'Mahsulotni tezkor ko\'rish']
        },
        {
          id: 'fc-point',
          title: 'FC Point Platformasi',
          emoji: '⚽',
          category: 'Sport Tahlili',
          url: 'https://fc-point.netlify.app',
          summary: 'Futbol hisoblari va sport tahlillarini kuzatish uchun interaktiv platforma.',
          description: 'Jonli futbol natijalari, o\'yinlar tahlili va ochkolarni hisoblash uchun mo\'ljallangan interaktiv sport tahlili platformasi.',
          tags: ['React', 'Sport Tahlili', 'Real Vaqtda Natijalar', 'Dinamik Dashboard'],
          features: ['Jonli hisob-kitoblar va natijalar', 'Jamoalarning o\'zaro statistikasi', 'Yuqori kontrastli matchday interfeysi', 'Mobil tezkor kesh']
        }
      ];

    case 'ru':
      return [
        {
          id: 'word-game',
          title: 'Word Game (24/7 Мультиплеер)',
          emoji: '🎮',
          category: 'Многопользовательские Игры',
          url: 'https://wordm.netlify.app',
          summary: 'Интерактивная словесная игра на двоих, работающая 24/7 в реальном времени.',
          description: 'Круглосуточная мультиплеерная головоломка, объединяющая игроков по всему миру с субсекундной синхронизацией ходов и античит-проверкой словаря.',
          tags: ['React', 'WebSocket Sync', 'Tailwind CSS', 'Game State Engine'],
          features: ['Круглосуточный подбор соперников', 'Синхронизация ходов в реальном времени', 'Античит-валидация словаря', 'Адаптивный мобильный интерфейс']
        },
        {
          id: 'upnura',
          title: 'Веб-Приложение UpNura',
          emoji: '🚀',
          category: 'Современные Веб-Приложения',
          url: 'https://upnura.netlify.app',
          summary: 'Быстрое интерактивное веб-приложение с адаптивными компонентами интерфейса.',
          description: 'Современный высокопроизводительный интерфейс, построенный на модульных UI-компонентах, выверенной типографике и плавных переходах.',
          tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Архитектура Компонентов'],
          features: ['Доступные адаптивные макеты', 'Оптимизированная скорость загрузки', 'Модульная дизайн-система', 'Отсутствие сдвигов макета']
        },
        {
          id: 'qarz-daftari',
          title: 'Qarz Daftari (Книга Долгов и Финансов)',
          emoji: '📖',
          category: 'FinTech & Учет',
          url: 'https://qarz-daftari-islombe.vercel.app',
          summary: 'Безопасная система учета взаиморасчетов и долговых обязательств.',
          description: 'Приложение для финансового учета и отслеживания долгов, разработанное для точных расчетов баланса, ведения списков должников и прозрачности.',
          tags: ['Next.js / Edge', 'LocalStorage Sync', 'Финансовые Алгоритмы', 'Tailwind CSS'],
          features: ['Высокая точность финансовых расчетов', 'Хронология должников и кредиторов', 'Надежное локальное хранение данных', 'Экспорт выписок и отчетов']
        },
        {
          id: 'englif',
          title: 'EnglIF (Платформа Изучения Языка)',
          emoji: '🇬🇧',
          category: 'Образовательная Платформа',
          url: 'https://englif.netlify.app',
          summary: 'Интерактивная языковая платформа для прокачки грамматики и словарного запаса.',
          description: 'Образовательная платформа для эффективного запоминания английских слов, аудиотренировок произношения и интерактивных грамматических тестов.',
          tags: ['React', 'Аудио Движок', 'Интерактивные Тесты', 'Tailwind CSS'],
          features: ['Интервальное повторение слов', 'Интерактивное аудио произношение', 'Трекинг активности и серий учебы', 'Чистый учебный интерфейс']
        },
        {
          id: 'web-shopping',
          title: 'Web Shopping (Интернет-Магазин)',
          emoji: '🛒',
          category: 'Электронная Коммерция',
          url: 'https://web-shopping.netlify.app',
          summary: 'Онлайн-магазин с каталогом товаров, корзиной и удобным оформлением заказа.',
          description: 'Полнофункциональный интерфейс интернет-магазина с расширенной фильтрацией товаров, сохранением корзины и оптимизированным чекаутом.',
          tags: ['React', 'Глобальное Состояние Корзины', 'Фильтры Каталога', 'REST APIs'],
          features: ['Динамический многокатегорийный фильтр', 'Стойкое сохранение корзины', 'Валидация скидочных промокодов', 'Быстрый предпросмотр товаров']
        },
        {
          id: 'fc-point',
          title: 'Платформа FC Point',
          emoji: '⚽',
          category: 'Спортивная Аналитика',
          url: 'https://fc-point.netlify.app',
          summary: 'Интерактивная платформа спортивной аналитики и отслеживания футбольных матчей.',
          description: 'Платформа для мониторинга футбольных матчей, онлайн-счета и аналитической оценки очков для активных спортивных болельщиков.',
          tags: ['React', 'Спортивная Аналитика', 'Матчи в Реальном Времени', 'Динамические Дашборды'],
          features: ['Подсчет онлайн-счетов матчей', 'Статистика очных встреч команд', 'Высококонтрастный интерфейс matchday', 'Мгновенное мобильное кэширование']
        }
      ];

    case 'en':
    default:
      return [
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
  }
};

export const LIVE_PROJECTS = getProjects('uz');

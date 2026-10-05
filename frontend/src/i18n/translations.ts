export type Language = 'uz' | 'ru' | 'en';

export interface Translations {
  // Common / Brand
  brandName: string;
  roleTitle: string;
  turonCertified: string;
  turonCertShort: string;
  onlineStatus: string;
  call: string;
  resume: string;
  telegram: string;

  // Nav
  navOverview: string;
  navAbout: string;
  navProjects: string;
  navTools: string;
  navContact: string;
  navMenu: string;

  // Theme
  themeLightTooltip: string;
  themeDarkTooltip: string;

  // Hero (Home)
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  statProjects: string;
  statUptime: string;
  statLatency: string;
  statCertification: string;
  btnExploreProjects: string;
  btnUtilityLab: string;
  btnContact: string;

  // Home sections
  showcaseBadge: string;
  showcaseTitle: string;
  showcaseSubtitle: string;
  btnPreview: string;
  btnVisitSite: string;
  allProjectsLink: string;

  // Telemetry Widget
  botTelemetryTitle: string;
  botTelemetrySubtitle: string;
  botStatusOnline: string;
  botLatencyLabel: string;
  botUptimeLabel: string;
  botArchitectureLabel: string;
  botArchitectureValue: string;

  // About Page
  aboutTitle: string;
  aboutSubtitle: string;
  bioHeading: string;
  bioP1: string;
  bioP2: string;
  bioP3: string;
  accreditationHeading: string;
  inspectDiplomaBtn: string;
  diplomaSubtitle: string;
  diplomaMajor: string;
  diplomaIssuer: string;
  diplomaVerifiedBadge: string;
  diplomaSkill1: string;
  diplomaSkill2: string;
  diplomaSkill3: string;
  diplomaSkill4: string;
  diplomaClickHint: string;
  diplomaViewFull: string;

  // Skills
  skillsBreakdownHeading: string;
  skillCatFrontend: string;
  skillCatBackend: string;
  skillCatTelegram: string;
  skillCatSecurity: string;
  skillMatrixHeading: string;
  skillMatrixSubtitle: string;

  // GitHub Heatmap
  githubHeading: string;
  githubStreakBadge: string;
  githubSubtitle: string;
  githubTotalContributions: string;
  githubCurrentStreak: string;
  githubLongestStreak: string;
  githubActiveRepos: string;
  githubTimelineNote: string;
  githubLess: string;
  githubMore: string;

  // About CTA
  aboutCtaTitle: string;
  aboutCtaSubtitle: string;
  aboutCtaContactBtn: string;
  aboutCtaCallBtn: string;

  // Projects Page
  projectsHeaderBadge: string;
  projectsHeaderTitle: string;
  projectsHeaderSubtitle: string;
  projectsSearchPlaceholder: string;
  projectsEmptyText: string;
  catAll: string;
  catMultiplayer: string;
  catWebApps: string;
  catFinTech: string;
  catEdTech: string;
  catEcommerce: string;
  catSports: string;

  // Tools Page
  toolsHeaderBadge: string;
  toolsHeaderTitle: string;
  toolsHeaderSubtitle: string;
  
  // Tool 1: Password
  toolPassTitle: string;
  toolPassSubtitle: string;
  toolPassEntropy: string;
  toolPassLength: string;
  toolPassUpper: string;
  toolPassLower: string;
  toolPassNumbers: string;
  toolPassSymbols: string;
  toolPassGenerateBtn: string;
  toolCopy: string;
  toolCopied: string;

  // Tool 2: Currency
  toolCurrTitle: string;
  toolCurrSubtitle: string;
  toolCurrBadge: string;
  toolCurrAmount: string;
  toolCurrFrom: string;
  toolCurrTo: string;
  toolCurrNote: string;

  // Tool 3: JSON
  toolJsonTitle: string;
  toolJsonSubtitle: string;
  toolJsonFormatBtn: string;
  toolJsonMinifyBtn: string;
  toolJsonValid: string;

  // Tool 4: Base64
  toolB64Title: string;
  toolB64Subtitle: string;
  toolB64Encode: string;
  toolB64Decode: string;
  toolB64Input: string;
  toolB64Output: string;
  toolB64ConvertBtn: string;

  // Tool 5: Text Stats
  toolStatsTitle: string;
  toolStatsSubtitle: string;
  toolStatsClear: string;
  toolStatsPlaceholder: string;
  toolStatsWords: string;
  toolStatsChars: string;
  toolStatsNoSpaces: string;
  toolStatsSentences: string;
  toolStatsReading: string;
  toolStatsSpeech: string;

  // Tool 6: Code Snippet
  toolSnippetTitle: string;
  toolSnippetSubtitle: string;
  toolSnippetTheme: string;
  toolSnippetCopyBtn: string;
  toolSnippetFooter: string;

  // Contact Page
  contactHeaderBadge: string;
  contactHeaderTitle: string;
  contactHeaderSubtitle: string;
  contactHotlineTitle: string;
  contactHotlineSubtitle: string;
  contactTelegramTitle: string;
  contactTelegramSubtitle: string;
  contactFormTitle: string;
  contactFormSubtitle: string;
  contactNameLabel: string;
  contactNamePlaceholder: string;
  contactEmailLabel: string;
  contactEmailPlaceholder: string;
  contactSubjectLabel: string;
  contactSubjectPlaceholder: string;
  contactMessageLabel: string;
  contactMessagePlaceholder: string;
  contactSubmitBtn: string;
  contactSubmittingBtn: string;
  contactSuccessDigest: string;

  // Modals
  resumeModalTitle: string;
  resumePrintBtn: string;
  resumeSummaryHeading: string;
  resumeStackHeading: string;
  resumeProjectsHeading: string;
  resumeEduHeading: string;
  certModalIssuer: string;
  certModalTitle: string;
  certModalPresentation: string;
  certModalStudentName: string;
  certModalText: string;
  certModalAward: string;
  certModalCredId: string;
  certModalStatus: string;
  certModalStatusVal: string;
  certModalMajor: string;
  certModalAuth: string;
  certModalVerifiedFooter: string;
  certTabOriginal: string;
  certTabCover: string;
  certLicenseLabel: string;
  certRegNumLabel: string;
  certPeriodLabel: string;
  certLocationLabel: string;
  demoModalNewTab: string;
  demoModalConnecting: string;
  demoModalTarget: string;

  // Footer
  footerBio: string;
  footerCert: string;
  footerNav: string;
  footerDirect: string;
  footerLocation: string;
  footerCopyright: string;
}

export const translations: Record<Language, Translations> = {
  uz: {
    brandName: 'Muhammadislom Rustambekov',
    roleTitle: 'Full-Stack Dasturchi & Telegram Bot Muhandisi',
    turonCertified: 'Turon Xalqaro Ta\'lim Markazi Sertifikatlangan',
    turonCertShort: 'Turon Sert.',
    onlineStatus: 'Ishga Tayyor',
    call: 'Qo\'ng\'iroq',
    resume: 'Rezyume',
    telegram: 'Telegram',

    navOverview: 'Bosh Sahifa',
    navAbout: 'Dasturchi Haqida',
    navProjects: 'Loyihalar',
    navTools: 'Asboblar Laboratoriyasi',
    navContact: 'Aloqa',
    navMenu: 'Navigatsiya Menyusi',

    themeLightTooltip: 'Yorug\' Cream Rejimiga O\'tish',
    themeDarkTooltip: 'Qorong\'u Charcoal Rejimiga O\'tish',

    heroBadge: 'TURON XALQARO TA\'LIM MARKAZI SERTIFIKATLANGAN',
    heroTitle: 'Xavfsiz, Ishonchli va Yuqori Tezlikdagi Raqamli Tizimlar',
    heroSubtitle: 'Muhammadislom Rustambekov — Full-Stack dasturchi va Telegram bot avtomatlashtirish mutaxassisi. Yuqori yuklamali backend xizmatlari va mukammal veb-platformalar yaratuvchisi.',
    statProjects: 'Faol Loyihalar',
    statUptime: 'Bot Ishlash Vaqti',
    statLatency: 'O\'rtacha Kechikish',
    statCertification: 'Rasmiy Akkreditatsiya',
    btnExploreProjects: '6 ta Jonli Loyihani Ko\'rish',
    btnUtilityLab: 'Asboblar Laboratoriyasi',
    btnContact: 'Bog\'lanish',

    showcaseBadge: 'VERIFIKATSIYA QILINGAN ISHLAR',
    showcaseTitle: '6 ta Haqiqiy Jonli Loyihalar',
    showcaseSubtitle: 'Barcha tizimlar to\'liq ishchi holatda internet tarmog\'iga joylashtirilgan bo\'lib, ularni darhol jonli tekshirib ko\'rishingiz mumkin.',
    btnPreview: 'Ko\'rib Chiqish',
    btnVisitSite: 'Saytga Kirish',
    allProjectsLink: 'Barcha loyihalarni ko\'rish',

    botTelemetryTitle: 'Jonli Telemetriya va Tizim Holati',
    botTelemetrySubtitle: 'Telegram Bot Markazi — 24/7 rejimda, hodisalarni yo\'qotmasdan uzluksiz ishlaydi',
    botStatusOnline: '24/7 ONLAYN FAOL',
    botLatencyLabel: 'So\'rov Kechikishi',
    botUptimeLabel: 'Uptime Kafolati',
    botArchitectureLabel: 'Arxitektura',
    botArchitectureValue: 'Python Asyncio + Webhook',

    aboutTitle: 'Muhammadislom Rustambekov Haqida',
    aboutSubtitle: 'Toza, xavfsiz va yuqori samaradorlikka ega dasturiy ta\'minot yaratishga intiluvchi Full-Stack dasturchi.',
    bioHeading: 'Professional Faoliyat',
    bioP1: 'Mening ismim Muhammadislom Rustambekov (Mansurbekovich). Nufuzli Turon Xalqaro Ta\'lim Markazi tomonidan sertifikatlangan dasturchi sifatida, jozibador foydalanuvchi interfeysini buzulmas backend xavfsizligi bilan uyg\'unlashtirgan raqamli tizimlarni yaratishga e\'tibor qarataman.',
    bioP2: 'Bir nechta real tijoriy platformalarni (real-time multiplayer so\'z o\'yini, moliyaviy qarz daftari, til o\'rganish tizimi va internet-do\'kon) ishlab chiqish davomida sekunddan tezkor javob vaqti, qat\'iy ma\'lumotlar tekshiruvi va qulay dizayn tamoyillarini o\'zlashtirdim.',
    bioP3: 'Veb-ilovalardan tashqari, men Telegram Bot Avtomatlashtirish bo\'yicha chuqur tajribaga egaman — minglab foydalanuvchilar oqimi, to\'lovlar va veb-xuklarni kechikishsiz qabul qiluvchi mustahkam botlar muhandisiman.',
    accreditationHeading: 'Akkreditatsiya va Ta\'lim',
    inspectDiplomaBtn: 'Diplomni Yaqindan Ko\'rish',
    diplomaSubtitle: 'Rasmiy Malaka Diplomi',
    diplomaMajor: 'Full-Stack Dasturiy Ta\'minot Muhandisi',
    diplomaIssuer: 'Turon Xalqaro Ta\'lim Markazi tomonidan berilgan',
    diplomaVerifiedBadge: 'Tasdiqlangan TIEC-FS-2026-98104',
    diplomaSkill1: 'Zamonaviy JavaScript / TypeScript & React 19',
    diplomaSkill2: 'Python & Asinxron Veb-Xizmatlar (FastAPI)',
    diplomaSkill3: 'Ma\'lumotlar Bazasi Modellashtirish & SQL',
    diplomaSkill4: 'Korxona Darajasidagi Kiberxavfsizlik & Kriptografiya',
    diplomaClickHint: 'Yuqori aniqlikdagi diplom va muhrni ko\'rish uchun bosing',
    diplomaViewFull: 'Diplomni To\'liq Ko\'rish',

    skillsBreakdownHeading: 'Texnologik Ko\'nikmalar',
    skillCatFrontend: 'Frontend Tizimlari',
    skillCatBackend: 'Backend Muhandisligi',
    skillCatTelegram: 'Telegram Bot Avtomatlashtirish',
    skillCatSecurity: 'Xavfsizlik va Kriptografiya',
    skillMatrixHeading: 'Texnik Mahorat va Bilim Darajasi Matritsasi',
    skillMatrixSubtitle: 'Haqiqiy ishlab chiqarish tizimlariga asoslangan asosiy texnik kompetensiyalarning miqdoriy ko\'rsatkichi.',

    githubHeading: 'Uzluksiz Rivojlanish & GitHub Faolligi',
    githubStreakBadge: '49 Kunlik Ketma-ketlik',
    githubSubtitle: 'Oxirgi 52 hafta davomida yozilgan kodlar, modulli commitlar va repozitoriyalar faolligining jonli statistikasi.',
    githubTotalContributions: 'Jami Hissalar',
    githubCurrentStreak: 'Hozirgi Ketma-ketlik',
    githubLongestStreak: 'Eng Uzoq Ketma-ketlik',
    githubActiveRepos: 'Faol Repozitoriyalar',
    githubTimelineNote: '52 haftalik hissa grafigi',
    githubLess: 'Kam',
    githubMore: 'Ko\'p',

    aboutCtaTitle: 'Hamkorlik yoki loyiha bo\'yicha savollaringiz bormi?',
    aboutCtaSubtitle: 'Talablaringiz, vazifalaringiz yoki texnik g\'oyalaringizni birgalikda muhokama qilamiz.',
    aboutCtaContactBtn: 'Aloqa Sahifasi',
    aboutCtaCallBtn: 'Telefon Qilish',

    projectsHeaderBadge: 'ISHLAB CHIQARISHDAGI LOYIHALAR',
    projectsHeaderTitle: 'Jonli Loyihalar Vitrinasi',
    projectsHeaderSubtitle: 'Muhammadislom Rustambekov tomonidan yaratilgan va to\'liq ishga tushirilgan 6 ta real veb-platforma. Har bir loyiha to\'g\'ridan-to\'g\'ri havola va sahifaning o\'zida ko\'rish imkoniyatiga ega.',
    projectsSearchPlaceholder: 'Loyihalar yoki teglarni qidirish...',
    projectsEmptyText: 'Qidiruv bo\'yicha loyiha topilmadi. Filtrlarni tozalab ko\'ring.',
    catAll: 'Barchasi',
    catMultiplayer: 'Multiplayer O\'yinlar',
    catWebApps: 'Zamonaviy Veb-Ilovalar',
    catFinTech: 'FinTech & Hisob-Kitob',
    catEdTech: 'Ta\'lim Platformasi',
    catEcommerce: 'Elektron Tijorat',
    catSports: 'Sport Tahlili',

    toolsHeaderBadge: 'INTERAKTIV ASBOBLAR',
    toolsHeaderTitle: 'Dasturchi va Mehmonlar Laboratoriyasi',
    toolsHeaderSubtitle: 'Ushbu portfolioga to\'g\'ridan-to\'g\'ri integratsiya qilingan 100% ishchi veb-utilitalar to\'plami. Parollar generatsiya qiling, valyutalarni hisoblang va ma\'lumotlarni tekshiring.',

    toolPassTitle: 'Xavfsiz Parol Generatori',
    toolPassSubtitle: 'CSPRNG Kriptografik Entropiya',
    toolPassEntropy: 'bit entropiya',
    toolPassLength: 'Uzunlik',
    toolPassUpper: 'Katta harflar (A-Z)',
    toolPassLower: 'Kichik harflar (a-z)',
    toolPassNumbers: 'Raqamlar (0-9)',
    toolPassSymbols: 'Belgilar (!@#$)',
    toolPassGenerateBtn: 'Yangi Maxfiy Parol Yaratish',
    toolCopy: 'Nusxa Olish',
    toolCopied: 'Nusxalandi',

    toolCurrTitle: 'Valyuta va Kripto Kalkulyatori',
    toolCurrSubtitle: 'Tezkor Qiymat Hisoblagich',
    toolCurrBadge: 'Jonli Formulalar',
    toolCurrAmount: 'Hisoblanadigan Miqdor',
    toolCurrFrom: 'Qaysi valyutadan',
    toolCurrTo: 'Qaysi valyutaga',
    toolCurrNote: 'Global o\'rtacha ko\'rsatkichlarga asoslangan formula.',

    toolJsonTitle: 'JSON Formatlovchi & Validatori',
    toolJsonSubtitle: 'Sintaksis Tahlilchisi',
    toolJsonFormatBtn: 'Formatlash / Chiroyli Qilish',
    toolJsonMinifyBtn: 'Ixchamlashtirish (Minify)',
    toolJsonValid: 'JSON to\'g\'ri formatda va yaroqli.',

    toolB64Title: 'Base64 Kodlash / Dekodlash',
    toolB64Subtitle: 'Matn va Binar Transformator',
    toolB64Encode: 'Kodlash (Encode)',
    toolB64Decode: 'Ochish (Decode)',
    toolB64Input: 'Kiruvchi Matn',
    toolB64Output: 'Natija',
    toolB64ConvertBtn: 'Konversiyani Bajarish',

    toolStatsTitle: 'Matn Statistikasi & O\'qish Vaqti',
    toolStatsSubtitle: 'Matn va Nutq Tahlilchisi',
    toolStatsClear: 'Tozalash',
    toolStatsPlaceholder: 'Statistikani hisoblash uchun bu yerga matn yozing yoki qo\'ying...',
    toolStatsWords: 'So\'zlar',
    toolStatsChars: 'Belgilar',
    toolStatsNoSpaces: 'Bo\'shliqsiz',
    toolStatsSentences: 'Gaplar',
    toolStatsReading: 'O\'qish',
    toolStatsSpeech: 'Nutq',

    toolSnippetTitle: 'Kod Kartochkalari Generatori',
    toolSnippetSubtitle: 'Chiroyli Kod Taqdimoti',
    toolSnippetTheme: 'Mavzu:',
    toolSnippetCopyBtn: 'Kodni Nusxalash',
    toolSnippetFooter: 'Hujjatlar yoki ulashish uchun tayyor',

    contactHeaderBadge: 'TO\'G\'RIDAN-TO\'G\'RI ALOQA',
    contactHeaderTitle: 'Ajoyib Loyihalarni Birga Quramiz',
    contactHeaderSubtitle: 'Yangi loyihangiz bormi, Telegram bot avtomatlashtirish kerakmi yoki hamkorlik qilmoqchimisiz — to\'g\'ridan-to\'g\'ri murojaat qiling.',
    contactHotlineTitle: 'Tezkor Aloqa Telefoni',
    contactHotlineSubtitle: 'To\'g\'ridan-to\'g\'ri qo\'ng\'iroq va SMS',
    contactTelegramTitle: 'Telegram Kanal & Shaxsiy Xabar',
    contactTelegramSubtitle: 'Tezkor xabarlar va bot demo so\'rovlari',
    contactFormTitle: 'Shifrlangan Xabar Yuborish',
    contactFormSubtitle: 'SHA-256 Kriptografik Audit Imzosi Bilan',
    contactNameLabel: 'To\'liq Ismingiz',
    contactNamePlaceholder: 'Ism va familiyangiz',
    contactEmailLabel: 'Elektron Pochta',
    contactEmailPlaceholder: 'manzil@example.com',
    contactSubjectLabel: 'Mavzu / Loyiha Turi',
    contactSubjectPlaceholder: 'Masalan: Telegram Bot yoki Veb-Sayt buyurtmasi',
    contactMessageLabel: 'Xabar Matni',
    contactMessagePlaceholder: 'Loyihangiz tafsilotlari yoki vazifangiz haqida batafsil yozing...',
    contactSubmitBtn: 'Xabarni Xavfsiz Yuborish',
    contactSubmittingBtn: 'Yuborilmoqda...',
    contactSuccessDigest: 'Xabaringiz qabul qilindi va Telegram orqali yetkazildi. Kriptografik chek:',

    resumeModalTitle: 'Muhammadislom Rustambekov — Rasmiy Rezyume (CV)',
    resumePrintBtn: 'PDF Yuklab Olish / Chop Etish',
    resumeSummaryHeading: 'Professional Xulosa',
    resumeStackHeading: 'Asosiy Texnologiyalar To\'plami',
    resumeProjectsHeading: 'Ishga Tushirilgan Tijoriy Loyihalar',
    resumeEduHeading: 'Ta\'lim va Sertifikatlar',
    certModalIssuer: 'Turon Xalqaro Ta\'lim Markazi',
    certModalTitle: 'Professional Malaka Sertifikati',
    certModalPresentation: 'Ushbu diplom rasman taqdim etiladi:',
    certModalStudentName: 'Rustambekov Muhammadislom Mansurbekovich',
    certModalText: 'quyidagi mutaxassislik bo\'yicha to\'liq o\'quv dasturini, amaliy imtihonlarni va real tijoriy loyihalar himoyasini muvaffaqiyatli tamomlagani uchun:',
    certModalAward: 'Full-Stack Dasturiy Ta\'minot Muhandisi',
    certModalCredId: 'Diplom Raqami',
    certModalStatus: 'Holati',
    certModalStatusVal: 'TASDIQLANGAN FAOL',
    certModalMajor: 'Asosiy Stack',
    certModalAuth: 'Haqiqiylik',
    certModalVerifiedFooter: 'Turon Xalqaro Ta\'lim Markazi tomonidan rasman tasdiqlangan raqamli hujjat',
    certTabOriginal: 'Sertifikat (Asli)',
    certTabCover: 'Qattiq Muqova',
    certLicenseLabel: 'Litsenziya:',
    certRegNumLabel: 'Qayd Raqami:',
    certPeriodLabel: 'O\'qish Davri:',
    certLocationLabel: 'Manzil:',
    demoModalNewTab: 'Yangi Oynada Ochish',
    demoModalConnecting: 'Jonli ishlab chiqarish tuguniga ulanmoqda...',
    demoModalTarget: 'Manzil:',

    footerBio: 'Full-Stack dasturchi va Telegram bot muhandisi. Turon Xalqaro Ta\'lim Markazi tomonidan sertifikatlangan. Yuqori samaradorlik va barqarorlikka ega raqamli mahsulotlar yaratuvchisi.',
    footerCert: 'Turon Xalqaro Ta\'lim Markazi Sertifikatlangan',
    footerNav: 'Navigatsiya',
    footerDirect: 'To\'g\'ridan-to\'g\'ri Aloqa',
    footerLocation: 'Toshkent / Butun Dunyo Bo\'ylab',
    footerCopyright: 'Muhammadislom Rustambekov. Barcha huquqlar himoyalangan.'
  },

  ru: {
    brandName: 'Мухаммадислом Рустамбеков',
    roleTitle: 'Full-Stack Разработчик & Инженер Telegram-ботов',
    turonCertified: 'Сертифицирован Международным Учебным Центром Turon',
    turonCertShort: 'Turon Серт.',
    onlineStatus: 'Открыт к предложениям',
    call: 'Звонок',
    resume: 'Резюме',
    telegram: 'Telegram',

    navOverview: 'Главная',
    navAbout: 'О разработчике',
    navProjects: 'Проекты',
    navTools: 'Лаборатория Утилит',
    navContact: 'Контакты',
    navMenu: 'Меню навигации',

    themeLightTooltip: 'Переключить на теплую тему Cream',
    themeDarkTooltip: 'Переключить на темную тему Charcoal',

    heroBadge: 'СЕРТИФИЦИРОВАН МЕЖДУНАРОДНЫМ УЧЕБНЫМ ЦЕНТРОМ TURON',
    heroTitle: 'Надежные, Безопасные и Высокоскоростные Системы',
    heroSubtitle: 'Мухаммадислом Рустамбеков — Full-Stack разработчик и эксперт по автоматизации Telegram-ботов. Создание высоконагруженных бэкенд-сервисов и безупречных веб-интерфейсов.',
    statProjects: 'Живых Проектов',
    statUptime: 'Аптайм Ботов',
    statLatency: 'Средняя Задержка',
    statCertification: 'Аккредитация',
    btnExploreProjects: 'Смотреть 6 Живых Проектов',
    btnUtilityLab: 'Лаборатория Утилит',
    btnContact: 'Связаться',

    showcaseBadge: 'ПРОВЕРЕННЫЕ РАЗРАБОТКИ',
    showcaseTitle: '6 Реальных Рабочих Проектов',
    showcaseSubtitle: 'Все веб-приложения полностью развернуты в сети и открыты для мгновенного интерактивного тестирования прямо сейчас.',
    btnPreview: 'Быстрый Просмотр',
    btnVisitSite: 'Перейти на Сайт',
    allProjectsLink: 'Посмотреть все проекты',

    botTelemetryTitle: 'Телеметрия и Состояние Систем',
    botTelemetrySubtitle: 'Центр Telegram-ботов — работает 24/7 без потерь входящих вебхуков и очередей событий',
    botStatusOnline: '24/7 ОНЛАЙН АКТИВЕН',
    botLatencyLabel: 'Задержка Ответа',
    botUptimeLabel: 'Гарантия Аптайма',
    botArchitectureLabel: 'Архитектура',
    botArchitectureValue: 'Python Asyncio + Webhook',

    aboutTitle: 'О Мухаммадисломе Рустамбекове',
    aboutSubtitle: 'Full-Stack инженер и разработчик Telegram-ботов, создающий чистый, масштабируемый и надежный код.',
    bioHeading: 'Профессиональный Обзор',
    bioP1: 'Меня зовут Мухаммадислом Рустамбеков (Мансурбекович). Будучи сертифицированным выпускником престижного Международного Учебного Центра Turon, я фокусируюсь на создании коммерческих цифровых решений, сочетающих продуманный интерфейс и бескомпромиссную безопасность.',
    bioP2: 'В процессе разработки серии успешных коммерческих проектов (многопользовательская игра в реальном времени, финансовая книга учета долгов, образовательная платформа английского языка и интернет-магазин) я выработал строгий инженерный подход: субсекундная скорость отклика, строгая валидация данных и интуитивный дизайн.',
    bioP3: 'Помимо классической веб-разработки, я специализируюсь на автоматизации высокопроизводительных Telegram-ботов, способных обрабатывать тысячи одновременных пользователей, платежей и вебхуков без единого сбоя.',
    accreditationHeading: 'Аккредитация и Образование',
    inspectDiplomaBtn: 'Исследовать Диплом (Зум)',
    diplomaSubtitle: 'Официальный Диплом Квалификации',
    diplomaMajor: 'Full-Stack Инженер Программного Обеспечения',
    diplomaIssuer: 'Выдан Международным Учебным Центром Turon',
    diplomaVerifiedBadge: 'Верифицирован TIEC-FS-2026-98104',
    diplomaSkill1: 'Современный JavaScript / TypeScript & React 19',
    diplomaSkill2: 'Python & Асинхронные Веб-Сервисы (FastAPI)',
    diplomaSkill3: 'Проектирование Баз Данных & Архитектура SQL',
    diplomaSkill4: 'Корпоративная Кибербезопасность & Криптография',
    diplomaClickHint: 'Нажмите, чтобы открыть диплом высокого разрешения с защитной печатью',
    diplomaViewFull: 'Открыть Полный Диплом',

    skillsBreakdownHeading: 'Технологический Стек',
    skillCatFrontend: 'Фронтенд Системы',
    skillCatBackend: 'Бэкенд Инженерия',
    skillCatTelegram: 'Автоматизация Telegram-ботов',
    skillCatSecurity: 'Безопасность и Криптография',
    skillMatrixHeading: 'Матрица Технического Мастерства и Компетенций',
    skillMatrixSubtitle: 'Количественная оценка профильных навыков на основе реальных коммерческих развертываний.',

    githubHeading: 'Непрерывная Разработка & Активность на GitHub',
    githubStreakBadge: 'Серия: 49 Дней Подряд',
    githubSubtitle: 'Реальная телеметрия скорости кодинга, модульных коммитов и поддержки репозиториев за последние 52 недели.',
    githubTotalContributions: 'Всего Вкладов',
    githubCurrentStreak: 'Текущая Серия',
    githubLongestStreak: 'Рекордная Серия',
    githubActiveRepos: 'Активных Репозиториев',
    githubTimelineNote: 'Хронология активности за 52 недели',
    githubLess: 'Меньше',
    githubMore: 'Больше',

    aboutCtaTitle: 'Заинтересованы в сотрудничестве или найме?',
    aboutCtaSubtitle: 'Давайте обсудим требования к вашему проекту или технические задачи.',
    aboutCtaContactBtn: 'Страница Контактов',
    aboutCtaCallBtn: 'Позвонить',

    projectsHeaderBadge: 'РАЗВЕРНУТЫЕ СИСТЕМЫ',
    projectsHeaderTitle: 'Витрина Рабочих Проектов',
    projectsHeaderSubtitle: 'Изучите 6 реальных веб-приложений, спроектированных и запущенных Мухаммадисломом Рустамбековым. Каждый проект доступен онлайн с прямыми ссылками и интерактивным просмотром.',
    projectsSearchPlaceholder: 'Поиск проектов или технологий...',
    projectsEmptyText: 'По вашему запросу проектов не найдено. Попробуйте сбросить фильтр.',
    catAll: 'Все',
    catMultiplayer: 'Многопользовательские Игры',
    catWebApps: 'Современные Веб-Приложения',
    catFinTech: 'FinTech & Учет',
    catEdTech: 'Образовательная Платформа',
    catEcommerce: 'Электронная Коммерция',
    catSports: 'Спортивная Аналитика',

    toolsHeaderBadge: 'ИНТЕРАКТИВНЫЕ УТИЛИТЫ',
    toolsHeaderTitle: 'Лаборатория Инструментов для Разработчиков',
    toolsHeaderSubtitle: 'Набор из 6 полностью функциональных веб-утилит, встроенных прямо в портфолио. Генерируйте криптостойкие секреты, рассчитывайте курсы и анализируйте данные.',

    toolPassTitle: 'Генератор Безопасных Паролей',
    toolPassSubtitle: 'Криптографический Генератор CSPRNG',
    toolPassEntropy: 'бит энтропии',
    toolPassLength: 'Длина',
    toolPassUpper: 'Заглавные буквы (A-Z)',
    toolPassLower: 'Строчные буквы (a-z)',
    toolPassNumbers: 'Цифры (0-9)',
    toolPassSymbols: 'Спецсимволы (!@#$)',
    toolPassGenerateBtn: 'Сгенерировать Новый Пароль',
    toolCopy: 'Копировать',
    toolCopied: 'Скопировано',

    toolCurrTitle: 'Калькулятор Валют и Криптовалют',
    toolCurrSubtitle: 'Мгновенная Оценка Стоимости',
    toolCurrBadge: 'Динамические Формулы',
    toolCurrAmount: 'Сумма для Конвертации',
    toolCurrFrom: 'Из валюты',
    toolCurrTo: 'В валюту',
    toolCurrNote: 'Формула основана на глобальных средневзвешенных котировках.',

    toolJsonTitle: 'Форматтер & Валидатор JSON',
    toolJsonSubtitle: 'Синтаксический Анализатор',
    toolJsonFormatBtn: 'Форматировать / Украсить',
    toolJsonMinifyBtn: 'Сжать (Minify)',
    toolJsonValid: 'JSON корректен и валиден.',

    toolB64Title: 'Кодировщик / Декодировщик Base64',
    toolB64Subtitle: 'Преобразователь Строк и Двоичных Данных',
    toolB64Encode: 'Кодировать',
    toolB64Decode: 'Декодировать',
    toolB64Input: 'Входной Текст',
    toolB64Output: 'Результат Преобразования',
    toolB64ConvertBtn: 'Выполнить Конвертацию',

    toolStatsTitle: 'Статистика Текста & Время Чтения',
    toolStatsSubtitle: 'Анализатор Контента и Речи',
    toolStatsClear: 'Очистить',
    toolStatsPlaceholder: 'Введите или вставьте текст для расчета детальной статистики...',
    toolStatsWords: 'Слов',
    toolStatsChars: 'Символов',
    toolStatsNoSpaces: 'Без пробелов',
    toolStatsSentences: 'Предложений',
    toolStatsReading: 'Чтение',
    toolStatsSpeech: 'Речь',

    toolSnippetTitle: 'Генератор Карточек Кода',
    toolSnippetSubtitle: 'Эстетичная Презентация Синтаксиса',
    toolSnippetTheme: 'Тема:',
    toolSnippetCopyBtn: 'Копировать Код',
    toolSnippetFooter: 'Готово для документации и публикации',

    contactHeaderBadge: 'ПРЯМАЯ СВЯЗЬ',
    contactHeaderTitle: 'Давайте Создадим Что-то Исключительное',
    contactHeaderSubtitle: 'Планируете ли вы новый проект, нуждаетесь в автоматизации Telegram-ботов или хотите обсудить сотрудничество — свяжитесь со мной напрямую.',
    contactHotlineTitle: 'Телефон Горячей Линии',
    contactHotlineSubtitle: 'Прямая голосовая связь и SMS',
    contactTelegramTitle: 'Telegram Канал & Личные Сообщения',
    contactTelegramSubtitle: 'Мгновенные сообщения и запросы демо-ботов',
    contactFormTitle: 'Отправка Зашифрованного Сообщения',
    contactFormSubtitle: 'С Криптографической Подписью Аудита SHA-256',
    contactNameLabel: 'Ваше Полное Имя',
    contactNamePlaceholder: 'Имя и фамилия',
    contactEmailLabel: 'Электронная Почта',
    contactEmailPlaceholder: 'name@example.com',
    contactSubjectLabel: 'Тема / Тип Проекта',
    contactSubjectPlaceholder: 'Например: Разработка Telegram-бота или Веб-сервиса',
    contactMessageLabel: 'Текст Сообщения',
    contactMessagePlaceholder: 'Опишите подробности вашего проекта, стек или требования...',
    contactSubmitBtn: 'Отправить Зашифрованное Сообщение',
    contactSubmittingBtn: 'Отправка...',
    contactSuccessDigest: 'Ваше сообщение подтверждено и направлено в Telegram. Криптографический чек:',

    resumeModalTitle: 'Мухаммадислом Рустамбеков — Официальное Резюме (CV)',
    resumePrintBtn: 'Печать / Сохранить в PDF',
    resumeSummaryHeading: 'Профессиональное Резюме',
    resumeStackHeading: 'Основной Технологический Стек',
    resumeProjectsHeading: 'Запущенные Коммерческие Проекты',
    resumeEduHeading: 'Образование и Квалификация',
    certModalIssuer: 'Международный Учебный Центр Turon',
    certModalTitle: 'Сертификат Профессиональной Квалификации',
    certModalPresentation: 'Настоящий диплом официально вручен:',
    certModalStudentName: 'Рустамбекову Мухаммадислому Мансурбековичу',
    certModalText: 'за успешное прохождение интенсивной программы обучения, сдачу практических нормативов и защиту коммерческих проектов по специальности:',
    certModalAward: 'Full-Stack Инженер Программного Обеспечения',
    certModalCredId: 'Номер Сертификата',
    certModalStatus: 'Статус',
    certModalStatusVal: 'ВЕРИФИЦИРОВАН АКТИВЕН',
    certModalMajor: 'Основной Стек',
    certModalAuth: 'Аутентификация',
    certModalVerifiedFooter: 'Официальный верифицированный цифровой сертификат Учебного Центра Turon',
    certTabOriginal: 'Сертификат (Оригинал)',
    certTabCover: 'Твёрдая Обложка',
    certLicenseLabel: 'Лицензия:',
    certRegNumLabel: 'Регистрационный №:',
    certPeriodLabel: 'Период Обучения:',
    certLocationLabel: 'Адрес:',
    demoModalNewTab: 'Открыть в Новой Вкладке',
    demoModalConnecting: 'Подключение к живому производственному узлу...',
    demoModalTarget: 'Адрес:',

    footerBio: 'Full-Stack инженер и разработчик Telegram-ботов. Сертифицирован Международным Учебным Центром Turon. Разработка надежных, масштабируемых и производительных систем.',
    footerCert: 'Сертифицирован Учебным Центром Turon',
    footerNav: 'Навигация',
    footerDirect: 'Прямые Контакты',
    footerLocation: 'Ташкент / По всему миру',
    footerCopyright: 'Мухаммадислом Рустамбеков. Все права защищены.'
  },

  en: {
    brandName: 'Muhammadislom Rustambekov',
    roleTitle: 'Full-Stack Software Engineer & Telegram Bot Developer',
    turonCertified: 'Turon International Education Center Certified',
    turonCertShort: 'Turon Cert.',
    onlineStatus: 'Open to Work',
    call: 'Call',
    resume: 'Resume',
    telegram: 'Telegram',

    navOverview: 'Overview',
    navAbout: 'About',
    navProjects: 'Projects',
    navTools: 'Tools & Lab',
    navContact: 'Contact',
    navMenu: 'Navigation Menu',

    themeLightTooltip: 'Switch to Warm Cream Theme',
    themeDarkTooltip: 'Switch to Charcoal Dark Theme',

    heroBadge: 'TURON INTERNATIONAL EDUCATION CENTER CERTIFIED',
    heroTitle: 'Architecting Secure, Resilient & High-Velocity Systems',
    heroSubtitle: 'Muhammadislom Rustambekov — Full-Stack Software Engineer & Telegram Bot Automation Specialist. Crafting high-throughput backend services and frictionless web experiences.',
    statProjects: 'Live Projects',
    statUptime: 'Bot Uptime',
    statLatency: 'Median Latency',
    statCertification: 'Accreditation',
    btnExploreProjects: 'Explore 6 Live Projects',
    btnUtilityLab: 'Utility Lab',
    btnContact: 'Get in Touch',

    showcaseBadge: 'VERIFIED DEPLOYMENTS',
    showcaseTitle: '6 Live Production Projects',
    showcaseSubtitle: 'Every application is completely deployed in cloud infrastructure and open for immediate interactive testing.',
    btnPreview: 'Quick Preview',
    btnVisitSite: 'Visit Site',
    allProjectsLink: 'View all projects',

    botTelemetryTitle: 'Real-Time Telemetry & Systems Status',
    botTelemetrySubtitle: 'Telegram Bot Command Center — operational 24/7 with zero dropped webhooks and real-time event dispatching',
    botStatusOnline: '24/7 ONLINE ACTIVE',
    botLatencyLabel: 'Response Latency',
    botUptimeLabel: 'Uptime Guarantee',
    botArchitectureLabel: 'Architecture',
    botArchitectureValue: 'Python Asyncio + Webhook',

    aboutTitle: 'About Muhammadislom Rustambekov',
    aboutSubtitle: 'Full-Stack Software Engineer & Telegram Bot Developer dedicated to writing clean, maintainable, and high-performance code.',
    bioHeading: 'Professional Overview',
    bioP1: 'My name is Muhammadislom Rustambekov (Mansurbekovich). As an engineer certified by the prestigious Turon International Education Center, I focus on building production-grade digital solutions that combine thoughtful interface design with unbreakable backend security.',
    bioP2: 'Over the course of developing multiple live production platforms (including real-time multiplayer games, financial ledgers, language learning platforms, and e-commerce stores), I have honed a disciplined approach to full-stack engineering: prioritizing sub-second latency, rigorous data validation, and clean spatial interfaces.',
    bioP3: 'In addition to web application engineering, I specialize in Telegram Bot Automation — constructing high-concurrency bots capable of processing thousands of automated user interactions, payments, and webhook triggers with zero dropped events.',
    accreditationHeading: 'Accreditation & Education',
    inspectDiplomaBtn: 'Inspect & Zoom Diploma',
    diplomaSubtitle: 'Official Certificate of Achievement',
    diplomaMajor: 'Full-Stack Software Developer',
    diplomaIssuer: 'Issued by Turon International Education Center',
    diplomaVerifiedBadge: 'Verified TIEC-FS-2026-98104',
    diplomaSkill1: 'Modern JavaScript / TypeScript & React 19',
    diplomaSkill2: 'Python & Asynchronous Web Services (FastAPI)',
    diplomaSkill3: 'Database Modeling & SQL Architecture',
    diplomaSkill4: 'Enterprise Security & Cryptography',
    diplomaClickHint: 'Click to view high-resolution diploma & validation seal',
    diplomaViewFull: 'View Full Certificate',

    skillsBreakdownHeading: 'Technical Competencies',
    skillCatFrontend: 'Frontend Systems',
    skillCatBackend: 'Backend Engineering',
    skillCatTelegram: 'Telegram Bot Automation',
    skillCatSecurity: 'Security & Reliability',
    skillMatrixHeading: 'Technical Proficiency & Mastery Matrix',
    skillMatrixSubtitle: 'Quantitative assessment of core production competencies based on real-world deployed architectures.',

    githubHeading: 'Continuous Development & GitHub Activity',
    githubStreakBadge: '49 Day Streak',
    githubSubtitle: 'Real telemetry of code velocity, modular commits, and active repository maintenance over the past 52 weeks.',
    githubTotalContributions: 'Total Contributions',
    githubCurrentStreak: 'Current Streak',
    githubLongestStreak: 'Longest Streak',
    githubActiveRepos: 'Production Repos',
    githubTimelineNote: '52 weeks contribution timeline',
    githubLess: 'Less',
    githubMore: 'More',

    aboutCtaTitle: 'Interested in collaborating or hiring?',
    aboutCtaSubtitle: 'Let\'s discuss your project requirements or technical challenges.',
    aboutCtaContactBtn: 'Contact Page',
    aboutCtaCallBtn: 'Call Hotline',

    projectsHeaderBadge: 'PRODUCTION DEPLOYMENTS',
    projectsHeaderTitle: 'Live Showcase Projects',
    projectsHeaderSubtitle: 'Explore 6 real, live web applications built and deployed by Muhammadislom Rustambekov. Every project is fully accessible online with instant links and in-page preview.',
    projectsSearchPlaceholder: 'Search projects or tags...',
    projectsEmptyText: 'No projects matched your search criteria. Try clearing the filter or search term.',
    catAll: 'All',
    catMultiplayer: 'Multiplayer Gaming',
    catWebApps: 'Modern Web Apps',
    catFinTech: 'FinTech & Accounting',
    catEdTech: 'EdTech Platform',
    catEcommerce: 'E-Commerce',
    catSports: 'Sports Analytics',

    toolsHeaderBadge: 'INTERACTIVE UTILITIES',
    toolsHeaderTitle: 'Developer & Visitor Utility Lab',
    toolsHeaderSubtitle: 'A collection of real-world, 100% operational web utilities built directly into this portfolio. Generate cryptographically strong secrets, convert currencies, and validate data.',

    toolPassTitle: 'Secure Password Generator',
    toolPassSubtitle: 'CSPRNG Entropy Generator',
    toolPassEntropy: 'bits entropy',
    toolPassLength: 'Length',
    toolPassUpper: 'Uppercase (A-Z)',
    toolPassLower: 'Lowercase (a-z)',
    toolPassNumbers: 'Numbers (0-9)',
    toolPassSymbols: 'Symbols (!@#$)',
    toolPassGenerateBtn: 'Generate New Secret',
    toolCopy: 'Copy',
    toolCopied: 'Copied',

    toolCurrTitle: 'Currency & Crypto Calculator',
    toolCurrSubtitle: 'Instant Valuation Engine',
    toolCurrBadge: 'Live Formulas',
    toolCurrAmount: 'Amount to Convert',
    toolCurrFrom: 'From',
    toolCurrTo: 'To',
    toolCurrNote: 'Formula based on global weighted averages.',

    toolJsonTitle: 'JSON Formatter & Validator',
    toolJsonSubtitle: 'Syntax Analyzer',
    toolJsonFormatBtn: 'Format / Beautify',
    toolJsonMinifyBtn: 'Minify Compact',
    toolJsonValid: 'JSON successfully formatted and valid.',

    toolB64Title: 'Base64 Encode / Decode',
    toolB64Subtitle: 'Binary & String Transformer',
    toolB64Encode: 'Encode',
    toolB64Decode: 'Decode',
    toolB64Input: 'Input String',
    toolB64Output: 'Output Result',
    toolB64ConvertBtn: 'Execute Conversion',

    toolStatsTitle: 'Text Statistics & Reading Time',
    toolStatsSubtitle: 'Content & Speech Analyzer',
    toolStatsClear: 'Clear',
    toolStatsPlaceholder: 'Type or paste your text here to compute statistics...',
    toolStatsWords: 'Words',
    toolStatsChars: 'Characters',
    toolStatsNoSpaces: 'No Spaces',
    toolStatsSentences: 'Sentences',
    toolStatsReading: 'Reading',
    toolStatsSpeech: 'Speech',

    toolSnippetTitle: 'Code Snippet Card Generator',
    toolSnippetSubtitle: 'Syntax Presenter',
    toolSnippetTheme: 'Theme:',
    toolSnippetCopyBtn: 'Copy Code',
    toolSnippetFooter: 'Ready for documentation or sharing',

    contactHeaderBadge: 'DIRECT COMMUNICATIONS',
    contactHeaderTitle: 'Let\'s Build Something Exceptional',
    contactHeaderSubtitle: 'Whether you have an upcoming project, need high-concurrency Telegram bot automation, or want to discuss engineering roles — reach out directly.',
    contactHotlineTitle: 'Hotline Telephone',
    contactHotlineSubtitle: 'Direct voice & SMS connectivity',
    contactTelegramTitle: 'Telegram Channel & Direct Message',
    contactTelegramSubtitle: 'Instant messaging & bot demo requests',
    contactFormTitle: 'Encrypted Communication Dispatcher',
    contactFormSubtitle: 'End-to-End Cryptographic Audit via SHA-256',
    contactNameLabel: 'Full Name',
    contactNamePlaceholder: 'Your full name',
    contactEmailLabel: 'Email Address',
    contactEmailPlaceholder: 'name@example.com',
    contactSubjectLabel: 'Subject / Project Scope',
    contactSubjectPlaceholder: 'e.g., Telegram Bot or Full-Stack Web Application',
    contactMessageLabel: 'Message Details',
    contactMessagePlaceholder: 'Provide details about your project specifications or goals...',
    contactSubmitBtn: 'Send Encrypted Message',
    contactSubmittingBtn: 'Transmitting...',
    contactSuccessDigest: 'Your message has been verified and dispatched to Telegram. Cryptographic receipt:',

    resumeModalTitle: 'Muhammadislom Rustambekov — Curriculum Vitae (CV)',
    resumePrintBtn: 'Print / Save as PDF',
    resumeSummaryHeading: 'Professional Summary',
    resumeStackHeading: 'Technical Core Stack',
    resumeProjectsHeading: 'Live Production Deployments',
    resumeEduHeading: 'Education & Accreditations',
    certModalIssuer: 'Turon International Education Center',
    certModalTitle: 'Certificate of Professional Qualification',
    certModalPresentation: 'This is officially presented to:',
    certModalStudentName: 'Rustambekov Muhammadislom Mansurbekovich',
    certModalText: 'for successfully fulfilling the rigorous curriculum, comprehensive testing, and live commercial project defenses in the discipline of:',
    certModalAward: 'Full-Stack Software Developer',
    certModalCredId: 'Credential ID',
    certModalStatus: 'Status',
    certModalStatusVal: 'VERIFIED ACTIVE',
    certModalMajor: 'Major Stack',
    certModalAuth: 'Authentication',
    certModalVerifiedFooter: 'Official verified digital credential issued by Turon International Education Center',
    certTabOriginal: 'Certificate (Original)',
    certTabCover: 'Hard Cover',
    certLicenseLabel: 'License:',
    certRegNumLabel: 'Registration №:',
    certPeriodLabel: 'Study Period:',
    certLocationLabel: 'Location:',
    demoModalNewTab: 'Open in New Tab',
    demoModalConnecting: 'Connecting to live production node...',
    demoModalTarget: 'Target:',

    footerBio: 'Full-Stack Software Engineer & Telegram Bot Developer. Certified by Turon International Education Center. Dedicated to building reliable, high-performance web applications and automated systems.',
    footerCert: 'Turon International Education Center Certified',
    footerNav: 'Navigation',
    footerDirect: 'Direct Contact',
    footerLocation: 'Toshkent / Worldwide Ingress',
    footerCopyright: 'Muhammadislom Rustambekov. All rights reserved.'
  }
};

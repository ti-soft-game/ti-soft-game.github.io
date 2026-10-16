/**
 * TIGames Universe — Полный реестр созданных приложений и игр
 * Версия: 1.0.0 (2026-10-11)
 * Студия: TIGames (Google Play Dev ID: 5893963663664759243)
 */

const TIGAMES_PORTFOLIO = [
  // 1. Block 2048: Drop & Merge
  {
    id: "block-2048",
    titleRu: "Block 2048: Падение и слияние",
    titleEn: "Block 2048: Drop & Merge",
    packageName: "com.block2048.game",
    type: "game",
    category: "puzzle",
    categoryNameRu: "Головоломка",
    shortDescRu: "Бросай блоки, сливай числа цепочками и пройди 1000 уровней. Собери 2048!",
    iconEmoji: "🔢",
    accentColor: "#FF6B00",
    badge: "Новинка",
    storeUrl: "https://play.google.com/store/apps/details?id=com.block2048.game",
    marketUri: "market://details?id=com.block2048.game",
    webPlayUrl: null,
    apkUrl: null,
    privacyPolicyUrl: "https://telegra.ph/Block-2048---Privacy-Policy-10-10"
  },

  // 2. Neon Bounce: Кибер Рикошет
  {
    id: "neon-bounce",
    titleRu: "Neon Bounce: Кибер Рикошет",
    titleEn: "Neon Bounce: Cyber Ricochet",
    packageName: "com.ti.neonbounce",
    type: "game",
    category: "arcade",
    categoryNameRu: "Арканоид · Киберпанк",
    shortDescRu: "Динамичный неоновый арканоид: запускай шары, выбивай блоки и ставь рекорды!",
    iconEmoji: "🏓",
    iconUrl: "icons/games/neon-bounce.png",
    accentColor: "#00F0FF",
    badge: "Хит",
    storeUrl: "https://play.google.com/store/apps/details?id=com.ti.neonbounce",
    marketUri: "market://details?id=com.ti.neonbounce",
    webPlayUrl: "neon-bounce/",
    apkUrl: "downloads/neon-bounce.apk",
    privacyPolicyUrl: "https://ti-soft-game.github.io/Privacy-Policy-and-Terms/privacy-policy-mobile-apps.html"
  },

  // 3. Retro Zmeyka 3310
  {
    id: "retro-zmeyka",
    titleRu: "Retro Zmeyka 3310",
    titleEn: "Retro Snake 3310 Classic",
    packageName: "tj.ti.snakeRetro",
    type: "game",
    category: "retro",
    categoryNameRu: "Ретро · Nokia 3310",
    shortDescRu: "Легендарная змейка с монохромного экрана Nokia 3310. Настоящая ностальгия!",
    iconEmoji: "🐍",
    iconUrl: "icons/games/retro-zmeyka.png",
    accentColor: "#43A047",
    badge: "Ретро",
    storeUrl: "https://play.google.com/store/apps/details?id=tj.ti.snakeRetro",
    marketUri: "market://details?id=tj.ti.snakeRetro",
    webPlayUrl: "retro-zmeyka/",
    apkUrl: "downloads/retro-zmeyka.apk",
    privacyPolicyUrl: "https://ti-soft-game.github.io/Privacy-Policy-and-Terms/privacy-policy-mobile-apps.html"
  },

  // 4. Cyber Helix: Neon Drop
  {
    id: "cyber-helix",
    titleRu: "Cyber Helix: Neon Drop",
    titleEn: "Cyber Helix: Neon Drop",
    packageName: "com.ti.cyberhelix",
    type: "game",
    category: "arcade",
    categoryNameRu: "Аркада · Спираль",
    shortDescRu: "Вращай винтовую башню, скользи по неоновым кольцам и круши препятствия!",
    iconEmoji: "🌀",
    iconUrl: "icons/games/cyber-helix.png",
    accentColor: "#9D00FF",
    badge: "Аркада",
    storeUrl: "https://play.google.com/store/apps/details?id=com.ti.cyberhelix",
    marketUri: "market://details?id=com.ti.cyberhelix",
    webPlayUrl: "cyber-helix/",
    apkUrl: "downloads/cyber-helix.apk",
    privacyPolicyUrl: "https://ti-soft-game.github.io/Privacy-Policy-and-Terms/privacy-policy-mobile-apps.html"
  },

  // 4b. Water Sort: Color Puzzle
  {
    id: "water-sort",
    titleRu: "Water Sort: Color Puzzle",
    titleEn: "Water Sort: Color Puzzle",
    packageName: "com.ti.watersortpuzzle",
    type: "game",
    category: "puzzle",
    categoryNameRu: "Головоломка · Сортировка",
    shortDescRu: "Увлекательная цветная головоломка: переливай жидкости по колбам, сортируй цвета и расслабляйся!",
    iconEmoji: "🧪",
    iconUrl: "icons/games/water-sort.png",
    accentColor: "#00E5FF",
    badge: "Хит",
    storeUrl: "https://play.google.com/store/apps/details?id=com.ti.watersortpuzzle",
    marketUri: "market://details?id=com.ti.watersortpuzzle",
    webPlayUrl: "water-sort/",
    apkUrl: "downloads/water-sort.apk",
    privacyPolicyUrl: "https://ti-soft-game.github.io/Privacy-Policy-and-Terms/privacy-policy-mobile-apps.html"
  },

  // 5. Gravity Flip: Cyber Runner
  {
    id: "gravity-flip",
    titleRu: "Gravity Flip: Cyber Runner",
    titleEn: "Gravity Flip: Cyber Runner",
    packageName: "com.ti.gravityflip",
    type: "game",
    category: "runner",
    categoryNameRu: "Хардкор · Раннер",
    shortDescRu: "Ритм-раннер с инверсией гравитации в один тап! Преодолей скорость света.",
    iconEmoji: "⚡",
    iconUrl: "icons/games/gravity-flip.png",
    accentColor: "#FF0055",
    badge: "Хардкор",
    storeUrl: "https://play.google.com/store/apps/details?id=com.ti.gravityflip",
    marketUri: "market://details?id=com.ti.gravityflip",
    webPlayUrl: "gravity-flip/",
    apkUrl: "downloads/gravity-flip.apk",
    privacyPolicyUrl: "https://ti-soft-game.github.io/Privacy-Policy-and-Terms/privacy-policy-mobile-apps.html"
  },

  // 6. Orbital Pulse: Defense
  {
    id: "orbital-pulse",
    titleRu: "Orbital Pulse: Defense",
    titleEn: "Orbital Pulse: Core Defense",
    packageName: "com.ti.orbitalpulse",
    type: "game",
    category: "space",
    categoryNameRu: "Ритм · Защита ядра",
    shortDescRu: "Орбитальная защита ядра под электронный ритм. Отражай квантовые волны!",
    iconEmoji: "🪐",
    iconUrl: "icons/games/orbital-pulse.png",
    accentColor: "#00FF88",
    badge: "Ритм",
    storeUrl: "https://play.google.com/store/apps/details?id=com.ti.orbitalpulse",
    marketUri: "market://details?id=com.ti.orbitalpulse",
    webPlayUrl: "orbital-pulse/",
    apkUrl: "downloads/orbital-pulse.apk",
    privacyPolicyUrl: "https://ti-soft-game.github.io/Privacy-Policy-and-Terms/privacy-policy-mobile-apps.html"
  },

  // 7. Balloon Pop: Лопай Шарики
  {
    id: "balloon-pop",
    titleRu: "Balloon Pop: Лопай Шарики",
    titleEn: "Balloon Pop: Bubble Adventure",
    packageName: "com.ti.balloonpop",
    type: "game",
    category: "puzzle",
    categoryNameRu: "Казуал · Развивающая",
    shortDescRu: "Яркая игра: лопай шарики, учи буквы, цифры, цвета и зверят!",
    iconEmoji: "🎈",
    iconUrl: "icons/games/balloon-pop.png",
    accentColor: "#FF4081",
    badge: "Казуал",
    storeUrl: "https://play.google.com/store/apps/details?id=com.ti.balloonpop",
    marketUri: "market://details?id=com.ti.balloonpop",
    webPlayUrl: "balloon-pop/",
    apkUrl: "downloads/balloon-pop.apk",
    privacyPolicyUrl: "https://ti-soft-game.github.io/Privacy-Policy-and-Terms/privacy-policy-mobile-apps.html"
  },

  // 8. Prism Laser: Optic Lab
  {
    id: "prism-laser",
    titleRu: "Prism Laser: Optic Lab",
    titleEn: "Prism Laser: Light Puzzle",
    packageName: "com.ti.prismlaser",
    type: "game",
    category: "puzzle",
    categoryNameRu: "Логика · Оптика",
    shortDescRu: "Оптическая головоломка с призмами, зеркалами и лазерами. Заряди реактор!",
    iconEmoji: "🔮",
    iconUrl: "icons/games/prism-laser.png",
    accentColor: "#7C4DFF",
    badge: "Логика",
    storeUrl: "https://play.google.com/store/apps/details?id=com.ti.prismlaser",
    marketUri: "market://details?id=com.ti.prismlaser",
    webPlayUrl: "prism-laser/",
    apkUrl: "downloads/prism-laser.apk",
    privacyPolicyUrl: "https://ti-soft-game.github.io/Privacy-Policy-and-Terms/privacy-policy-mobile-apps.html"
  },

  // 9. Resume Card: Офлайн Фокус
  {
    id: "resume-card",
    titleRu: "Resume Card: Офлайн Фокус",
    titleEn: "Resume Card: Offline Focus",
    packageName: "com.ti.resumecard",
    type: "app",
    category: "utility",
    categoryNameRu: "Продуктивность · Фокус",
    shortDescRu: "Продолжайте работу с того самого места — полностью офлайн и без отвлечений.",
    iconEmoji: "📄",
    accentColor: "#1E88E5",
    badge: "Утилита",
    storeUrl: "https://play.google.com/store/apps/details?id=com.ti.resumecard",
    marketUri: "market://details?id=com.ti.resumecard",
    webPlayUrl: null,
    apkUrl: "downloads/resume-card.apk",
    privacyPolicyUrl: "https://ti-soft-game.github.io/Privacy-Policy-and-Terms/privacy-policy-mobile-apps.html"
  },

  // 10. BackPin: Память Точек GPS
  {
    id: "backpin",
    titleRu: "BackPin: Память Точек GPS",
    titleEn: "BackPin: GPS Memory Point",
    packageName: "com.ti.backpin",
    type: "app",
    category: "utility",
    categoryNameRu: "Навигация · Память мест",
    shortDescRu: "Сохраните точку возврата с фото, заметкой и точной геопозицией офлайн.",
    iconEmoji: "📍",
    accentColor: "#FF5722",
    badge: "Навигация",
    storeUrl: "https://play.google.com/store/apps/details?id=com.ti.backpin",
    marketUri: "market://details?id=com.ti.backpin",
    webPlayUrl: null,
    apkUrl: "downloads/backpin-gps.apk",
    privacyPolicyUrl: "https://ti-soft-game.github.io/Privacy-Policy-and-Terms/privacy-policy-mobile-apps.html"
  },

  // 11. Home Part Pocket
  {
    id: "home-part-pocket",
    titleRu: "Home Part Pocket: Учет Деталей",
    titleEn: "Home Part Pocket: Home Inventory",
    packageName: "com.ti.homepartpocket",
    type: "app",
    category: "utility",
    categoryNameRu: "Дом · Учет расходников",
    shortDescRu: "Храните точные данные о нужных расходниках и деталях дома — офлайн.",
    iconEmoji: "📦",
    accentColor: "#00897B",
    badge: "Для дома",
    storeUrl: "https://play.google.com/store/apps/details?id=com.ti.homepartpocket",
    marketUri: "market://details?id=com.ti.homepartpocket",
    webPlayUrl: null,
    apkUrl: "downloads/home-part-pocket.apk",
    privacyPolicyUrl: "https://ti-soft-game.github.io/Privacy-Policy-and-Terms/privacy-policy-mobile-apps.html"
  },

  // 12. Ten-Minute Home
  {
    id: "ten-minute-home",
    titleRu: "Ten-Minute Home / Дом за 10 минут",
    titleEn: "Ten-Minute Home: Quick Reset",
    packageName: "com.ti.tenminutehome",
    type: "app",
    category: "utility",
    categoryNameRu: "Дом · Уборка без стресса",
    shortDescRu: "Умный план быстрой уборки под ваши силы и время — без стресса и суеты.",
    iconEmoji: "🏠",
    accentColor: "#FFA000",
    badge: "Уют",
    storeUrl: "https://play.google.com/store/apps/details?id=com.ti.tenminutehome",
    marketUri: "market://details?id=com.ti.tenminutehome",
    webPlayUrl: null,
    apkUrl: null,
    privacyPolicyUrl: "https://ti-soft-game.github.io/Privacy-Policy-and-Terms/privacy-policy.html"
  }
];

// Экспорт для Node.js / модулей
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TIGAMES_PORTFOLIO };
}

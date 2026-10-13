// TIGames Achievements & Trophy Badges System
(function() {
  const STORAGE_KEY = 'tigames_achievements_data';

  const ACHIEVEMENTS = [
    { id: 'first_game', title: 'Первый Рикошет', desc: 'Запусти Neon Bounce и сделай первый удар', icon: '🏓', xp: 200 },
    { id: 'snake_legend', title: 'Змеелов 3310', desc: 'Погрузись в ностальгию с Retro Zmeyka', icon: '🐍', xp: 200 },
    { id: 'helix_drop', title: 'Винтовой Спуск', desc: 'Испытай скорость падения в Cyber Helix', icon: '🌀', xp: 250 },
    { id: 'gravity_master', title: 'Антигравитация', desc: 'Преодолей гравитацию в Gravity Flip', icon: '⚡', xp: 300 },
    { id: 'orbital_guard', title: 'Щит Галактики', desc: 'Отрази квантовые сферы в Orbital Pulse', icon: '🛡️', xp: 350 },
    { id: 'balloon_buster', title: 'Шаропад', desc: 'Сделай комбо лопания в Balloon Pop', icon: '🎈', xp: 200 },
    { id: 'laser_optics', title: 'Квантовый Фотон', desc: 'Преломи лазерные лучи в Prism Laser', icon: '🔮', xp: 400 },
    { id: 'mobile_pwa', title: 'Мобильный Киберпанк', desc: 'Установи PWA или открой мобильный QR', icon: '📱', xp: 500 }
  ];

  function getUnlockedIds() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch(e) {
      return [];
    }
  }

  function saveUnlockedIds(ids) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }

  function showToast(ach) {
    let toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: linear-gradient(135deg, #151C2C 0%, #1A2338 100%);
      border: 1px solid #00F0FF;
      box-shadow: 0 10px 30px rgba(0, 240, 255, 0.3);
      border-radius: 16px;
      padding: 16px 20px;
      display: flex;
      align-items: center;
      gap: 14px;
      z-index: 9999999;
      transform: translateY(100px);
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      font-family: inherit;
    `;
    toast.innerHTML = `
      <div style="font-size: 32px; filter: drop-shadow(0 0 8px rgba(0,240,255,0.6));">${ach.icon}</div>
      <div>
        <div style="font-size: 11px; font-weight: 800; color: #00F0FF; letter-spacing: 1px; text-transform: uppercase;">🏆 ТРОФЕЙ РАЗБЛОКИРОВАН!</div>
        <div style="font-size: 15px; font-weight: 800; color: #FFFFFF; margin: 2px 0;">${ach.title}</div>
        <div style="font-size: 12px; color: #8B949E;">+${ach.xp} XP · ${ach.desc}</div>
      </div>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    }, 50);

    setTimeout(() => {
      toast.style.transform = 'translateY(100px)';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }

  window.TIGamesAchievements = {
    unlock: function(id) {
      const unlocked = getUnlockedIds();
      if (unlocked.includes(id)) return false;
      
      const ach = ACHIEVEMENTS.find(a => a.id === id);
      if (!ach) return false;

      unlocked.push(id);
      saveUnlockedIds(unlocked);

      if (window.TIGamesAudio) window.TIGamesAudio.playReward();
      showToast(ach);
      this.render();
      return true;
    },
    getList: function() {
      const unlocked = getUnlockedIds();
      return ACHIEVEMENTS.map(a => ({
        ...a,
        unlocked: unlocked.includes(a.id)
      }));
    },
    render: function() {
      const container = document.getElementById('achievements-grid');
      if (!container) return;
      const list = this.getList();
      container.innerHTML = '';
      list.forEach(a => {
        const item = document.createElement('div');
        item.style.cssText = `
          background: ${a.unlocked ? 'rgba(0, 240, 255, 0.08)' : 'rgba(255, 255, 255, 0.03)'};
          border: 1px solid ${a.unlocked ? 'rgba(0, 240, 255, 0.4)' : 'rgba(255, 255, 255, 0.08)'};
          border-radius: 14px;
          padding: 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          filter: ${a.unlocked ? 'none' : 'grayscale(1) opacity(0.5)'};
          transition: transform 0.2s;
        `;
        item.innerHTML = `
          <div style="font-size: 26px;">${a.icon}</div>
          <div style="min-width: 0;">
            <div style="font-size: 13px; font-weight: 700; color: ${a.unlocked ? '#FFFFFF' : '#8B949E'};">${a.title}</div>
            <div style="font-size: 11px; color: #8B949E; margin-top: 2px;">+${a.xp} XP</div>
          </div>
        `;
        container.appendChild(item);
      });
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      window.TIGamesAchievements.render();
    }, 100);
  });
})();

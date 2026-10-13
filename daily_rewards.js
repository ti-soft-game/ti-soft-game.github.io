// TIGames Daily Rewards & Retention Streaks System
(function() {
  const STREAK_KEY = 'tigames_streak_data';

  const REWARDS = [
    { day: 1, xp: 100, title: 'Кибер-Старт', icon: '⚡' },
    { day: 2, xp: 250, title: 'Неоновый Драйв', icon: '🔋' },
    { day: 3, xp: 500, title: 'Фотонный Щит', icon: '🛡️' },
    { day: 4, xp: 800, title: 'Лазерный Фокус', icon: '🔮' },
    { day: 5, xp: 1200, title: 'Синтвейв Ритм', icon: '🎧' },
    { day: 6, xp: 2000, title: 'Квантовый Буст', icon: '🚀' },
    { day: 7, xp: 5000, title: 'Легенда Вселенной', icon: '👑' }
  ];

  function getStreakData() {
    try {
      const data = JSON.parse(localStorage.getItem(STREAK_KEY));
      if (data && typeof data.streak === 'number') return data;
    } catch(e) {}
    return { streak: 0, lastClaimDate: null, totalXp: 0 };
  }

  function saveStreakData(data) {
    localStorage.setItem(STREAK_KEY, JSON.stringify(data));
  }

  function getTodayStr() {
    return new Date().toISOString().slice(0, 10);
  }

  function canClaimToday() {
    const data = getStreakData();
    return data.lastClaimDate !== getTodayStr();
  }

  // Pure Canvas Confetti Shooter
  function launchConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '999999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#00F0FF', '#00FF88', '#FF0055', '#FFB300', '#B026FF', '#FFFFFF'];
    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width * 0.5,
        y: canvas.height * 0.4,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.7) * 18,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        life: 1.0
      });
    }

    let frame = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.4; // gravity
        p.life -= 0.015;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });
      frame++;
      if (frame < 80) {
        requestAnimationFrame(animate);
      } else {
        canvas.remove();
      }
    }
    requestAnimationFrame(animate);
  }

  window.TIGamesRewards = {
    getData: getStreakData,
    canClaim: canClaimToday,
    claim: function() {
      if (!canClaimToday()) return false;
      const data = getStreakData();
      const today = getTodayStr();

      // Check if streak is consecutive (claimed yesterday)
      if (data.lastClaimDate) {
        const last = new Date(data.lastClaimDate);
        const diffDays = Math.round((new Date(today) - last) / (1000 * 3600 * 24));
        if (diffDays === 1) {
          data.streak = (data.streak % 7) + 1;
        } else {
          data.streak = 1;
        }
      } else {
        data.streak = 1;
      }

      const rewardIndex = (data.streak - 1) % 7;
      const reward = REWARDS[rewardIndex];
      data.totalXp += reward.xp;
      data.lastClaimDate = today;
      saveStreakData(data);

      if (window.TIGamesAudio) window.TIGamesAudio.playReward();
      launchConfetti();
      return reward;
    },
    getRewardsList: function() { return REWARDS; }
  };
})();

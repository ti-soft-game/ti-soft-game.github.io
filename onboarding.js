// TIGames Interactive Onboarding & Welcome Guide
(function() {
  const STORAGE_KEY = 'tigames_onboarding_seen';

  function showOnboardingModal(force = false) {
    if (!force && localStorage.getItem(STORAGE_KEY) === 'true') {
      return;
    }

    let modal = document.getElementById('onboardingModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'onboardingModal';
      modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(9, 13, 22, 0.9);
        backdrop-filter: blur(10px);
        z-index: 99999999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      `;

      modal.innerHTML = `
        <div style="background: linear-gradient(135deg, #151C2C 0%, #1A2338 100%); border: 1px solid rgba(0, 240, 255, 0.4); border-radius: 24px; padding: 32px 26px; max-width: 500px; width: 100%; box-shadow: 0 16px 50px rgba(0, 240, 255, 0.25); text-align: center; position: relative;">
          <button onclick="window.TIGamesOnboarding.close()" style="position: absolute; top: 18px; right: 20px; background: rgba(255, 255, 255, 0.1); border: none; color: #fff; width: 32px; height: 32px; border-radius: 50%; font-size: 14px; cursor: pointer;">✕</button>
          
          <div style="font-size: 42px; margin-bottom: 8px;">🌌</div>
          <div style="display: inline-block; padding: 4px 12px; border-radius: 99px; background: rgba(0, 240, 255, 0.15); border: 1px solid #00F0FF; color: #00F0FF; font-size: 11px; font-weight: 800; text-transform: uppercase; margin-bottom: 12px;">Добро пожаловать</div>
          <h2 style="font-size: 24px; font-weight: 900; color: #FFFFFF; margin-bottom: 8px;">Вселенная TIGames Studio</h2>
          <p style="color: #8B949E; font-size: 14px; line-height: 1.5; margin-bottom: 24px;">7 полноценных кибер-игр, работающих прямо в браузере твоего смартфона или ПК в 1 клик!</p>

          <div style="display: flex; flex-direction: column; gap: 14px; text-align: left; margin-bottom: 26px;">
            <div style="display: flex; align-items: flex-start; gap: 12px; background: rgba(255, 255, 255, 0.04); padding: 12px 14px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.06);">
              <span style="font-size: 22px;">⚡</span>
              <div>
                <div style="font-size: 14px; font-weight: 800; color: #00F0FF;">1. Instant Play без скачивания</div>
                <div style="font-size: 12px; color: #8B949E;">Нажми «Играть онлайн» на любой карточке — игра запустится моментально прямо на странице.</div>
              </div>
            </div>

            <div style="display: flex; align-items: flex-start; gap: 12px; background: rgba(255, 255, 255, 0.04); padding: 12px 14px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.06);">
              <span style="font-size: 22px;">📲</span>
              <div>
                <div style="font-size: 14px; font-weight: 800; color: #00FF88;">2. Установи PWA на телефон</div>
                <div style="font-size: 12px; color: #8B949E;">Нажми кнопку «Установить на телефон» или отсканируй QR-код для игры в оффлайн-режиме.</div>
              </div>
            </div>

            <div style="display: flex; align-items: flex-start; gap: 12px; background: rgba(255, 255, 255, 0.04); padding: 12px 14px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.06);">
              <span style="font-size: 22px;">🎁</span>
              <div>
                <div style="font-size: 14px; font-weight: 800; color: #FFB300;">3. Забирай ежедневные награды</div>
                <div style="font-size: 12px; color: #8B949E;">Заходи каждый день, собирай опыт, прокачивай свой стрик и разблокируй все 8 трофеев!</div>
              </div>
            </div>
          </div>

          <button onclick="window.TIGamesOnboarding.close()" style="background: linear-gradient(135deg, #00F0FF 0%, #00FF88 100%); color: #000; border: none; padding: 14px 32px; border-radius: 14px; font-size: 15px; font-weight: 900; cursor: pointer; width: 100%; transition: transform 0.15s; letter-spacing: 0.5px;">ПОГНАЛИ ИГРАТЬ! 🚀</button>
        </div>
      `;
      document.body.appendChild(modal);
    }
  }

  function closeOnboarding() {
    localStorage.setItem(STORAGE_KEY, 'true');
    const modal = document.getElementById('onboardingModal');
    if (modal) {
      if (window.TIGamesAudio) window.TIGamesAudio.playClick();
      modal.remove();
    }
  }

  window.TIGamesOnboarding = {
    show: showOnboardingModal,
    close: closeOnboarding
  };

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      showOnboardingModal(false);
    }, 400);
  });
})();

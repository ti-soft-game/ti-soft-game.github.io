// TIGames Share Booster & Cross-Device Mobile QR Launcher
(function() {
  function shareUrl() {
    const url = window.location.href;
    const shareData = {
      title: 'TIGames Universe — 7 Браузерных Игр Онлайн',
      text: '🎮 Играй в 7 крутых неоновых игр прямо в браузере без скачивания!',
      url: url
    };

    if (navigator.share) {
      navigator.share(shareData).catch(() => {});
    } else {
      navigator.clipboard.writeText(url).then(() => {
        alert('🔗 Ссылка на портал TIGames скопирована в буфер обмена!');
      }).catch(() => {
        prompt('Скопируйте ссылку для друзей:', url);
      });
    }
  }

  function showQrModal() {
    let modal = document.getElementById('qrModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'qrModal';
      modal.style.cssText = 'position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.85); z-index:999999; display:flex; align-items:center; justify-content:center; backdrop-filter:blur(8px);';
      
      const currentUrl = encodeURIComponent(window.location.href);
      const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${currentUrl}&margin=10`;

      modal.innerHTML = `
        <div style="background:#151C2C; border:1px solid rgba(0,240,255,0.4); border-radius:24px; padding:32px 24px; text-align:center; max-width:360px; width:90%; box-shadow:0 12px 40px rgba(0,240,255,0.2);">
          <div style="font-size:36px; margin-bottom:10px;">📱</div>
          <h3 style="color:#FFFFFF; font-size:20px; font-weight:800; margin-bottom:6px;">Играй на телефоне</h3>
          <p style="color:#8B949E; font-size:13px; margin-bottom:20px;">Наведи камеру смартфона на QR-код для мгновенного запуска без скачивания!</p>
          <div style="background:#FFFFFF; padding:12px; border-radius:16px; display:inline-block; margin-bottom:20px;">
            <img src="${qrApiUrl}" alt="QR Code" style="width:200px; height:200px; display:block;" onerror="this.onerror=null; this.src='icons/icon-192.png';">
          </div>
          <div>
            <button onclick="document.getElementById('qrModal').remove()" style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:#FFFFFF; padding:10px 24px; border-radius:12px; font-weight:700; cursor:pointer;">Закрыть</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }
  }

  window.TIGamesShare = {
    share: shareUrl,
    showQr: showQrModal
  };
})();

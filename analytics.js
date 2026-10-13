// TIGames Omnichannel Analytics & Referral Tracker
(function() {
  const urlParams = new URLSearchParams(window.location.search);
  let ref = urlParams.get('ref') || urlParams.get('utm_source') || sessionStorage.getItem('tigames_ref') || 'direct';
  sessionStorage.setItem('tigames_ref', ref);

  function sendEvent(eventType, payload = {}) {
    const data = {
      type: eventType,
      ref: ref,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent.substring(0, 80),
      ...payload
    };

    // Try posting to local/live backend
    try {
      fetch('/api/event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).catch(() => {
        // Fallback: save to local aggregate for offline stats
        recordLocalStats(eventType, data);
      });
    } catch (e) {
      recordLocalStats(eventType, data);
    }
  }

  function recordLocalStats(type, data) {
    try {
      const stats = JSON.parse(localStorage.getItem('tigames_local_stats') || '{"views":0,"plays":{},"downloads":{}}');
      if (type === 'pageview') {
        stats.views = (stats.views || 0) + 1;
      } else if (type === 'play_game') {
        stats.plays[data.game] = (stats.plays[data.game] || 0) + 1;
      } else if (type === 'download_apk') {
        stats.downloads[data.apk] = (stats.downloads[data.apk] || 0) + 1;
      }
      localStorage.setItem('tigames_local_stats', JSON.stringify(stats));
    } catch(e) {}
  }

  // Auto track pageview
  sendEvent('pageview', { path: window.location.pathname });

  // Expose helper globally
  window.TIGamesAnalytics = {
    trackPlay: function(gameName) {
      sendEvent('play_game', { game: gameName });
    },
    trackDownload: function(apkName) {
      sendEvent('download_apk', { apk: apkName });
    }
  };

  // Auto attach click handlers to APK download buttons
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[download]').forEach(el => {
      el.addEventListener('click', () => {
        const apk = el.getAttribute('href').split('/').pop();
        window.TIGamesAnalytics.trackDownload(apk);
      });
    });
  });
})();

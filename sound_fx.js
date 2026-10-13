// TIGames Sound FX Engine (Synthesized purely via Web Audio API)
(function() {
  let audioCtx = null;
  let isSoundEnabled = localStorage.getItem('tigames_sound_enabled') !== 'false';

  function getAudioContext() {
    if (!audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioCtx = new AudioCtx();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playTone(freq, type, duration, gainStart, gainEnd) {
    if (!isSoundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type || 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(gainStart || 0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(gainEnd || 0.001, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch(e) {}
  }

  window.TIGamesAudio = {
    isEnabled: function() { return isSoundEnabled; },
    toggle: function() {
      isSoundEnabled = !isSoundEnabled;
      localStorage.setItem('tigames_sound_enabled', isSoundEnabled ? 'true' : 'false');
      if (isSoundEnabled) {
        this.playClick();
      }
      return isSoundEnabled;
    },
    playClick: function() {
      if (!isSoundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } catch(e) {}
    },
    playHover: function() {
      if (!isSoundEnabled) return;
      playTone(520, 'sine', 0.04, 0.03, 0.001);
    },
    playLaunch: function() {
      if (!isSoundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1100, ctx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } catch(e) {}
    },
    playReward: function() {
      if (!isSoundEnabled) return;
      try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0.12, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.2);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.2);
        });
      } catch(e) {}
    }
  };

  // Auto attach hover / click sound to buttons
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button, .btn, .platform-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        window.TIGamesAudio.playClick();
      });
      btn.addEventListener('mouseenter', () => {
        window.TIGamesAudio.playHover();
      });
    });
  });
})();

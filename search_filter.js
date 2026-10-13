// TIGames Real-Time Game Search & Category Filtering
(function() {
  function initSearchAndFilter() {
    const searchInput = document.getElementById('game-search-input');
    const filterChips = document.querySelectorAll('.filter-chip');
    const cards = document.querySelectorAll('.grid .card');
    const counterEl = document.getElementById('games-count-label');

    let currentCategory = 'all';
    let searchQuery = '';

    function applyFilters() {
      let visibleCount = 0;
      const q = searchQuery.toLowerCase().trim();

      cards.forEach(card => {
        const title = (card.querySelector('h2')?.innerText || '').toLowerCase();
        const desc = (card.querySelector('p.desc')?.innerText || '').toLowerCase();
        const tag = (card.querySelector('.tag')?.innerText || '').toLowerCase();
        const category = card.getAttribute('data-category') || 'all';

        const matchesCategory = (currentCategory === 'all') || (category === currentCategory);
        const matchesSearch = !q || title.includes(q) || desc.includes(q) || tag.includes(q);

        if (matchesCategory && matchesSearch) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (counterEl) {
        counterEl.innerText = `Показано игр: ${visibleCount} из ${cards.length}`;
      }
    }

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        applyFilters();
      });
    }

    filterChips.forEach(chip => {
      chip.addEventListener('click', () => {
        if (window.TIGamesAudio) window.TIGamesAudio.playClick();
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentCategory = chip.getAttribute('data-filter') || 'all';
        applyFilters();
      });
    });

    applyFilters();
  }

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initSearchAndFilter, 100);
  });
})();

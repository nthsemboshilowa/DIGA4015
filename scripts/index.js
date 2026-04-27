   // Theme toggle
    const toggle = document.getElementById('themeToggle');
    const body = document.body;
    const stored = localStorage.getItem('theme') || 'light';
    if (stored === 'dark') { body.dataset.theme = 'dark'; toggle.setAttribute('aria-checked', 'true'); }

    function applyTheme(dark) {
      body.dataset.theme = dark ? 'dark' : '';
      toggle.setAttribute('aria-checked', String(dark));
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    }

    toggle.addEventListener('click', () => applyTheme(body.dataset.theme !== 'dark'));
    document.getElementById('themeIcon').addEventListener('click', () => applyTheme(body.dataset.theme !== 'dark'));

    // Nav active state
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Card keyboard access
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') card.click(); });
    });
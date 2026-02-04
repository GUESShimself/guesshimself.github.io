// Theme Lab (deferred) — Konami unlock + accessible theme picker
(function () {
  'use strict';

  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let kidx = 0;
  const STORAGE_KEY = 'theme';
  const UNLOCK_KEY = 'themeLabUnlocked';

  function isEditable(el) {
    return !el ? false : (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
  }

  function applyTheme(name) {
    if (typeof window.setTheme === 'function') {
      try {
        if (!name || name === 'default') {
          // set to system briefly to update label/UI, then clear storage so default truly means no stored preference
          window.setTheme('system');
          localStorage.removeItem(STORAGE_KEY);
        } else {
          window.setTheme(name);
        }
      } catch (e) { fallbackApply(name); }
    } else {
      if (!name || name === 'default') fallbackApply(null); else fallbackApply(name);
    }
  }

  function fallbackApply(name) {
    if (!name || name === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', name);
    }
  }

  function persistTheme(name) {
    if (!name || name === 'default') {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, name);
    }
  }

  function loadPersistedTheme() {
    return localStorage.getItem(STORAGE_KEY) || null;
  }

  function ensureUI() {
    if (document.getElementById('theme-lab')) return;

    const root = document.createElement('div');
    root.id = 'theme-lab';
    root.setAttribute('hidden', '');

    const button = document.createElement('button');
    button.id = 'theme-lab-button';
    button.setAttribute('aria-haspopup', 'menu');
    button.setAttribute('aria-expanded', 'false');
    button.textContent = 'Theme';

    const menu = document.createElement('div');
    menu.id = 'theme-lab-menu';
    menu.setAttribute('role', 'menu');
    menu.setAttribute('hidden', '');

    const themes = [
      {id: 'default', label: 'Default'},
      {id: 'brutalist', label: 'Brutalist'},
      {id: 'terminal', label: 'Terminal'},
      {id: 'print', label: 'Print'},
      {id: 'y2k', label: 'Y2K'}
    ];

    themes.forEach(t => {
      const btn = document.createElement('button');
      btn.setAttribute('role', 'menuitem');
      btn.dataset.theme = t.id;
      btn.textContent = t.label;
      btn.addEventListener('click', () => {
        applyTheme(t.id === 'default' ? null : t.id);
        persistTheme(t.id);
        closeMenu();
      });
      menu.appendChild(btn);
    });

    const hr = document.createElement('hr');
    menu.appendChild(hr);

    const hide = document.createElement('button');
    hide.setAttribute('role', 'menuitem');
    hide.dataset.action = 'hide';
    hide.textContent = 'Hide Theme Lab';
    hide.addEventListener('click', () => {
      localStorage.removeItem(UNLOCK_KEY);
      hideUI();
    });
    menu.appendChild(hide);

    root.appendChild(button);
    root.appendChild(menu);
    document.body.appendChild(root);

    // Handlers
    function openMenu() {
      menu.hidden = false;
      button.setAttribute('aria-expanded', 'true');
      // focus first item
      const first = menu.querySelector('button[role="menuitem"]');
      if (first) first.focus();
    }

    function closeMenu() {
      menu.hidden = true;
      button.setAttribute('aria-expanded', 'false');
      button.focus();
    }

    function toggleMenu() {
      if (menu.hidden) openMenu(); else closeMenu();
    }

    function onDocClick(e) {
      if (!root.contains(e.target)) closeMenu();
    }

    function onKey(e) {
      if (e.key === 'Escape') {
        if (!menu.hidden) { closeMenu(); e.stopPropagation(); }
      }
    }

    button.addEventListener('click', toggleMenu);
    button.addEventListener('keydown', (e) => { if (e.key === 'ArrowDown') { e.preventDefault(); openMenu(); } });
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);

    // show UI if unlocked flag present
    root.removeAttribute('hidden');
  }

  function hideUI() {
    const el = document.getElementById('theme-lab');
    if (el) el.hidden = true;
  }

  function unlock() {
    localStorage.setItem(UNLOCK_KEY, '1');
    ensureUI();
  }

  function keyHandler(e) {
    const active = document.activeElement;
    if (isEditable(active)) return;
    let k = e.key;
    // normalize single-character keys to lowercase for comparison
    if (k.length === 1) k = k.toLowerCase();
    const expected = KONAMI[kidx].length === 1 ? KONAMI[kidx] : KONAMI[kidx];
    if (k === expected) {
      kidx++;
      if (kidx === KONAMI.length) { unlock(); kidx = 0; }
    } else {
      kidx = (k === KONAMI[0]) ? 1 : 0;
    }
  }

  // Init: apply persisted theme if present
  (function init() {
    const stored = loadPersistedTheme();
    if (stored) applyTheme(stored);

    // If unlocked previously, ensure UI is present
    if (localStorage.getItem(UNLOCK_KEY)) ensureUI();

    window.addEventListener('keydown', keyHandler, false);
  })();

})();

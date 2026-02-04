// Theme Lab — Konami unlock + skin selector + menu integration
// Integrates with the #theme-toggle button to provide locked (cycle) and unlocked (menu) modes.

(function () {
  'use strict';

  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let kidx = 0;
  const SKIN_KEY = 'skin';
  const APPEARANCE_KEY = 'appearance';
  const UNLOCK_KEY = 'themeLabUnlocked';
  const LEGACY_THEME_KEY = 'theme';

  const SKINS = [
    { id: 'default', label: 'Default' },
    { id: 'brutalist', label: 'Brutalist' },
    { id: 'terminal', label: 'Terminal' },
    { id: 'print', label: 'Print' },
    { id: 'y2k', label: 'Y2K' }
  ];

  const APPEARANCES = [
    { id: 'system', label: 'System' },
    { id: 'light', label: 'Light' },
    { id: 'dark', label: 'Dark' }
  ];

  function isEditable(el) {
    return !el ? false : (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
  }

  function applySkin(skinId) {
    var link = document.getElementById('skin-stylesheet');
    if (!link) return;
    if (!skinId || skinId === 'default') {
      link.disabled = true;
      link.href = '';
    } else {
      link.href = 'css/skins/' + skinId + '.css';
      link.disabled = false;
    }
  }

  function persistSkin(skinId) {
    if (!skinId || skinId === 'default') {
      localStorage.removeItem(SKIN_KEY);
    } else {
      localStorage.setItem(SKIN_KEY, skinId);
    }
  }

  function loadPersistedSkin() {
    return localStorage.getItem(SKIN_KEY) || 'default';
  }

  function getSkin() {
    return loadPersistedSkin();
  }

  function setSkin(skinId) {
    persistSkin(skinId);
    applySkin(skinId);
  }

  function isUnlocked() {
    return localStorage.getItem(UNLOCK_KEY) === 'true';
  }

  function setUnlocked(unlocked) {
    if (unlocked) {
      localStorage.setItem(UNLOCK_KEY, 'true');
    } else {
      localStorage.removeItem(UNLOCK_KEY);
    }
  }

  // Migration: if old "theme" key has a skin value, migrate it
  function migrateOldSkinIfNeeded() {
    var legacy = localStorage.getItem(LEGACY_THEME_KEY);
    if (legacy && SKINS.some(s => s.id === legacy)) {
      localStorage.setItem(SKIN_KEY, legacy);
      localStorage.removeItem(LEGACY_THEME_KEY);
    }
  }

  function buildMenu() {
    var menu = document.createElement('div');
    menu.id = 'theme-menu';
    menu.className = 'theme-menu';
    menu.setAttribute('role', 'menu');
    menu.hidden = true;

    // Appearance group (always shown)
    var appearanceGroup = document.createElement('div');
    appearanceGroup.className = 'menu-group';
    var appearanceLabel = document.createElement('div');
    appearanceLabel.className = 'menu-label';
    appearanceLabel.textContent = 'Appearance';
    appearanceGroup.appendChild(appearanceLabel);

    APPEARANCES.forEach(function(app) {
      var btn = document.createElement('button');
      btn.setAttribute('role', 'menuitem');
      btn.className = 'menu-item';
      btn.dataset.appearance = app.id;
      btn.textContent = app.label;
      btn.addEventListener('click', function() {
        window.setAppearance(app.id);
        closeMenu();
      });
      appearanceGroup.appendChild(btn);
    });

    menu.appendChild(appearanceGroup);

    // Skins group (only shown if unlocked)
    var skinsGroup = document.createElement('div');
    skinsGroup.className = 'menu-group theme-lab-only';
    skinsGroup.hidden = !isUnlocked();

    var skinsLabel = document.createElement('div');
    skinsLabel.className = 'menu-label';
    skinsLabel.textContent = 'Skins';
    skinsGroup.appendChild(skinsLabel);

    SKINS.forEach(function(skin) {
      var btn = document.createElement('button');
      btn.setAttribute('role', 'menuitem');
      btn.className = 'menu-item';
      btn.dataset.skin = skin.id;
      btn.textContent = skin.label;
      btn.addEventListener('click', function() {
        setSkin(skin.id);
        closeMenu();
      });
      skinsGroup.appendChild(btn);
    });

    var hr = document.createElement('hr');
    skinsGroup.appendChild(hr);

    var hideLab = document.createElement('button');
    hideLab.setAttribute('role', 'menuitem');
    hideLab.className = 'menu-item';
    hideLab.dataset.action = 'hide-lab';
    hideLab.textContent = 'Hide Theme Lab';
    hideLab.addEventListener('click', function() {
      setUnlocked(false);
      skinsGroup.hidden = true;
      closeMenu();
      rebindButton();
    });
    skinsGroup.appendChild(hideLab);

    menu.appendChild(skinsGroup);

    return menu;
  }

  var button = null;
  var menu = null;
  var isMenuOpen = false;

  function openMenu() {
    if (!menu) return;
    menu.hidden = false;
    isMenuOpen = true;
    button.setAttribute('aria-expanded', 'true');
    var firstItem = menu.querySelector('[role="menuitem"]');
    if (firstItem) firstItem.focus();
  }

  function closeMenu() {
    if (!menu) return;
    menu.hidden = true;
    isMenuOpen = false;
    button.setAttribute('aria-expanded', 'false');
    button.focus();
  }

  function toggleMenu() {
    if (isMenuOpen) closeMenu(); else openMenu();
  }

  function onDocClick(e) {
    if (isMenuOpen && button && menu && !button.contains(e.target) && !menu.contains(e.target)) {
      closeMenu();
    }
  }

  function onKeyDown(e) {
    if (e.key === 'Escape') {
      if (isMenuOpen) {
        closeMenu();
        e.stopPropagation();
      }
    }
  }

  function rebindButton() {
    if (!button) return;
    button.removeEventListener('click', toggleMenu);
    button.removeEventListener('click', cycleBehavior);

    if (isUnlocked()) {
      button.addEventListener('click', toggleMenu);
    } else {
      button.addEventListener('click', cycleBehavior);
    }
  }

  function cycleBehavior() {
    if (typeof window.cycleAppearance === 'function') {
      window.cycleAppearance();
    }
  }

  function ensureMenuUI() {
    button = document.getElementById('theme-toggle');
    if (!button) return;

    // Check if menu already exists (in case script runs twice)
    menu = document.getElementById('theme-menu');
    if (!menu) {
      menu = buildMenu();
      button.parentNode.appendChild(menu);
    }

    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKeyDown);

    rebindButton();
  }

  function keyHandler(e) {
    var active = document.activeElement;
    if (isEditable(active)) return;

    let k = e.key;
    // Normalize single-character keys to lowercase
    if (k.length === 1) k = k.toLowerCase();

    if (k === KONAMI[kidx]) {
      kidx++;
      if (kidx === KONAMI.length) {
        unlock();
        kidx = 0;
      }
    } else {
      kidx = (k === KONAMI[0]) ? 1 : 0;
    }
  }

  function unlock() {
    setUnlocked(true);
    if (menu) {
      var skinsGroup = menu.querySelector('.theme-lab-only');
      if (skinsGroup) skinsGroup.hidden = false;
    }
    rebindButton();
    openMenu();
  }

  // ── Init ──

  (function init() {
    migrateOldSkinIfNeeded();

    var skin = loadPersistedSkin();
    applySkin(skin);

    ensureMenuUI();

    window.addEventListener('keydown', keyHandler, false);
  })();

  // ── Expose API ──

  window.setSkin = setSkin;
  window.getSkin = getSkin;
  window.setUnlocked = setUnlocked;
  window.isUnlocked = isUnlocked;

})();

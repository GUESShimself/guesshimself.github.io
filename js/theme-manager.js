// Theme Manager — Unified appearance + skin controller
// Loaded in <head> without defer to apply attributes before first paint (FOUC prevention)

(function() {
  'use strict';

  // ── Configuration ────────────────────────────────────────────

  var STORAGE_KEY = 'theme';
  var STORAGE_VERSION = 1;
  var APPEARANCES = ['system', 'light', 'dark'];
  var SKINS = ['default', 'brutalist', 'terminal', 'print', 'y2k'];
  var SKIN_HREF = {
    brutalist: 'css/skins/brutalist.css',
    terminal: 'css/skins/terminal.css',
    print: 'css/skins/print.css',
    y2k: 'css/skins/y2k.css'
  };

  var DEFAULT_STATE = {
    v: STORAGE_VERSION,
    appearance: 'system',
    skin: 'default',
    unlocked: false
  };

  // ── State ────────────────────────────────────────────────────

  var state = {
    appearance: 'system',
    skin: 'default',
    unlocked: false
  };

  var root = document.documentElement;
  var skinLink = null;
  var button = null;
  var menu = null;
  var isMenuOpen = false;

  // ── Storage ──────────────────────────────────────────────────

  function loadState() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        var parsed = JSON.parse(stored);
        if (parsed && parsed.v === STORAGE_VERSION) {
          state.appearance = APPEARANCES.indexOf(parsed.appearance) !== -1 ? parsed.appearance : 'system';
          state.skin = SKINS.indexOf(parsed.skin) !== -1 ? parsed.skin : 'default';
          state.unlocked = parsed.unlocked === true;
          return true;
        }
      }
    } catch (e) {
      // Invalid JSON, will use defaults
    }
    return false;
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      v: STORAGE_VERSION,
      appearance: state.appearance,
      skin: state.skin,
      unlocked: state.unlocked
    }));
  }

  // ── Migration from old localStorage keys ─────────────────────

  function migrateIfNeeded() {
    var oldAppearance = localStorage.getItem('appearance');
    var oldSkin = localStorage.getItem('skin');
    var oldUnlocked = localStorage.getItem('themeLabUnlocked');
    var oldTheme = localStorage.getItem('theme');

    // If new format already exists and is valid, skip migration
    if (loadState()) {
      return;
    }

    var migrated = false;

    // Migrate appearance
    if (oldAppearance && APPEARANCES.indexOf(oldAppearance) !== -1) {
      state.appearance = oldAppearance;
      migrated = true;
    }

    // Migrate skin
    if (oldSkin && SKINS.indexOf(oldSkin) !== -1) {
      state.skin = oldSkin;
      migrated = true;
    }

    // Migrate unlocked
    if (oldUnlocked === 'true') {
      state.unlocked = true;
      migrated = true;
    }

    // Legacy 'theme' key could be appearance or skin
    if (oldTheme) {
      if (APPEARANCES.indexOf(oldTheme) !== -1) {
        state.appearance = oldTheme;
        migrated = true;
      } else if (SKINS.indexOf(oldTheme) !== -1) {
        state.skin = oldTheme;
        migrated = true;
      }
    }

    if (migrated) {
      saveState();
      // Clean up old keys
      localStorage.removeItem('appearance');
      localStorage.removeItem('skin');
      localStorage.removeItem('themeLabUnlocked');
      if (oldTheme && (APPEARANCES.indexOf(oldTheme) !== -1 || SKINS.indexOf(oldTheme) !== -1)) {
        // Only remove if it was a valid value we migrated
        // The new format uses the same key 'theme' but with JSON
      }
    }
  }

  // ── Apply to DOM ─────────────────────────────────────────────

  function applyAppearance() {
    if (state.appearance === 'system') {
      root.removeAttribute('data-appearance');
    } else {
      root.setAttribute('data-appearance', state.appearance);
    }
  }

  function applySkin() {
    root.setAttribute('data-skin', state.skin);

    if (!skinLink) {
      skinLink = document.getElementById('skin-stylesheet');
    }
    if (!skinLink) return;

    if (state.skin === 'default') {
      skinLink.disabled = true;
      skinLink.removeAttribute('href');
    } else {
      var href = SKIN_HREF[state.skin];
      if (href) {
        // Only update if href changed
        if (skinLink.getAttribute('href') !== href) {
          skinLink.setAttribute('href', href);
          skinLink.disabled = false;
        } else if (skinLink.disabled) {
          skinLink.disabled = false;
        }
      }
    }
  }

  function applyAll() {
    applyAppearance();
    applySkin();
    updateButtonLabel();
  }

  // ── Button Label ─────────────────────────────────────────────

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function updateButtonLabel() {
    if (!button) {
      button = document.getElementById('theme-toggle');
    }
    if (!button) return;

    var label = 'Appearance: ' + capitalize(state.appearance);

    // Add skin name if unlocked and not default
    if (state.unlocked && state.skin !== 'default') {
      label += ' \u00B7 ' + capitalize(state.skin);
    }

    button.textContent = label;
  }

  // ── Public API ───────────────────────────────────────────────

  function getState() {
    return {
      appearance: state.appearance,
      skin: state.skin,
      unlocked: state.unlocked
    };
  }

  function getAppearance() {
    return state.appearance;
  }

  function setAppearance(appearance) {
    if (APPEARANCES.indexOf(appearance) === -1) return;
    state.appearance = appearance;
    saveState();
    applyAppearance();
    updateButtonLabel();
    updateMenuSelection();
  }

  function cycleAppearance() {
    var idx = APPEARANCES.indexOf(state.appearance);
    var next = APPEARANCES[(idx + 1) % APPEARANCES.length];
    setAppearance(next);
  }

  function getSkin() {
    return state.skin;
  }

  function setSkin(skin) {
    if (SKINS.indexOf(skin) === -1) return;
    state.skin = skin;
    saveState();
    applySkin();
    updateButtonLabel();
    updateMenuSelection();
  }

  function isUnlocked() {
    return state.unlocked;
  }

  function setUnlocked(unlocked) {
    state.unlocked = unlocked;
    saveState();
    updateButtonLabel();
    renderMenu();
  }

  // ── Menu ─────────────────────────────────────────────────────

  function renderMenu() {
    if (!menu) {
      menu = document.getElementById('theme-menu');
    }
    if (!menu) return;

    menu.innerHTML = '';

    // Appearance group
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
      btn.dataset.appearance = app;
      btn.textContent = capitalize(app);
      if (state.appearance === app) {
        btn.setAttribute('aria-current', 'true');
      }
      btn.addEventListener('click', function() {
        setAppearance(app);
        closeMenu();
      });
      appearanceGroup.appendChild(btn);
    });

    menu.appendChild(appearanceGroup);

    // Skins group (only if unlocked)
    if (state.unlocked) {
      var skinsGroup = document.createElement('div');
      skinsGroup.className = 'menu-group';

      var skinsLabel = document.createElement('div');
      skinsLabel.className = 'menu-label';
      skinsLabel.textContent = 'Skins';
      skinsGroup.appendChild(skinsLabel);

      SKINS.forEach(function(skin) {
        var btn = document.createElement('button');
        btn.setAttribute('role', 'menuitem');
        btn.className = 'menu-item';
        btn.dataset.skin = skin;
        btn.textContent = capitalize(skin);
        if (state.skin === skin) {
          btn.setAttribute('aria-current', 'true');
        }
        btn.addEventListener('click', function() {
          setSkin(skin);
          closeMenu();
        });
        skinsGroup.appendChild(btn);
      });

      var hr = document.createElement('hr');
      skinsGroup.appendChild(hr);

      var hideBtn = document.createElement('button');
      hideBtn.setAttribute('role', 'menuitem');
      hideBtn.className = 'menu-item';
      hideBtn.textContent = 'Hide Theme Lab';
      hideBtn.addEventListener('click', function() {
        setUnlocked(false);
        closeMenu();
      });
      skinsGroup.appendChild(hideBtn);

      menu.appendChild(skinsGroup);
    }
  }

  function updateMenuSelection() {
    if (!menu) return;

    // Update appearance selection
    var appearanceItems = menu.querySelectorAll('[data-appearance]');
    appearanceItems.forEach(function(item) {
      if (item.dataset.appearance === state.appearance) {
        item.setAttribute('aria-current', 'true');
      } else {
        item.removeAttribute('aria-current');
      }
    });

    // Update skin selection
    var skinItems = menu.querySelectorAll('[data-skin]');
    skinItems.forEach(function(item) {
      if (item.dataset.skin === state.skin) {
        item.setAttribute('aria-current', 'true');
      } else {
        item.removeAttribute('aria-current');
      }
    });
  }

  function openMenu() {
    if (!menu) return;
    renderMenu();
    menu.hidden = false;
    isMenuOpen = true;
    if (button) {
      button.setAttribute('aria-expanded', 'true');
    }
    // Focus first item
    var firstItem = menu.querySelector('[role="menuitem"]');
    if (firstItem) firstItem.focus();
  }

  function closeMenu() {
    if (!menu) return;
    menu.hidden = true;
    isMenuOpen = false;
    if (button) {
      button.setAttribute('aria-expanded', 'false');
      button.focus();
    }
  }

  function toggleMenu() {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function handleButtonClick() {
    if (state.unlocked) {
      toggleMenu();
    } else {
      cycleAppearance();
    }
  }

  function handleDocumentClick(e) {
    if (isMenuOpen && button && menu) {
      if (!button.contains(e.target) && !menu.contains(e.target)) {
        closeMenu();
      }
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape' && isMenuOpen) {
      closeMenu();
      e.stopPropagation();
    }
  }

  // ── Konami Unlock Handler ────────────────────────────────────

  function handleKonamiUnlock() {
    setUnlocked(true);
    openMenu();
  }

  // ── Init ─────────────────────────────────────────────────────

  // Run migration and load state immediately (before DOM ready)
  migrateIfNeeded();
  if (!loadState()) {
    // Use defaults, already set
  }

  // Apply attributes immediately to prevent FOUC
  applyAppearance();
  applySkin();

  // Wire up UI after DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    button = document.getElementById('theme-toggle');
    menu = document.getElementById('theme-menu');
    skinLink = document.getElementById('skin-stylesheet');

    if (button) {
      updateButtonLabel();
      button.addEventListener('click', handleButtonClick);
    }

    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', handleKeyDown);

    // Listen for Konami unlock
    window.addEventListener('konami-unlock', handleKonamiUnlock);

    // Render menu (hidden by default)
    renderMenu();
  });

  // ── Expose Public API ────────────────────────────────────────

  window.ThemeManager = {
    getState: getState,
    getAppearance: getAppearance,
    setAppearance: setAppearance,
    cycleAppearance: cycleAppearance,
    getSkin: getSkin,
    setSkin: setSkin,
    isUnlocked: isUnlocked,
    setUnlocked: setUnlocked,
    APPEARANCES: APPEARANCES,
    SKINS: SKINS
  };

})();

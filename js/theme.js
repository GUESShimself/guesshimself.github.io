// Theme System — appearance mode (system/light/dark), localStorage persistence
// Loaded in <head> so data-theme is set before first paint (no flash).
// Skins are handled separately by theme-lab.js

(function() {
  'use strict';

  var APPEARANCE_KEY = 'appearance';
  var LEGACY_KEY = 'theme';  // for migration
  var CYCLE_ORDER = ['system', 'light', 'dark'];
  var root = document.documentElement;

  // ── Migration: handle old "theme" key ──────────────────────

  function migrateIfNeeded() {
    var legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy) {
      // If it's an appearance mode, migrate it
      if (CYCLE_ORDER.indexOf(legacy) !== -1) {
        localStorage.setItem(APPEARANCE_KEY, legacy);
      }
      localStorage.removeItem(LEGACY_KEY);
    }
  }

  // ── Read & Apply ──────────────────────────────────────────

  function getStored() {
    return localStorage.getItem(APPEARANCE_KEY) || 'system';
  }

  function applyAppearance(appearance) {
    if (appearance === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', appearance);
    }
    updateLabel(appearance);
  }

  function updateLabel(appearance) {
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.textContent = 'Theme: ' + appearance.charAt(0).toUpperCase() + appearance.slice(1);
    }
  }

  // ── Public API ─────────────────────────────────────────

  function setAppearance(appearance) {
    localStorage.setItem(APPEARANCE_KEY, appearance);
    applyAppearance(appearance);
  }

  function getAppearance() {
    return getStored();
  }

  function cycleAppearance() {
    var current = getStored();
    var idx = CYCLE_ORDER.indexOf(current);
    var next = CYCLE_ORDER[(idx + 1) % CYCLE_ORDER.length];
    setAppearance(next);
  }

  // For backward compatibility during transition
  function setTheme(theme) {
    setAppearance(theme);
  }

  function cycleTheme() {
    cycleAppearance();
  }

  // ── Init: apply stored appearance immediately (before DOM ready) ──

  migrateIfNeeded();
  applyAppearance(getStored());

  // ── Wire toggle button (after DOM is available) ──────────────

  document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      updateLabel(getStored());
    }

    var control = document.querySelector('.theme-control');
    if (!control) {
      return;
    }

    var threshold = 80;

    function syncDimState() {
      if (control.classList.contains('is-interacting')) {
        control.classList.remove('is-dimmed');
        return;
      }

      if (window.scrollY > threshold) {
        control.classList.add('is-dimmed');
      } else {
        control.classList.remove('is-dimmed');
      }
    }

    function setInteracting(isInteracting) {
      if (isInteracting) {
        control.classList.add('is-interacting');
      } else {
        control.classList.remove('is-interacting');
      }
      syncDimState();
    }

    function onScroll() {
      if (!control.classList.contains('is-interacting')) {
        syncDimState();
      }
    }

    control.addEventListener('pointerenter', function() {
      setInteracting(true);
    });
    control.addEventListener('pointerleave', function() {
      setInteracting(false);
    });
    control.addEventListener('focusin', function() {
      setInteracting(true);
    });
    control.addEventListener('focusout', function() {
      setInteracting(false);
    });
    control.addEventListener('touchstart', function() {
      setInteracting(true);
    }, { passive: true });
    control.addEventListener('touchend', function() {
      setInteracting(false);
    });
    control.addEventListener('touchcancel', function() {
      setInteracting(false);
    });

    window.addEventListener('scroll', onScroll, { passive: true });

    syncDimState();
  });

  // ── Expose for programmatic use ────────────────────────────

  window.setAppearance = setAppearance;
  window.getAppearance = getAppearance;
  window.cycleAppearance = cycleAppearance;
  // Backward compat
  window.setTheme = setTheme;
  window.cycleTheme = cycleTheme;

})();

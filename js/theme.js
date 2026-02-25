// Theme System — system default, manual override, localStorage persistence
// Loaded in <head> so data-theme is set before first paint (no flash).

(function() {
  'use strict';

  var STORAGE_KEY = 'theme';
  var CYCLE_ORDER = ['system', 'light', 'dark'];
  var root = document.documentElement;

  // ── Read & Apply ──────────────────────────────────────────────

  function getStored() {
    return localStorage.getItem(STORAGE_KEY) || 'system';
  }

  function applyTheme(theme) {
    if (theme === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
    updateLabel(theme);
  }

  function updateLabel(theme) {
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.textContent = 'Theme: ' + theme.charAt(0).toUpperCase() + theme.slice(1);
    }
  }

  // ── Public API ────────────────────────────────────────────────

  function setTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
    applyTheme(theme);
  }

  function cycleTheme() {
    var current = getStored();
    var idx = CYCLE_ORDER.indexOf(current);
    var next = CYCLE_ORDER[(idx + 1) % CYCLE_ORDER.length];
    setTheme(next);
  }

  // ── Init: apply stored theme immediately (before DOM ready) ──

  applyTheme(getStored());

  // ── Wire toggle button (after DOM is available) ──────────────

  document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', cycleTheme);
      updateLabel(getStored());
    }

    var control = document.querySelector('.utility-bar .theme-control') || document.querySelector('.theme-control');
    var navLink = document.querySelector('.utility-bar .top-nav-link') || document.querySelector('.top-nav-link');
    if (!control) {
      return;
    }

    var threshold = 80;

    function syncDimState() {
      if (control.classList.contains('is-interacting')) {
        control.classList.remove('is-dimmed');
        if (navLink) {
          navLink.classList.remove('is-dimmed');
        }
        return;
      }

      if (window.scrollY > threshold) {
        control.classList.add('is-dimmed');
        if (navLink) {
          navLink.classList.add('is-dimmed');
        }
      } else {
        control.classList.remove('is-dimmed');
        if (navLink) {
          navLink.classList.remove('is-dimmed');
        }
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

  // ── Expose for programmatic use ───────────────────────────────

  window.setTheme = setTheme;
  window.cycleTheme = cycleTheme;

})();

// Modulor skin toggle — φ button in bottom-right corner
(function () {
  'use strict';

  var KEY = 'skin';
  var SKIN = 'modulor';
  var root = document.documentElement;
  var btn = document.getElementById('modulor-toggle');
  if (!btn) return;

  var skinLink = null;

  function isActive() {
    return root.getAttribute('data-skin') === SKIN;
  }

  function loadStylesheet(callback) {
    if (skinLink) { callback(); return; }
    skinLink = document.createElement('link');
    skinLink.rel = 'stylesheet';
    skinLink.href = 'css/skins/modulor.css';
    skinLink.onload = callback;
    document.head.appendChild(skinLink);
  }

  function activate() {
    loadStylesheet(function () {
      root.setAttribute('data-skin', SKIN);
      localStorage.setItem(KEY, SKIN);
      btn.setAttribute('aria-pressed', 'true');
    });
  }

  function deactivate() {
    root.removeAttribute('data-skin');
    localStorage.removeItem(KEY);
    btn.setAttribute('aria-pressed', 'false');
  }

  // Init state (attribute may already be set by head script)
  btn.setAttribute('aria-pressed', isActive() ? 'true' : 'false');

  btn.addEventListener('click', function () {
    if (isActive()) { deactivate(); } else { activate(); }
  });
})();

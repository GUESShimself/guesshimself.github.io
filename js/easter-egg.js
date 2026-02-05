// Easter Egg — Konami code detection
// Dispatches 'konami-unlock' custom event when sequence is completed
// Loaded deferred, not critical for page render

(function() {
  'use strict';

  var KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  var idx = 0;

  function isEditable(el) {
    if (!el) return false;
    var tag = el.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || el.isContentEditable;
  }

  function handleKeyDown(e) {
    // Ignore when typing in form fields
    if (isEditable(document.activeElement)) return;

    // Normalize key (lowercase for letters)
    var key = e.key;
    if (key.length === 1) {
      key = key.toLowerCase();
    }

    if (key === KONAMI[idx]) {
      idx++;
      if (idx === KONAMI.length) {
        idx = 0;
        window.dispatchEvent(new CustomEvent('konami-unlock'));
      }
    } else {
      // Reset, but check if current key starts the sequence
      idx = (key === KONAMI[0]) ? 1 : 0;
    }
  }

  window.addEventListener('keydown', handleKeyDown, false);

})();

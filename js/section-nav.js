// Section Navigation — Scroll-spy for case study pages
// Progressive enhancement: links work without JS, this adds active state tracking.

(function() {
  'use strict';

  var nav = document.querySelector('.section-nav');
  if (!nav) return;

  var links = nav.querySelectorAll('a');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var activeLink = null;

  // Build ordered list of heading targets
  var headings = [];
  links.forEach(function(link) {
    var id = link.getAttribute('href').slice(1);
    var el = document.getElementById(id);
    if (el) headings.push({ id: id, el: el, link: link });
  });

  function setActive(link) {
    if (link === activeLink) return;
    if (activeLink) activeLink.classList.remove('is-active');
    link.classList.add('is-active');
    activeLink = link;
  }

  // Determine active section by scroll position (top-biased)
  function updateActiveFromScroll() {
    var viewportHeight = window.innerHeight;
    var threshold = viewportHeight * 0.25;
    var current = null;

    for (var i = 0; i < headings.length; i++) {
      var rect = headings[i].el.getBoundingClientRect();
      if (rect.top <= threshold) {
        current = headings[i];
      }
    }

    // If nothing passed the threshold, use the first section
    if (!current && headings.length) {
      current = headings[0];
    }

    if (current) setActive(current.link);
  }

  // Set initial active state
  updateActiveFromScroll();

  // Throttled scroll handler
  var ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateActiveFromScroll();
        ticking = false;
      });
    }
    ticking = true;
  });

  // Smooth scroll on click + immediate active state
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href').slice(1);
      var target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      setActive(this);
      target.scrollIntoView({
        behavior: reducedMotion ? 'auto' : 'smooth',
        block: 'start'
      });
      history.replaceState(null, '', '#' + targetId);
    });
  });

})();

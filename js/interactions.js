// Micro-Interactions — Progressive Enhancement
// Depends on: interactions styles in components.css
// Site remains fully functional without this file.

(function() {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // =============================================
  // A — Expansion Accordion (Project Cards)
  // =============================================

  document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.project-card');

    // Remove hidden attribute — grid animation handles visibility.
    // hidden is present as a no-JS fallback only.
    cards.forEach(function(card) {
      var content = card.querySelector('.expanded-content');
      if (content) {
        content.removeAttribute('hidden');
      }
    });

    // Toggle handlers
    cards.forEach(function(card) {
      var toggle = card.querySelector('.project-toggle');
      var collapseBtn = card.querySelector('.collapse-toggle');

      if (toggle) {
        toggle.addEventListener('click', function() {
          if (card.classList.contains('expanded')) {
            collapseCard(card);
          } else {
            // Accordion: collapse all others first
            cards.forEach(function(other) {
              if (other !== card && other.classList.contains('expanded')) {
                collapseCard(other);
              }
            });
            expandCard(card);
          }
        });
      }

      if (collapseBtn) {
        collapseBtn.addEventListener('click', function() {
          collapseCard(card);
        });
      }
    });
  });

  function expandCard(card) {
    var toggle = card.querySelector('.project-toggle');
    var projectId = card.dataset.projectId;

    card.classList.add('expanded');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'true');
    }
    history.replaceState(null, '', '#' + projectId);
  }

  function collapseCard(card) {
    var toggle = card.querySelector('.project-toggle');

    card.classList.remove('expanded');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
    }
  }

  // =============================================
  // B — Principle Anchors
  // =============================================

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.principle-anchor').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        var targetId = this.getAttribute('href').slice(1);
        var target = document.getElementById(targetId);
        if (!target) return;

        history.replaceState(null, '', '#' + targetId);

        // Only scroll if target is not already fully visible
        var rect = target.getBoundingClientRect();
        var inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (!inView) {
          target.scrollIntoView({
            behavior: reducedMotion ? 'auto' : 'smooth',
            block: 'start'
          });
        }
      });
    });
  });

  // =============================================
  // C — Scroll Emphasis (Principles)
  // =============================================

  document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.principles-list li');

    if (reducedMotion) {
      // Skip animation — reveal immediately
      items.forEach(function(item) {
        item.classList.add('in-view');
      });
      return;
    }

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // one-time reveal
        }
      });
    }, { rootMargin: '-33% 0px -33% 0px', threshold: 0 });

    items.forEach(function(item) {
      observer.observe(item);
    });
  });

})();

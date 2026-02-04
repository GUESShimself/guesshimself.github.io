// Minimal JavaScript Enhancement - Progressive Enhancement Only
// Site is fully functional without JavaScript

(function() {
  'use strict';

  // Smooth scroll for anchor links (if any are added)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      // Principle anchors are handled by interactions.js
      if (this.classList.contains('principle-anchor')) {
        return;
      }

      const targetId = this.getAttribute('href');

      // Don't prevent default for placeholder links like #resume
      if (targetId === '#' || targetId.length === 1) {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Future: Project card interaction handlers
  // Uncomment and implement when expanding project cards functionality
  /*
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    const projectId = card.dataset.projectId;

    // Option 1: In-place expansion
    // card.addEventListener('click', () => {
    //   card.classList.toggle('expanded');
    //   card.setAttribute('aria-expanded', card.classList.contains('expanded'));
    // });

    // Option 2: Navigate to detail page
    // card.addEventListener('click', () => {
    //   window.location.href = `/projects/${projectId}`;
    // });

    // Option 3: Open modal
    // card.addEventListener('click', () => {
    //   openProjectModal(projectId);
    // });
  });
  */

})();

/**
 * Studio Filters
 * Handles filtering of studio items by type
 */

(function () {
  'use strict';

  var FILTER_BUTTONS = document.querySelectorAll('.filter-btn');
  var STUDIO_ITEMS = document.querySelectorAll('.studio-item');
  var EMPTY_STATE = document.querySelector('.studio-empty');
  var HASH_PREFIX = '#';

  /**
   * Filter studio items by type
   * @param {string} filterType - The type to filter by ('all' or specific type)
   */
  function filterItems(filterType) {
    var i;
    var item;
    var itemType;
    var shouldShow;
    var visibleCount = 0;

    for (i = 0; i < STUDIO_ITEMS.length; i++) {
      item = STUDIO_ITEMS[i];
      itemType = item.getAttribute('data-type');
      shouldShow = filterType === 'all' || itemType === filterType;

      if (shouldShow) {
        item.classList.remove('is-hidden');
        visibleCount++;
      } else {
        item.classList.add('is-hidden');
      }
    }

    if (EMPTY_STATE) {
      EMPTY_STATE.hidden = visibleCount > 0;
    }
  }

  /**
   * Update active state of filter buttons
   * @param {string} activeFilter - The currently active filter
   */
  function updateButtonStates(activeFilter) {
    var i;
    var button;
    var buttonFilter;

    for (i = 0; i < FILTER_BUTTONS.length; i++) {
      button = FILTER_BUTTONS[i];
      buttonFilter = button.getAttribute('data-filter');

      if (buttonFilter === activeFilter) {
        button.classList.add('is-active');
      } else {
        button.classList.remove('is-active');
      }
    }
  }

  /**
   * Apply filter and update URL hash
   * @param {string} filterType - The type to filter by
   */
  function applyFilter(filterType) {
    filterItems(filterType);
    updateButtonStates(filterType);

    if (filterType === 'all') {
      history.replaceState(null, '', window.location.pathname);
    } else {
      history.replaceState(null, '', HASH_PREFIX + filterType);
    }
  }

  /**
   * Get filter from URL hash
   * @returns {string} The filter type from hash or 'all'
   */
  function getFilterFromHash() {
    var hash = window.location.hash.slice(1);
    var validFilters = ['experiment', 'case-study', 'writing'];
    var i;

    for (i = 0; i < validFilters.length; i++) {
      if (hash === validFilters[i]) {
        return hash;
      }
    }

    return 'all';
  }

  /**
   * Initialize filter functionality
   */
  function init() {
    var i;
    var initialFilter;

    if (!FILTER_BUTTONS.length || !STUDIO_ITEMS.length) {
      return;
    }

    for (i = 0; i < FILTER_BUTTONS.length; i++) {
      FILTER_BUTTONS[i].addEventListener('click', function (e) {
        var filterType = e.currentTarget.getAttribute('data-filter');
        applyFilter(filterType);
      });
    }

    initialFilter = getFilterFromHash();
    applyFilter(initialFilter);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/**
 * Advanced Collection Filters
 * Handles filtering, sorting, and search for collection pages
 */

class CollectionFilters {
  constructor() {
    this.filters = {};
    this.init();
  }

  init() {
    this.setupFilterToggle();
    this.setupFilterInputs();
    this.setupSorting();
    this.setupPriceRange();
    this.loadFiltersFromURL();
  }

  setupFilterToggle() {
    const toggle = document.querySelector('.collection__filter-toggle');
    const filters = document.querySelector('#CollectionFilters');
    const close = document.querySelector('.collection-filters__close');
    
    if (toggle && filters) {
      toggle.addEventListener('click', () => {
        filters.classList.add('collection-filters--active');
        document.body.style.overflow = 'hidden';
      });
    }
    
    if (close && filters) {
      close.addEventListener('click', () => {
        filters.classList.remove('collection-filters--active');
        document.body.style.overflow = '';
      });
    }
  }

  setupFilterInputs() {
    const checkboxes = document.querySelectorAll('.collection-filters__checkbox input');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        this.updateFilters();
      });
    });
  }

  setupSorting() {
    const sortSelect = document.querySelector('#SortBy');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        const url = new URL(window.location);
        url.searchParams.set('sort_by', e.target.value);
        window.location = url;
      });
    }
  }

  setupPriceRange() {
    const priceInputs = document.querySelectorAll('.collection-filters__price-inputs input');
    const sliders = document.querySelectorAll('[data-price-range] input[type="range"]');
    
    priceInputs.forEach((input, index) => {
      input.addEventListener('input', () => {
        if (sliders[index]) {
          sliders[index].value = input.value;
        }
        this.updateFilters();
      });
    });
    
    sliders.forEach((slider, index) => {
      slider.addEventListener('input', () => {
        if (priceInputs[index]) {
          priceInputs[index].value = slider.value;
        }
        this.updateFilters();
      });
    });
  }

  updateFilters() {
    const url = new URL(window.location);
    url.searchParams.delete('filter');
    
    const activeFilters = [];
    const checkboxes = document.querySelectorAll('.collection-filters__checkbox input:checked');
    
    checkboxes.forEach(checkbox => {
      const param = checkbox.name;
      const value = checkbox.value;
      url.searchParams.append('filter', `${param}:${value}`);
      activeFilters.push({ param, value });
    });
    
    const priceInputs = document.querySelectorAll('.collection-filters__price-inputs input');
    if (priceInputs[0] && priceInputs[0].value) {
      url.searchParams.set('filter.v.price.gte', priceInputs[0].value);
    }
    if (priceInputs[1] && priceInputs[1].value) {
      url.searchParams.set('filter.v.price.lte', priceInputs[1].value);
    }
    
    // Update URL without reload for better UX
    window.history.pushState({}, '', url);
    
    // Fetch filtered products
    this.fetchFilteredProducts(url);
  }

  async fetchFilteredProducts(url) {
    try {
      const response = await fetch(url + '&view=ajax');
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      const newGrid = doc.querySelector('.collection__grid');
      const currentGrid = document.querySelector('.collection__grid');
      
      if (newGrid && currentGrid) {
        currentGrid.innerHTML = newGrid.innerHTML;
        this.updateFilterCount();
      }
    } catch (error) {
      console.error('Filter fetch error:', error);
      // Fallback to full page reload
      window.location = url;
    }
  }

  updateFilterCount() {
    const activeCount = document.querySelectorAll('.collection-filters__checkbox input:checked').length;
    const countElement = document.querySelector('.collection__filter-count');
    if (countElement) {
      countElement.textContent = activeCount;
      countElement.style.display = activeCount > 0 ? 'inline' : 'none';
    }
  }

  loadFiltersFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const filters = urlParams.getAll('filter');
    
    filters.forEach(filter => {
      const [param, value] = filter.split(':');
      const checkbox = document.querySelector(`input[name="${param}"][value="${value}"]`);
      if (checkbox) {
        checkbox.checked = true;
      }
    });
    
    this.updateFilterCount();
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('#CollectionProductGrid')) {
    new CollectionFilters();
  }
});




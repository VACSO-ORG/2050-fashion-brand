/**
 * Predictive Search
 * Provides instant search results as user types
 */

class PredictiveSearch {
  constructor() {
    this.searchInput = document.querySelector('[data-search-input]');
    this.resultsContainer = document.querySelector('[data-search-results]');
    this.debounceTimer = null;
    this.init();
  }

  init() {
    if (!this.searchInput) return;
    
    this.searchInput.addEventListener('input', (e) => {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(() => {
        this.performSearch(e.target.value);
      }, 300);
    });

    this.searchInput.addEventListener('focus', () => {
      if (this.searchInput.value.length >= 2) {
        this.performSearch(this.searchInput.value);
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!this.resultsContainer?.contains(e.target) && 
          !this.searchInput?.contains(e.target)) {
        this.hideResults();
      }
    });
  }

  async performSearch(query) {
    if (query.length < 2) {
      this.hideResults();
      return;
    }

    try {
      const url = `${window.routes.predictive_search_url}?q=${encodeURIComponent(query)}&resources[type]=product&resources[limit]=5`;
      const response = await fetch(url);
      const data = await response.json();
      
      this.displayResults(data);
    } catch (error) {
      console.error('Predictive search error:', error);
      this.hideResults();
    }
  }

  displayResults(data) {
    if (!this.resultsContainer) return;

    const products = data.resources?.results?.products || [];
    
    if (products.length === 0) {
      this.hideResults();
      return;
    }

    this.resultsContainer.innerHTML = products
      .map(product => this.renderProduct(product))
      .join('');

    this.resultsContainer.style.display = 'block';
  }

  renderProduct(product) {
    return `
      <a href="${product.url}" class="predictive-search__item">
        <img src="${product.image}" alt="${product.title}" class="predictive-search__image">
        <div class="predictive-search__info">
          <div class="predictive-search__title">${product.title}</div>
          <div class="predictive-search__price">${product.price}</div>
        </div>
      </a>
    `;
  }

  hideResults() {
    if (this.resultsContainer) {
      this.resultsContainer.style.display = 'none';
    }
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  new PredictiveSearch();
});



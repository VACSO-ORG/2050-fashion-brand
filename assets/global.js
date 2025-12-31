/**
 * Global JavaScript for 2050 Fashion Brand
 * Main entry point for theme functionality
 */

// Utility functions
const Utils = {
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  formatMoney(cents) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(cents / 100);
  }
};

// Cart functionality
class CartManager {
  constructor() {
    this.init();
  }

  async init() {
    this.updateCartCount();
    this.setupCartListeners();
  }

  async updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      const countElements = document.querySelectorAll('[data-cart-count]');
      countElements.forEach(el => {
        el.textContent = cart.item_count;
      });
    } catch (error) {
      console.error('Cart update error:', error);
    }
  }

  setupCartListeners() {
    document.addEventListener('cart:updated', () => {
      this.updateCartCount();
    });
  }

  async addToCart(variantId, quantity = 1) {
    try {
      const response = await fetch(window.routes.cart_add_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: variantId,
          quantity: quantity
        })
      });

      const data = await response.json();
      
      if (response.ok) {
        document.dispatchEvent(new CustomEvent('cart:updated'));
        this.showNotification('Product added to cart');
        return data;
      } else {
        throw new Error(data.description || 'Failed to add to cart');
      }
    } catch (error) {
      console.error('Add to cart error:', error);
      this.showNotification('Error adding product to cart', 'error');
    }
  }

  showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('notification--show');
    }, 10);
    
    setTimeout(() => {
      notification.classList.remove('notification--show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
}

// Search functionality
class SearchManager {
  constructor() {
    this.init();
  }

  init() {
    const searchInput = document.querySelector('[data-search-input]');
    if (searchInput) {
      searchInput.addEventListener('input', Utils.debounce((e) => {
        this.performSearch(e.target.value);
      }, 300));
    }
  }

  async performSearch(query) {
    if (query.length < 2) return;
    
    try {
      const response = await fetch(
        `${window.routes.predictive_search_url}?q=${encodeURIComponent(query)}&resources[type]=product&resources[limit]=5`
      );
      const data = await response.json();
      this.displayResults(data);
    } catch (error) {
      console.error('Search error:', error);
    }
  }

  displayResults(data) {
    // Display search results
    const container = document.querySelector('[data-search-results]');
    if (!container) return;
    
    // Render results
    // Implementation depends on your UI design
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  window.cartManager = new CartManager();
  window.searchManager = new SearchManager();
  
  // Lazy load images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
});

// Export for use in other scripts
window.Utils = Utils;



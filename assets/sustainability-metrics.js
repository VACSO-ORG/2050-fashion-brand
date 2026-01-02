/**
 * Sustainability Metrics Calculator
 * Tracks and displays environmental impact metrics
 */

class SustainabilityMetrics {
  constructor() {
    this.metrics = {
      carbon: 0,
      water: 0,
      recycled: 0,
      ethical: 100
    };
    this.init();
  }

  init() {
    this.calculateMetrics();
    this.animateMetrics();
    this.trackPurchases();
  }

  calculateMetrics() {
    // Calculate metrics based on cart contents or store-wide data
    const cartItems = this.getCartItems();
    
    cartItems.forEach(item => {
      const productMetrics = this.getProductMetrics(item);
      this.metrics.carbon += productMetrics.carbon;
      this.metrics.water += productMetrics.water;
    });

    this.updateDisplay();
  }

  getCartItems() {
    // Get items from cart or localStorage
    try {
      const cart = JSON.parse(localStorage.getItem('shopify_cart') || '[]');
      return cart;
    } catch {
      return [];
    }
  }

  getProductMetrics(product) {
    // Get sustainability metrics from product metafields
    // Default values if not available
    return {
      carbon: product.metafields?.carbon_saved || 0,
      water: product.metafields?.water_saved || 0,
      recycled: product.metafields?.recycled_percentage || 0
    };
  }

  animateMetrics() {
    const metricElements = document.querySelectorAll('[data-metric]');
    
    metricElements.forEach(element => {
      const metricType = element.dataset.metric;
      const targetValue = this.metrics[metricType] || 0;
      this.animateValue(element, 0, targetValue, 2000);
    });
  }

  animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = Math.floor(progress * (end - start) + start);
      
      if (element.dataset.metric === 'recycled' || element.dataset.metric === 'ethical') {
        element.textContent = currentValue + '%';
      } else {
        element.textContent = this.formatNumber(currentValue);
      }
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        element.textContent = this.formatMetric(element.dataset.metric, end);
      }
    };
    window.requestAnimationFrame(step);
  }

  formatNumber(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  }

  formatMetric(type, value) {
    if (type === 'recycled' || type === 'ethical') {
      return value + '%';
    } else if (type === 'carbon') {
      return this.formatNumber(value) + ' kg';
    } else if (type === 'water') {
      return this.formatNumber(value) + ' L';
    }
    return value;
  }

  updateDisplay() {
    // Update metric displays throughout the site
    Object.keys(this.metrics).forEach(key => {
      const elements = document.querySelectorAll(`[data-metric="${key}"]`);
      elements.forEach(element => {
        element.textContent = this.formatMetric(key, this.metrics[key]);
      });
    });
  }

  trackPurchases() {
    // Track purchases to update cumulative metrics
    document.addEventListener('cart:updated', () => {
      this.calculateMetrics();
    });
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  new SustainabilityMetrics();
});




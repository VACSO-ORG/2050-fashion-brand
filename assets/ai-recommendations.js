/**
 * AI-Powered Product Recommendations
 * Uses machine learning to suggest products based on user behavior
 */

class AIRecommendations {
  constructor(container) {
    this.container = container;
    this.config = this.getConfig();
    this.recommendations = [];
    this.init();
  }

  getConfig() {
    const configElement = this.container.querySelector('[data-ai-config]');
    if (!configElement) return { productsToShow: 6 };
    return JSON.parse(configElement.textContent);
  }

  async init() {
    try {
      await this.fetchRecommendations();
      this.renderRecommendations();
    } catch (error) {
      console.error('AI Recommendations error:', error);
      this.showFallback();
    }
  }

  async fetchRecommendations() {
    const loadingElement = this.container.querySelector('[data-loading]');
    if (loadingElement) {
      loadingElement.style.display = 'block';
    }

    // Simulate AI recommendation API call
    // In production, this would call your AI service
    const response = await this.callAIRecommendationAPI();
    
    if (loadingElement) {
      loadingElement.style.display = 'none';
    }

    this.recommendations = response.products || [];
  }

  async callAIRecommendationAPI() {
    // Placeholder for actual AI recommendation service
    // This would integrate with services like:
    // - Shopify's AI recommendations
    // - Custom ML model
    // - Third-party recommendation engines
    
    const userId = this.config.userId || 'guest';
    const sessionId = this.config.sessionId || 'new';
    
    // Simulated API call
    return new Promise((resolve) => {
      setTimeout(() => {
        // In production, replace with actual API call
        resolve({
          products: this.getFallbackRecommendations()
        });
      }, 1000);
    });
  }

  getFallbackRecommendations() {
    // Fallback to featured products if AI is unavailable
    // In production, fetch from Shopify collections
    return [];
  }

  renderRecommendations() {
    const container = this.container.querySelector('[data-recommendations-container]');
    if (!container) return;

    if (this.recommendations.length === 0) {
      this.showFallback();
      return;
    }

    container.innerHTML = this.recommendations
      .map(product => this.renderProductCard(product))
      .join('');
  }

  renderProductCard(product) {
    return `
      <div class="product-card">
        <div class="product-card__media">
          <a href="${product.url}">
            <img src="${product.image}" alt="${product.title}" loading="lazy">
          </a>
        </div>
        <div class="product-card__info">
          <h3><a href="${product.url}">${product.title}</a></h3>
          <div class="product-card__price">${product.price}</div>
        </div>
      </div>
    `;
  }

  showFallback() {
    const container = this.container.querySelector('[data-recommendations-container]');
    if (!container) return;

    container.innerHTML = `
      <div class="ai-recommendations__fallback">
        <p>Discover our curated collection</p>
        <a href="/collections/all" class="button">View All Products</a>
      </div>
    `;
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('[data-ai-recommendations]');
  containers.forEach(container => {
    new AIRecommendations(container);
  });
});



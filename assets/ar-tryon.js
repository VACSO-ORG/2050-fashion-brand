/**
 * AR Try-On Feature
 * Enables augmented reality product visualization
 */

class ARTryOn {
  constructor(button) {
    this.button = button;
    this.product = this.getProductData();
    this.init();
  }

  getProductData() {
    // Get product data from the page
    const productData = document.querySelector('[data-product-json]');
    if (productData) {
      return JSON.parse(productData.textContent);
    }
    return null;
  }

  init() {
    if (!this.button) return;
    
    this.button.addEventListener('click', () => {
      this.launchAR();
    });

    // Check AR availability
    this.checkARSupport();
  }

  async checkARSupport() {
    // Check if device supports AR
    if ('xr' in navigator) {
      const isSupported = await navigator.xr.isSessionSupported('immersive-ar');
      if (!isSupported) {
        this.button.style.display = 'none';
      }
    } else {
      // Fallback: Show 3D viewer or image overlay
      this.enableFallback();
    }
  }

  async launchAR() {
    try {
      if ('xr' in navigator) {
        await this.launchWebXR();
      } else {
        await this.launchFallbackAR();
      }
    } catch (error) {
      console.error('AR launch failed:', error);
      this.showError();
    }
  }

  async launchWebXR() {
    // Launch WebXR AR session
    const session = await navigator.xr.requestSession('immersive-ar', {
      requiredFeatures: ['local-floor'],
      optionalFeatures: ['bounded-floor', 'hand-tracking']
    });

    // Load 3D model
    const model = await this.load3DModel();
    
    // Render in AR
    this.renderARModel(session, model);
  }

  async launchFallbackAR() {
    // Fallback AR using camera overlay
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    this.showCameraOverlay(stream);
  }

  async load3DModel() {
    // Load 3D model from product metafields or CDN
    const modelUrl = this.product?.metafields?.ar_model_url;
    if (!modelUrl) {
      throw new Error('3D model not available');
    }

    // In production, use a 3D library like Three.js or model-viewer
    return { url: modelUrl };
  }

  renderARModel(session, model) {
    // Render 3D model in AR space
    // This would integrate with WebXR API and 3D rendering library
    console.log('Rendering AR model:', model);
  }

  showCameraOverlay(stream) {
    // Show camera with product overlay
    const overlay = document.createElement('div');
    overlay.className = 'ar-overlay';
    overlay.innerHTML = `
      <video autoplay playsinline></video>
      <div class="ar-controls">
        <button class="ar-close">Close</button>
      </div>
    `;
    
    const video = overlay.querySelector('video');
    video.srcObject = stream;
    
    document.body.appendChild(overlay);
    
    overlay.querySelector('.ar-close').addEventListener('click', () => {
      stream.getTracks().forEach(track => track.stop());
      overlay.remove();
    });
  }

  enableFallback() {
    // Enable 3D model viewer as fallback
    this.button.textContent = 'View in 3D';
    this.button.classList.add('ar-fallback');
  }

  showError() {
    // Show error message to user
    const error = document.createElement('div');
    error.className = 'ar-error';
    error.textContent = 'AR is not available on this device. Try viewing in 3D instead.';
    this.button.parentNode.insertBefore(error, this.button);
    
    setTimeout(() => error.remove(), 5000);
  }
}

// Initialize AR buttons
document.addEventListener('DOMContentLoaded', () => {
  const arButtons = document.querySelectorAll('[data-ar-tryon]');
  arButtons.forEach(button => {
    new ARTryOn(button);
  });
});



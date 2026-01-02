/**
 * Share Functionality
 * Allows users to share products via social media or copy link
 */

class ShareButton extends HTMLElement {
  constructor() {
    super();
    this.details = this.querySelector('details');
    this.summary = this.querySelector('summary');
    this.input = this.querySelector('input');
    this.copyButton = this.querySelector('.share-button__copy');
    this.closeButton = this.querySelector('.share-button__close');
    this.message = this.querySelector('.share-button__message');
    this.init();
  }

  init() {
    if (this.copyButton) {
      this.copyButton.addEventListener('click', () => this.copyToClipboard());
    }

    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => this.close());
    }

    this.details?.addEventListener('toggle', () => {
      if (this.details.open) {
        this.input?.select();
      }
    });
  }

  async copyToClipboard() {
    if (!this.input) return;

    try {
      await navigator.clipboard.writeText(this.input.value);
      this.showMessage('Link copied to clipboard');
    } catch (error) {
      // Fallback for older browsers
      this.input.select();
      document.execCommand('copy');
      this.showMessage('Link copied to clipboard');
    }
  }

  showMessage(text) {
    if (this.message) {
      this.message.textContent = text;
      this.message.classList.remove('hidden');
      setTimeout(() => {
        this.message.classList.add('hidden');
      }, 3000);
    }
  }

  close() {
    if (this.details) {
      this.details.removeAttribute('open');
    }
  }
}

customElements.define('share-button', ShareButton);




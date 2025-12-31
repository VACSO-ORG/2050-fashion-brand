/**
 * Product Form Handler
 * Manages product variant selection and add to cart functionality
 */

class ProductForm extends HTMLElement {
  constructor() {
    super();
    this.form = this.querySelector('form');
    this.form.addEventListener('submit', this.onSubmit.bind(this));
    this.cartNotification = document.querySelector('cart-notification');
  }

  onSubmit(event) {
    event.preventDefault();
    const submitButton = this.querySelector('[type="submit"]');
    const formData = new FormData(this.form);
    
    submitButton.classList.add('loading');
    submitButton.disabled = true;

    fetch(window.routes.cart_add_url, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then((parsedState) => {
      this.error = false;
      this.errorMessage = '';
      
      if (parsedState.description) {
        this.error = true;
        this.errorMessage = parsedState.description;
        return;
      }

      this.updateCart(parsedState);
      this.cartNotification?.renderContents(parsedState);
    })
    .catch((error) => {
      this.error = true;
      this.errorMessage = error.message || 'An error occurred';
    })
    .finally(() => {
      submitButton.classList.remove('loading');
      submitButton.disabled = false;
    });
  }

  updateCart(parsedState) {
    document.dispatchEvent(new CustomEvent('cart:updated'));
  }

  setError(message) {
    this.error = true;
    this.errorMessage = message;
    const errorWrapper = this.querySelector('.product-form__error-message-wrapper');
    if (errorWrapper) {
      errorWrapper.hidden = false;
      errorWrapper.querySelector('.product-form__error-message').textContent = message;
    }
  }
}

customElements.define('product-form', ProductForm);



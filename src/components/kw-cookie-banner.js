import { LitElement, html } from 'lit';

/**
 * Custom element representing a cookie consent banner.
 * It reads and writes consent using localStorage and hides when dismissed.
 */
export class KwCookieBanner extends LitElement {
  static properties = {
    visible: { type: Boolean }
  };

  constructor() {
    super();
    // Check if the user has already accepted cookie consent
    this.visible = !localStorage.getItem('kw-cookie-consent');
  }

  // Disable Shadow DOM to allow global Tailwind CSS utility classes to apply
  createRenderRoot() {
    return this;
  }

  /**
   * Action handler for accepting cookie usage.
   * Persists consent in localStorage and hides the banner.
   */
  accept() {
    localStorage.setItem('kw-cookie-consent', 'accepted');
    this.visible = false;
  }

  render() {
    if (!this.visible) {
      return null;
    }

    return html`
      <div class="fixed bottom-0 left-0 right-0 bg-[#1397ea] text-white p-4 flex flex-col md:flex-row items-center justify-between gap-4 z-50 shadow-lg animate-pulse-subtle">
        <div class="text-sm font-semibold">
          This site uses cookies. Click the button to continue.
        </div>
        <button 
          @click="${this.accept}" 
          class="bg-white text-[#1397ea] font-bold px-4 py-2 rounded hover:bg-gray-100 transition-colors uppercase text-sm tracking-wider cursor-pointer"
        >
          I accept
        </button>
      </div>
    `;
  }
}

customElements.define('kw-cookie-banner', KwCookieBanner);

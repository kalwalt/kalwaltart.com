import { LitElement, html, css } from 'lit';

/**
 * Custom element representing a responsive carousel.
 * Utilizes horizontal scroll snapping in CSS and a slot layout.
 */
export class KwCarousel extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
      width: 100%;
      box-sizing: border-box;
    }

    .carousel-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
      border-radius: 4px;
    }

    .carousel-container {
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none; /* Firefox */
      margin: 0;
      padding: 0;
      width: 100%;
    }

    .carousel-container::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }

    /* Style the slotted children for horizontal scroll snapping */
    ::slotted(*) {
      scroll-snap-align: start;
      flex-shrink: 0;
      width: 100%;
      box-sizing: border-box;
    }

    /* Navigation button styles */
    .nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.4);
      color: white;
      border: none;
      width: 40px;
      height: 40px;
      cursor: pointer;
      z-index: 10;
      font-size: 20px;
      font-weight: bold;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.3s, transform 0.1s;
    }

    .nav-btn:hover {
      background: rgba(0, 0, 0, 0.7);
    }

    .nav-btn:active {
      transform: translateY(-50%) scale(0.95);
    }

    .prev-btn {
      left: 12px;
    }

    .next-btn {
      right: 12px;
    }
  `;

  /**
   * Scroll the carousel container forward by one slide width.
   */
  scrollNext() {
    const container = this.shadowRoot.querySelector('.carousel-container');
    if (container) {
      const slideWidth = container.offsetWidth;
      container.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
  }

  /**
   * Scroll the carousel container backward by one slide width.
   */
  scrollPrev() {
    const container = this.shadowRoot.querySelector('.carousel-container');
    if (container) {
      const slideWidth = container.offsetWidth;
      container.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    }
  }

  render() {
    return html`
      <div class="carousel-wrapper">
        <button @click="${this.scrollPrev}" class="nav-btn prev-btn" aria-label="Previous slide">
          &#10094;
        </button>
        
        <div class="carousel-container">
          <slot></slot>
        </div>
        
        <button @click="${this.scrollNext}" class="nav-btn next-btn" aria-label="Next slide">
          &#10095;
        </button>
      </div>
    `;
  }
}

customElements.define('kw-carousel', KwCarousel);

import { LitElement, html, css } from 'lit';

/**
 * Custom element representing a slideshow that mimics full-screen AMP Stories.
 * Manages touch gestures, click zones, keyboard input, and progress tracking.
 */
export class KwSlideshow extends LitElement {
  static properties = {
    currentIndex: { type: Number },
    slideCount: { type: Number }
  };

  static styles = css`
    :host {
      display: block;
      position: relative;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background: black;
      color: white;
      user-select: none;
      box-sizing: border-box;
    }

    /* Top progress indicator */
    .progress-bar {
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      display: flex;
      gap: 6px;
      z-index: 100;
    }

    .progress-segment {
      height: 4px;
      flex: 1;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 2px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      width: 0%;
      background: white;
      transition: width 0.3s ease;
    }

    .progress-fill.active {
      width: 100%;
    }

    .progress-fill.completed {
      width: 100%;
    }

    /* Tap zones for left (back) and right (forward) click navigation */
    .tap-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
      display: flex;
    }

    .left-zone {
      width: 30%;
      height: 100%;
      cursor: w-resize;
    }

    .right-zone {
      width: 70%;
      height: 100%;
      cursor: e-resize;
    }
  `;

  constructor() {
    super();
    this.currentIndex = 0;
    this.slideCount = 0;
    this._slides = [];
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._touchStartX = 0;
  }

  firstUpdated() {
    this.updateSlides();
    window.addEventListener('keydown', this._handleKeyDown);
    this.shadowRoot.addEventListener('slotchange', () => this.updateSlides());
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this._handleKeyDown);
  }

  /**
   * Scan slotted elements to count and capture child slide components.
   */
  updateSlides() {
    const slot = this.shadowRoot.querySelector('slot');
    if (slot) {
      this._slides = slot.assignedElements().filter(
        el => el.tagName.toLowerCase() === 'kw-slideshow-slide'
      );
      this.slideCount = this._slides.length;
      this.setActiveSlide();
    }
  }

  /**
   * Apply 'active' attribute status to the current slide and clear from others.
   */
  setActiveSlide() {
    this._slides.forEach((slide, idx) => {
      if (idx === this.currentIndex) {
        slide.setAttribute('active', '');
      } else {
        slide.removeAttribute('active');
      }
    });
    this.requestUpdate();
  }

  /**
   * Navigate to the next slide if possible.
   */
  next() {
    if (this.currentIndex < this.slideCount - 1) {
      this.currentIndex++;
      this.setActiveSlide();
    }
  }

  /**
   * Navigate to the previous slide if possible.
   */
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.setActiveSlide();
    }
  }

  /**
   * Handle physical keyboard arrow key releases.
   */
  _handleKeyDown(e) {
    if (e.key === 'ArrowRight' || e.key === 'Space') {
      this.next();
    } else if (e.key === 'ArrowLeft') {
      this.prev();
    }
  }

  /**
   * Capture initial touch start coordinates.
   */
  _handleTouchStart(e) {
    this._touchStartX = e.touches[0].clientX;
  }

  /**
   * Evaluate touch gesture swipe thresholds upon lift.
   */
  _handleTouchEnd(e) {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = this._touchStartX - touchEndX;

    if (diffX > 50) {
      this.next(); // Left swipe
    } else if (diffX < -50) {
      this.prev(); // Right swipe
    }
  }

  render() {
    return html`
      <!-- Progress Bar Indicators -->
      <div class="progress-bar">
        ${Array.from({ length: this.slideCount }).map((_, idx) => html`
          <div class="progress-segment">
            <div class="progress-fill ${idx < this.currentIndex ? 'completed' : ''} ${idx === this.currentIndex ? 'active' : ''}"></div>
          </div>
        `)}
      </div>

      <!-- Navigation overlay zones -->
      <div 
        class="tap-overlay"
        @touchstart="${this._handleTouchStart}"
        @touchend="${this._handleTouchEnd}"
      >
        <div class="left-zone" @click="${this.prev}"></div>
        <div class="right-zone" @click="${this.next}"></div>
      </div>

      <!-- Slide slot -->
      <slot></slot>
    `;
  }
}

customElements.define('kw-slideshow', KwSlideshow);

import { LitElement, html, css } from 'lit';

/**
 * Custom element representing a single slide inside a slideshow.
 * Handles animations when active and media grid layer layouts.
 */
export class KwSlideshowSlide extends LitElement {
  static properties = {
    active: { type: Boolean, reflect: true }
  };

  static styles = css`
    :host {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
      z-index: 1;
      overflow: hidden;
    }

    :host([active]) {
      opacity: 1;
      visibility: visible;
      z-index: 2;
    }

    /* Slideshow layout layers */
    ::slotted(.story-grid-layer) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: grid;
      box-sizing: border-box;
      padding: 32px;
    }

    ::slotted(.template-fill) {
      z-index: 1;
      padding: 0;
    }

    ::slotted(.template-vertical) {
      z-index: 2;
      grid-template-columns: 1fr;
      align-content: center;
      justify-items: center;
      text-align: center;
    }

    ::slotted(.template-thirds) {
      z-index: 2;
      grid-template-rows: 1fr 1fr 1fr;
      align-content: space-between;
      text-align: center;
    }

    ::slotted(.story-cta-layer) {
      position: absolute;
      bottom: 40px;
      left: 0;
      width: 100%;
      z-index: 10;
      text-align: center;
      box-sizing: border-box;
    }

    /* Keyframes for text animations */
    @keyframes flyInLeft {
      from {
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes flyInRight {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Animate element states */
    ::slotted([animate-in="fly-in-left"]) {
      opacity: 0;
    }
    :host([active]) ::slotted([animate-in="fly-in-left"]) {
      animation: flyInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      animation-delay: 0.2s;
    }

    ::slotted([animate-in="fly-in-right"]) {
      opacity: 0;
    }
    :host([active]) ::slotted([animate-in="fly-in-right"]) {
      animation: flyInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      animation-delay: 0.2s;
    }

    ::slotted([animate-in="fade-in"]) {
      opacity: 0;
    }
    :host([active]) ::slotted([animate-in="fade-in"]) {
      animation: fadeIn 0.8s ease-in-out forwards;
      animation-delay: 0.2s;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('kw-slideshow-slide', KwSlideshowSlide);

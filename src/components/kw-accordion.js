import { LitElement, html } from 'lit';

/**
 * Custom accordion component that replaces <amp-accordion>.
 * It toggles the visibility of the content inside sections when their headers are clicked.
 */
export class KwAccordion extends LitElement {
  static properties = {
    // Array of indices of expanded sections
    expandedSections: { type: Array }
  };

  constructor() {
    super();
    this.expandedSections = [];
  }

  createRenderRoot() {
    return this;
  }

  firstUpdated() {
    // Select all child sections
    const sections = this.querySelectorAll('section');
    sections.forEach((section, index) => {
      // The first child of the section is the header/trigger
      const header = section.firstElementChild;
      if (!header) return;

      // Check if it's expanded initially (either via expanded attribute or matching state)
      const isExpanded = section.hasAttribute('expanded');
      if (isExpanded) {
        this.expandedSections = [...this.expandedSections, index];
      }

      // Hide/show initial content
      this.updateSectionVisibility(section, isExpanded);

      // Make header clickable
      header.style.cursor = 'pointer';
      header.addEventListener('click', (e) => {
        e.preventDefault();
        const currentlyExpanded = this.expandedSections.includes(index);
        if (currentlyExpanded) {
          this.expandedSections = this.expandedSections.filter(i => i !== index);
          section.removeAttribute('expanded');
          this.updateSectionVisibility(section, false);
        } else {
          this.expandedSections = [...this.expandedSections, index];
          section.setAttribute('expanded', '');
          this.updateSectionVisibility(section, true);
        }
      });
    });
  }

  /**
   * Shows or hides the content elements of a section based on visibility state.
   * @param {HTMLElement} section The parent section element
   * @param {boolean} isVisible Whether the content should be visible
   */
  updateSectionVisibility(section, isVisible) {
    const contentElements = Array.from(section.children).slice(1);
    contentElements.forEach(el => {
      if (isVisible) {
        el.style.display = '';
      } else {
        el.style.display = 'none';
      }
    });
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('kw-accordion', KwAccordion);

/**
 * The sidebar can be used across all pages to offer in-page navigation
 */

// 1. Container layout
// 2. Slot für header content
// 3. Slot für menü

class SideBar extends HTMLElement {

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Get dynamic attributes from the element
        const href = this.getAttribute('href') || '#';

        // Define layout and style
        this.shadowRoot.innerHTML = `
          <style>

            :host {
                display: flex;
            }

            header {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 100%;
                padding-top: var(--spacing-04);
                padding-bottom: var(--spacing-04);
                background-color: var(--semantic-color-surface-contrast);
            }

            .padding {
                padding-inline: var(--spacing-04);
                margin-bottom: var(--spacing-02);
            }

            /* Desktop layout */
            @media screen and (min-width: 1024px) {

                :host {
                    position: fixed;
                    width: 30%;
                    max-width: 432px;
                    height: 100%;
                    top: 0;
                    left: 0;
                }

                header {
                    height: auto;
                }

            }
          
          </style>
        <header>
            <div class="padding"><slot name="header"></slot></div>
            <slot name="footer"></slot>
        </header>
      `;

    }

  }
  
  customElements.define('side-bar', SideBar);
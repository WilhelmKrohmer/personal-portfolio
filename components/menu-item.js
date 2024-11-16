class MenuItem extends HTMLElement {

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {

        // Get dynamic attributes from the element
        const href = this.getAttribute('href') || '#';
        const menuLabel = this.getAttribute('label') || 'Click here';
        const target = this.getAttribute('target') || '';
        const isSelected = this.getAttribute('is-selected') || '';

        this.shadowRoot.innerHTML = `
            <link href="styles/styles.css" rel="stylesheet" type="text/css">
            <style>          
                .menu-item {
                    display: flex;
                    text-decoration: none;
                    padding-inline: var(--spacing-03);
                    padding-block: var(--spacing-02);
                    background-color: var(--semantic-color-surface-onContrast-enabled);
                    color: var(--semantic-color-content-inverse);
                    border-radius: var(--semantic-border-radius-medium);
                    transition: all .125s ease;
                }

                .menu-item:hover {
                    transition: all .125s ease;
                    background-color: var(--semantic-color-surface-onContrast-hovered);
                }

                .menu-item:active {
                    background-color: var(--semantic-color-surface-onContrast-pressed);
                }

                .selected {
                    background-color: var(--semantic-color-surface-onContrast-hovered);
                }

                .menu-item:focus-visible {
                    transition: all .125s ease;
                    background-color: var(--semantic-color-surface-onContrast-focussed);
                    outline-style: solid;
                    outline-width: var(--semantic-border-strength-max);
                    outline-color: var(--semantic-color-border-inverse);
                }
            </style>
            <a
                class="body-2-black menu-item ${isSelected}"
                href="${href}"
                target="${target}"
                rel="noopener">
                    ${menuLabel}
            </a>
        `;
    }
  }
  
  customElements.define('menu-item', MenuItem);
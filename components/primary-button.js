class PrimaryButton extends HTMLElement {

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

    }

    connectedCallback() {

        // Get dynamic attributes from the element
        const href = this.getAttribute('href') || '#';
        const buttonLabel = this.getAttribute('label') || 'Click here';
        const target = this.getAttribute('target') || '';

        this.shadowRoot.innerHTML = `
            <link href="./styles/styles.css" rel="stylesheet" type="text/css">
            <style>            
                .button {
                    cursor: pointer;
                    text-decoration: none;
                    display: flex;
                    justify-content: space-between; /* Adjust layout when button is stretched */
                    padding: var(--spacing-03) var(--spacing-04);
                    background-color: var(--semantic-color-surface-highlight-enabled);
                    color: var(--semantic-color-content-inverse);
                    border-radius: var(--semantic-border-radius-medium);
                    border-width: var(--semantic-border-strength-none) solid var(--semantic-color-border-standard);
                    will-change: transform;
                    transition: transform .5s ease;
                }

                .button:hover {
                    transition: transform .125s ease;
                    background-color: var(--semantic-color-surface-highlight-hovered);
                }

                .button:active {
                    background-color: var(--semantic-color-surface-highlight-pressed);
                }

                .button:focus-visible{
                    transition: transform .125s ease;
                    background-color: var(--semantic-color-surface-highlight-focussed);
                    outline-style: solid;
                    outline-width: var(--semantic-border-strength-max);
                    outline-color: var(--semantic-color-border-standard);
                    box-shadow: inset 0 0 0 2px var(--semantic-color-border-inverse);
                }

                .trailing-icon::after {
                    content: "-->";
                    margin-left: var(--spacing-01);
                }

            </style>
            <a 
                class="body-2-black button trailing-icon" 
                href="${href}"
                target="${target}" 
                rel="noopener">
                    ${buttonLabel}
            </a>
        `;
    }
  }
  
  customElements.define('primary-button', PrimaryButton);
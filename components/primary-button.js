class PrimaryButton extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    
  
    connectedCallback() {

        // Get the href & label attribute from the element
        const href = this.getAttribute('href') || '#';
        const buttonLabel = this.getAttribute('label') || 'Click here';

        this.shadowRoot.innerHTML = `
            <link href="./styles/styles.css" rel="stylesheet" type="text/css">
            <style>            
                .button {
                    cursor: pointer;
                    text-decoration: none;
                    display: flex;
                    justify-content: space-between; /* Adjust layout when button is stretched */
                    padding: var(--spacing-02) var(--spacing-03);
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

                .button:focus{
                    transition: transform .125s ease;
                    background-color: var(--semantic-color-surface-highlight-focussed);
                    border-width: var(--semantic-border-strength-max) solid var(--semantic-color-border-standard);
                }

                .trailing-icon::after {
                    content: "-->";
                    margin-left: var(--spacing-01);
                }

                .leading-icon::before {
                    content: "<--";
                    margin-right: var(--spacing-01);
                }
            </style>
            <a 
                class="body-2-black button trailing-icon" 
                href="${href}"
                target="_blank" 
                rel="noopener">
                    ${buttonLabel}
            </a>
        `;
    }
  }
  
  customElements.define('primary-button', PrimaryButton);
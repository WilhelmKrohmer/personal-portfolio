/*
 * The info-box highlights relevant information.
 * It can contain clickable elements, such as links.
 */

class InfoBox extends HTMLElement {

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

    }

    connectedCallback() {

        // Get dynamic attributes from the element
        const href = this.getAttribute('href') || '#';

        this.shadowRoot.innerHTML = `
            <link href="./styles/styles.css" rel="stylesheet" type="text/css">
            <style>
                .info-box {
                    position: relative;
                    margin: var(--spacing-08) 0;
                }

                .info-box-content {
                    display: block;
                    text-decoration: none;
                    background-color: var(--semantic-color-surface-standard);
                    color: var(--semantic-color-content-standard);
                    border-radius: var(--semantic-border-radius-medium);
                    padding: var(--spacing-04);
                }

                .info-box-content:hover {
                    background-color: var(--semantic-color-surface-hovered);
                }

                .info-box-content:active {
                    background-color: var(--semantic-color-surface-pressed);
                }

                .info-box-content:focus {
                    transition: transform .125s ease;
                    background-color: var(--semantic-color-surface-focussed);
                }

                /*Desktop Layout*/
                @media screen and (min-width: 1024px) {

                    .info-box {
                        display: inline-block;
                    }

                }

            </style>

            <figure class="body-2-short info-box">
                <a class="info-box-content" href="${href}">
                    <slot></slot>
                </a>
            </figure>
            
        `;
    }
  }
  
  customElements.define('info-box', InfoBox);
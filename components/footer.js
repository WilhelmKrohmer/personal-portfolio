class CustomFooter extends HTMLElement {

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

    }

    connectedCallback() {

        this.shadowRoot.innerHTML = `
            <link href="./styles/styles.css" rel="stylesheet" type="text/css">
            <style>
                footer {
                    padding: var(--spacing-03) var(--spacing-04);
                }

                footer p {
                    margin: 0;
                }

                @media screen and (min-width: 600px) {
                    footer {
                        padding-left: var(--spacing-10);
                        padding-right: var(--spacing-10);
                    }
                }

                @media screen and (min-width: 1024px) {
                    footer {
                        text-align: right;
                        margin-left: 30%;
                        padding-left: var(--spacing-05);
                        padding-right: var(--spacing-05);
                    }
                }   
            </style>
            
            <footer>
                <p class="body-2-short">No tracking — <a class="impressum__text link" href="../pages/imprint/imprint.html">Imprint & Privacy</a></p>
            </footer>

        `;
    }
  }
  
  customElements.define('custom-footer', CustomFooter);
class KeyFacts extends HTMLElement {

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Get dynamic attributes from the element
        const position = this.getAttribute('position') || 'Lead App Designer';
        const client = this.getAttribute('client') || 'My client';
        const plattforms = this.getAttribute('plattforms') || 'iOS &amp; Android';
        const responsibilities = this.getAttribute('responsibilities') || 'Stakeholder management, workshops, wireflows, visual design, icons, QA';
        const credits = this.getAttribute('credits') || 'Maximilian Mügge, Deepblue Networks, Hanseatics';

        this.shadowRoot.innerHTML = `

            <link href="./styles/styles.css" rel="stylesheet" type="text/css">
            
            <style>
                /*
                    Keyfacts represent the most important facts 
                    about a story. 
                */

                .keyfacts {
                    background-color: var(--semantic-color-surface-standard);
                    border-radius: var(--semantic-border-radius-medium);
                    border-width: var(--semantic-border-strength-none);
                    padding: 20px;
                    margin-top: var(--spacing-08);
                    margin-bottom: var(--spacing-08);
                }

                .keyfacts dt {
                    color: var(--semantic-color-content-subtle);
                }

                .keyfacts dd {
                    margin-left: 0;
                    margin-bottom: 15px;
                }

                .keyfacts :last-child {
                    margin-bottom: 0;
                }

            </style>

            <dl class="keyfacts">
                <dt class="body-2-black">Position</dt>
                <dd class="body-1-short">${position}</dd>
                <dt class="body-2-black">Client</dt>
                <dd class="body-1-short">${client}</dd>
                <dt class="body-2-black">Plattforms</dt>
                <dd class="body-1-short">${plattforms}</dd>
                <dt class="body-2-black">Responsibilities</dt>
                <dd class="body-1-short">${responsibilities}</dd>
                <dt class="body-2-black">Credits</dt>
                <dd class="body-1-short">${credits}</dd>
            </dl>
        `;
    }
}

customElements.define('key-facts', KeyFacts);

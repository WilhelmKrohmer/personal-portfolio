class StoryTile extends HTMLElement {

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Get dynamic attributes from the element
        const image = this.getAttribute('image') || '';
        const fallbackImage = this.getAttribute('fallbackImage') || '';
        const imageAltText = this.getAttribute('imageAltText') || '';
        const title = this.getAttribute('title') || 'This is a headline';
        const description = this.getAttribute('description') || 'This is a description';
        const buttonURL = this.getAttribute('buttonURL') || '#';
        const target = this.getAttribute('target') || '';
        const buttonLabel = this.getAttribute('buttonLabel') || '';

        this.shadowRoot.innerHTML = `

            <link href="./styles/styles.css" rel="stylesheet" type="text/css">
            
            <style>
                .story-tile {
                    max-width: 560px;
                    margin-top: var(--spacing-04);
                    padding: var(--spacing-04);
                    background-color: var(--semantic-color-surface-standard);
                    border-radius: var(--semantic-border-radius-medium);
                    border-width: var(--semantic-border-strength-none);
                }

                .story-tile * { 
                    margin-top: 0;
                    margin-bottom: var(--spacing-03);
                }

                .story-tile:first-child {
                    margin-top: 0;
                }

                /* Last element in story tile */
                .story-tile-texts, 
                .story-tile-texts .button, 
                .story-tile-texts .button-background {
                    margin-bottom: 0;
                }

                .story-tile picture {
                    position: relative;
                }

                .story-tile img {
                    display: block;
                    object-fit: contain;
                    min-width: 200px;
                    min-height: 200px;
                    width: 100%;
                    height: auto;
                    aspect-ratio: 1/1;
                    margin: 0;
                    background-color: var(--semantic-color-surface-accent);
                    margin-bottom: var(--spacing-03);
                    border-radius: var(--semantic-border-radius-subtle);
                }

                /* Tablet layout */
                @media screen and (min-width: 644px) {

                    .story-tile {
                        max-width: calc(50% - 10px);
                    }

                    /*Align second tile in list to 
                    the top of container */
                    .story-tile:nth-child(2) {
                        margin-top: 0;
                    }

                }

                /* Desktop layout */
                @media screen and (min-width: 1024px) {

                    .story-tile {
                        display: flex;
                        align-items: center;
                        max-width: 708px;
                    }

                    .story-tile-texts {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: flex-start;
                        margin-left: 30px;
                    }

                    .story-tile:nth-child(2) {
                        margin-top: var(--spacing-04);
                    }

                    .story-tile img, .story-tile picture {
                        min-width: 250px;
                        margin-bottom: 0;
                    }

                }
            </style>

            <article class="story-tile">
                <picture>
                    <source type="image/webp" srcset="${image}">
                    <img src="${fallbackImage}" 
                        alt="${imageAltText}">
                </picture>
                <div class="story-tile-texts">
                    <h3 class="display-3">${title}</h3>
                    <p class="body-1-short">
                        ${description}
                    </p>
                    <primary-button 
                        href="${buttonURL}"
                        label="${buttonLabel}"
                        target="${target}"
                        >
                    </primary-button>
                </div>
            </article>
        `;
    }
}

customElements.define('story-tile', StoryTile);

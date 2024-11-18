/**
 * The page menu is a vertical list of content with max. 6 slots.
 * It automatically highlights the menu corresponding to the current section.
 */

class PageMenu extends HTMLElement {

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
              display: block;
              padding-block: var(--semantic-border-strength-max);
              padding-inline: 0;
            }

            ul {
              display: flex;
              padding-block: 0;
              padding-inline: var(--spacing-04);
              margin: 0;
              list-style: none;
              overflow-x: scroll;
              -ms-overflow-style: none; /* IE, Edge */
              scrollbar-width: none; /* Firefox */
            }

            ul::-webkit-scrollbar {
              display: none;
            }

            @media screen and (min-width: 1024px) {

              ul {
                display: flex;
              }

            }

            
          
          </style>
          <nav aria-labelledby="primary-navigation">
            <ul>
              <li><slot name="slot-1"></slot></li>
              <li><slot name="slot-2"></slot></li>
              <li><slot name="slot-3"></slot></li>
              <li><slot name="slot-4"></slot></li>
              <li><slot name="slot-5"></slot></li>
              <li><slot name="slot-6"></slot></li>
            </ul>
          </nav>
      `;
      
      // Credits: Fork from khuongyolo, see: https://gist.github.com/khuongyolo/4e7d8308c01733961f7ad0c9964db591
      // Find sections and page-menu in document
      const sections = document.querySelectorAll("section[id]");

      // Add an event listener listening for scroll
      window.addEventListener("scroll", navHighlighter);

      function navHighlighter() {
  
        // Get current scroll position
        let scrollY = window.scrollY;
        
        // Now we loop through sections to get height, top and ID values for each
        sections.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = (current.getBoundingClientRect().top + window.scrollY) - window.innerHeight/2;
          const sectionId = current.getAttribute("id");
          
          /*
          - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
          - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
          */
          if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
          ){
            const menuItem = document.querySelector(".navigation menu-item[href*=" + sectionId + "]");
            const shadow = menuItem.shadowRoot.querySelector("a");
            shadow.classList.add("selected");
          } else {
            const menuItem = document.querySelector(".navigation menu-item[href*=" + sectionId + "]");
            const shadow = menuItem.shadowRoot.querySelector("a");
            shadow.classList.remove("selected");
          }
        });
      }

    }

  }
  
  customElements.define('page-menu', PageMenu);
class InlineSub extends HTMLElement {
    constructor() {
        super();
        // Attach a shadow DOM for style encapsulation
        const shadow = this.attachShadow({ mode: 'open' });
  
        // Create a wrapper for the content
        const wrapper = document.createElement('span');
        wrapper.className = 'inl-sub';
        wrapper.innerHTML = this.innerHTML; // Copy inner content
  
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            .inl-sub {
                  color: var(--md-text-color);
                  font-variant: small-caps !important;
                  font-size: 15px !important
                  font-weight: 600 !important;
            }
        `;
  
        // Append to shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
  
        // Clear the original content
        this.innerHTML = '';
    }
  }
  
  // Define the custom element
  customElements.define('inl-sub', InlineSub);
class InlineSub extends HTMLElement {
    constructor() {
        super();
        // Attach a shadow DOM for style encapsulation
        const shadow = this.attachShadow({ mode: 'open' });
  
        // Create a wrapper for the content
        const wrapper = document.createElement('span');
        wrapper.className = 'inl-sub';
        wrapper.innerHTML = this.innerHTML; // Copy inner content
  
        // Link to the external CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'docs/assets/css/extra.css';  // Path to your external CSS file
  
        // Append the link and the wrapper to the shadow DOM
        shadow.appendChild(link);
        shadow.appendChild(wrapper);
  
        // Clear the original content
        this.innerHTML = '';
    }
  }
  
  // Define the custom element
  customElements.define('inl-sub', InlineSub);
  
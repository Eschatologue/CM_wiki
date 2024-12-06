// Define the class for the custom element
class InlineSub extends HTMLElement {
    connectedCallback() {
      // Ensure no default semantics are applied
      this.removeAttribute('role');
  
      // Set default text if the element is empty
      if (!this.textContent.trim()) {
        this.textContent = "Default Inline Subhead";
      }
    }
  }
  
  // Register the custom element
  customElements.define('inl-sub', InlineSub);
  
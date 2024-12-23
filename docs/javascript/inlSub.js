class InlineSub extends HTMLElement {
    constructor() {
        super();
        // Directly use the element without Shadow DOM
        const wrapper = document.createElement('span');
        wrapper.className = 'inl-sub'; // Use the class for styling
        wrapper.innerHTML = this.innerHTML; // Copy inner content

        // Append the wrapper to the custom element
        this.appendChild(wrapper);

        // Clear the original content
        this.innerHTML = '';
    }
}

// Define the custom element
customElements.define('inl-sub', InlineSub);

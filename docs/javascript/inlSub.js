class InlineSub extends HTMLElement {
    constructor() {
        super();
        const wrapper = document.createElement('span');
        wrapper.innerHTML = this.innerHTML; // Copy the content of the <inl-sub>
        this.attachShadow({ mode: 'open' }).appendChild(wrapper);
    }
}

// Register the custom element
customElements.define('inl-sub', InlineSub);



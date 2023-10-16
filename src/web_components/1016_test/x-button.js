class XButton extends HTMLElement {
    constructor() {
        super()
        console.log('constructor', this);
        var shadow = this.attachShadow({ mode: "open" });

        var div = document.createElement("div");
        var style = document.createElement("style");
        shadow.appendChild(style);
        shadow.appendChild(div);

    }

    connectedCallback() {
        console.log('connectedCallback', this);
        this.style.background = 'skyblue';
        this.updateStyle(this)
    }

    disconnectedCallback() {
        console.log('Custom square element removed from page.');
    }

    adoptedCallback() {
        console.log('Custom square element moved to new page.');
    }

    static get observedAttributes() {return ['w', 'l']; }

    updateStyle(elem) {
        var shadow = elem.shadowRoot;
        shadow.querySelector("style").textContent = `
          div {
            width: ${elem.getAttribute("l")}px;
            height: ${elem.getAttribute("l")}px;
            background-color: ${elem.getAttribute("c")};
          }
        `;
    }



}

window.customElements.define('x-button', XButton);
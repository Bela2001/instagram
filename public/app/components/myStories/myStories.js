export var Attributesmystories;
(function (Attributesmystories) {
    Attributesmystories["usuario"] = "usuario";
    Attributesmystories["fotoDePerfil"] = "fotoDePerfil";
})(Attributesmystories || (Attributesmystories = {}));
class myStories extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const variab = { usuario: null, fotoDePerfil: null };
        return Object.keys(variab);
    }
    attributeChangedCallback(propName, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <section class="fondoHistorias">
            <h1 id="nombreUsuario">${this.usuario}</h1>
            <img id="fotoPerfilHistorias" src="${this.fotoDePerfil}"/>
            </section>
        `;
        }
    }
}
customElements.define("my-stories", myStories);
export default myStories;

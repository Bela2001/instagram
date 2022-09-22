export var AttributesMySugerencias;
(function (AttributesMySugerencias) {
    AttributesMySugerencias["usuario"] = "usuario";
    AttributesMySugerencias["fotoDePerfil"] = "fotoDePerfil";
    AttributesMySugerencias["informacion"] = "informacion";
    AttributesMySugerencias["seguir"] = "seguir";
})(AttributesMySugerencias || (AttributesMySugerencias = {}));
class MySugerencias extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const variab = { usuario: null, informacion: null, fotoDePerfil: null, seguir: null };
        return Object.keys(variab);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <section class="fondo">
                    <img id="fotoDePerfilSugerencias" src="${this.fotoDePerfil}"/>
                    <h1 id="usuario">${this.usuario}</h1>
                    <h2 id="informacion">${this.informacion}</h2>
                    <h3 id="seguir">${this.seguir}</h3>
                </section>
            `;
        }
    }
}
customElements.define("my-sugerencias", MySugerencias);
export default MySugerencias;

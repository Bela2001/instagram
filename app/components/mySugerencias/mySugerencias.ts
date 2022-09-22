export enum AttributesMySugerencias {

    usuario = "usuario",
    fotoDePerfil = "fotoDePerfil",
    informacion = "informacion",
    seguir = "seguir"
}

class MySugerencias extends HTMLElement {

    fotoDePerfil?: string;
    usuario?: string;
    informacion?: string;
    seguir?: string;
    
    static get observedAttributes() {
        const variab: Record<AttributesMySugerencias, null> = { usuario: null, informacion: null, fotoDePerfil: null, seguir: null };
        return Object.keys(variab);
    }
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: AttributesMySugerencias, newValue: string) {
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
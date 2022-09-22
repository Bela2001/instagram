export enum Attributesmystories {
    usuario = "usuario",
    fotoDePerfil = "fotoDePerfil"
}

class myStories extends HTMLElement {

    usuario?: string;
    fotoDePerfil?: string;
    
    static get observedAttributes() {
        const variab: Record<Attributesmystories, null> = { usuario: null, fotoDePerfil:null };
        return Object.keys(variab);
    }

    attributeChangedCallback(propName: Attributesmystories, newValue: string) {
        switch (propName) {
        default:
            this[propName] = newValue;
            break;
        }
        this.render();
    }
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
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
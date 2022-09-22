export enum AttributesPerfil {
    username = "username",
    myname = "myname",
    fotoDePerfil = "fotoDePerfil",
    cambiar = "cambiar"
}

class Perfil extends HTMLElement {

    username?: string;
    myname?: string;
    fotoDePerfil?: string;
    cambiar?: string;
    
    static get observedAttributes() {
        const variab: Record<AttributesPerfil, null> = {username: null, myname: null, fotoDePerfil: null, cambiar: null};
        return Object.keys(variab);
    }
    
    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: AttributesPerfil, oldValue: string, newValue: string) {
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
                <section class="fondoPersonalProfile">
                    <img id="fotoDePerfil" src="${this.fotoDePerfil}"/>
                    <h1 id="username">${this.username}</h1>
                    <h2 id="myname">${this.myname}</h2>
                    <h3 id="cambiar">${this.cambiar}</h3>
                </section>
        `;
        }
    }
}

customElements.define("my-perfil", Perfil);
export default Perfil;
export var AttributesPerfil;
(function (AttributesPerfil) {
    AttributesPerfil["username"] = "username";
    AttributesPerfil["myname"] = "myname";
    AttributesPerfil["fotoDePerfil"] = "fotoDePerfil";
    AttributesPerfil["cambiar"] = "cambiar";
})(AttributesPerfil || (AttributesPerfil = {}));
class Perfil extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const variab = { username: null, myname: null, fotoDePerfil: null, cambiar: null };
        return Object.keys(variab);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
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

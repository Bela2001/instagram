class MenuOpciones extends HTMLElement {
    
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
            <section class="barraMenu">
            <img id="instagram" src="./assets/instagram.png"/>   
            <section class="search">
            <p id="buscar">buscar</p>
            <img id="lupa" src="./assets/lupa.png"/>
            </section>
            <img id="home" src="./assets/home.png"/>
            <img id="mensajes" src="./assets/mensajes.png"/>
            <img id="agregarPublicacion" src="./assets/agregarPublicacion.png"/>
            <img id="navegar" src="./assets/navegar.png"/>
            <img id="notificaciones" src="./assets/notificaciones.png"/>
            <img id="fotoDeMiPerfil" src="./assets/perfilRichard.png"/>
            </section>
        `;
        }
    }
}

customElements.define("menu-opciones", MenuOpciones);
export default MenuOpciones;
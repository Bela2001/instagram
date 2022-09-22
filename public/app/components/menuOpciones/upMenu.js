class MenuOpciones extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./styles.css">
            <section class="menuOpciones">
                <img id="heartMenu" src="./assets/logoIG.png"/>
                <img id="heartMenu" src="./assets/heart.png"/>
                <img id="comentariosMenu" src="./assets/comment.png"/>
            </section>
        `;
        }
    }
}
customElements.define("menu-opciones", MenuOpciones);
export default MenuOpciones;

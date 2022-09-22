export var Attributes;
(function (Attributes) {
    Attributes["username"] = "username";
    Attributes["numerolikes"] = "numerolikes";
    Attributes["comentario1"] = "comentario1";
    Attributes["fecha"] = "fecha";
})(Attributes || (Attributes = {}));
class Post extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attris = { username: null, numerolikes: null, comentario1: null, fecha: null };
        return Object.keys(attris);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(prop, oldValue, newValue) {
        switch (prop) {
            default:
                this[prop] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./styles.css">
            <section class="fondoDePantalla">
                <img id="logo" src="./assets/Yourlogo.png"/>
                <h1 id="Username">${this.username}</h1>
                <img id="Moreinfo" src="./assets/Moreinfo.png"/>
                <img id="Group" src="./assets/Group.png"/>
                <h1 id="Likes">${this.numerolikes}</h1>
                <p id="Comentario1">${this.comentario1}</p>
                <p id="fecha">${this.fecha}</p>
        
       
                <img id="Hearticon" src="./assets/Hearticon.png"/>
                <img id="Commenticon" src="./assets/Commenticon.png"/>
             <img id="Shareicon" src="./assets/Shareicon.png"/>
                <img id="Saveicon" src="./assets/Saveicon.png"/>
        
            </section>
        `;
        }
    }
}
customElements.define("my-post", Post);
export default Post;

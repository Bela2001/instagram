import "./components/index.js";
import { Attributes } from "./components/myPost/post.js";
import { AttributesPerfil } from "./components/perfil/perfil.js";
import { AttributesMySugerencias } from "./components/mySugerencias/mySugerencias.js";
import data from "./data.js";
import dataPerfil from "./dataPerfil.js";
import dataMySugerencias from "./dataMySugerencias.js";
class MyContainer extends HTMLElement {
    constructor() {
        super();
        this.post = [];
        this.perfil = [];
        this.menuOpciones = [];
        this.myStories = [];
        this.mySugerencias = [];
        this.attachShadow({ mode: "open" });
        data.forEach((post) => {
            const posts = this.ownerDocument.createElement("my-post");
            posts.setAttribute(Attributes.username, post.username);
            posts.setAttribute(Attributes.numerolikes, post.numerolikes);
            posts.setAttribute(Attributes.comentario1, post.comentario1);
            posts.setAttribute(Attributes.fecha, post.fecha);
            this.post.push(posts);
        });
        dataPerfil.forEach((perfil) => {
            const miPerfil = this.ownerDocument.createElement("my-perfil");
            miPerfil.setAttribute(AttributesPerfil.username, perfil.username);
            miPerfil.setAttribute(AttributesPerfil.fotoDePerfil, perfil.fotoDePerfil);
            miPerfil.setAttribute(AttributesPerfil.myname, perfil.myname);
            miPerfil.setAttribute(AttributesPerfil.cambiar, perfil.cambiar);
            this.perfil.push(miPerfil);
        });
        const menu = this.ownerDocument.createElement("menu-opciones");
        this.menuOpciones.push(menu);
        const nuevaHistoria = this.ownerDocument.createElement("my-stories");
        this.myStories.push(nuevaHistoria);
        dataMySugerencias.forEach((sugerencias) => {
            const misSugerencias = this.ownerDocument.createElement("my-sugerencias");
            misSugerencias.setAttribute(AttributesMySugerencias.usuario, sugerencias.usuario);
            misSugerencias.setAttribute(AttributesMySugerencias.fotoDePerfil, sugerencias.fotoDePerfil);
            misSugerencias.setAttribute(AttributesMySugerencias.informacion, sugerencias.informacion);
            misSugerencias.setAttribute(AttributesMySugerencias.seguir, sugerencias.seguir);
            this.mySugerencias.push(misSugerencias);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = "";
            this.menuOpciones.forEach((menu) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(menu);
            });
            this.myStories.forEach((myStories) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(myStories);
            });
            this.perfil.forEach((perfil) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(perfil);
            });
            this.post.forEach((post) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(post);
            });
            this.mySugerencias.forEach((sugerencias) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(sugerencias);
            });
        }
    }
}
customElements.define("my-container", MyContainer);

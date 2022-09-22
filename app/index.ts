import "./components/index.js";
import Post, { Attributes } from "./components/myPost/post.js";
import Perfil, { AttributesPerfil } from "./components/perfil/perfil.js";
import MenuOpciones from "./components/menuOpciones/menuOpciones.js";
import MyStories, { Attributesmystories } from "./components/myStories/myStories.js";
import MySugerencias, { AttributesMySugerencias } from "./components/mySugerencias/mySugerencias.js";
import data from "./data.js";
import dataPerfil from "./dataPerfil.js";
import dataMySugerencias from "./dataMySugerencias.js";
import dataMyStories from "./dataMyStories.js";

class MyContainer extends HTMLElement {

    post: Post[] = [];
    perfil: Perfil[] = [];
    menuOpciones: MenuOpciones[] = [];
    myStories: MyStories[] = [];
    mySugerencias: MySugerencias[] = [];

    constructor() {
        super();
        this.attachShadow({mode:"open"});

        data.forEach((post)=>{
            const posts = this.ownerDocument.createElement("my-post") as Post;

            posts.setAttribute(Attributes.username, post.username);
            posts.setAttribute(Attributes.numerolikes, post.numerolikes);
            posts.setAttribute(Attributes.comentario1, post.comentario1);
            posts.setAttribute(Attributes.fecha, post.fecha);
            this.post.push(posts);
        });

        dataPerfil.forEach((perfil)=> {
            const miPerfil = this.ownerDocument.createElement("my-perfil") as Perfil;

            miPerfil.setAttribute(AttributesPerfil.username, perfil.username);
            miPerfil.setAttribute(AttributesPerfil.fotoDePerfil, perfil.fotoDePerfil);
            miPerfil.setAttribute(AttributesPerfil.myname, perfil.myname);
            miPerfil.setAttribute(AttributesPerfil.cambiar, perfil.cambiar);
            this.perfil.push(miPerfil);
        });
        
        const menu = this.ownerDocument.createElement("menu-opciones") as MenuOpciones;
        this.menuOpciones.push(menu);

        const nuevaHistoria = this.ownerDocument.createElement("my-stories") as MyStories;
        this.myStories.push(nuevaHistoria);

        dataMySugerencias.forEach((sugerencias)=> {
            const misSugerencias = this.ownerDocument.createElement("my-sugerencias") as MySugerencias;

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

            this.menuOpciones.forEach((menu)=> {
                this.shadowRoot?.appendChild(menu);
            });
            this.myStories.forEach((myStories)=> {
                this.shadowRoot?.appendChild(myStories);
            });

            this.perfil.forEach((perfil)=> {
                this.shadowRoot?.appendChild(perfil);
            });

            this.post.forEach((post)=> {
                this.shadowRoot?.appendChild(post);
            });

            this.mySugerencias.forEach((sugerencias)=> {
                this.shadowRoot?.appendChild(sugerencias);
            });
        }
    }
}

customElements.define("my-container", MyContainer);
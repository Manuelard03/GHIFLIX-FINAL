import { agregarAFavoritos, obtenerFavoritos, eliminarFavorito } from "./session.js";

const TIENDA = "tienda";

export class Producto {
    #id = "";
    #image = "";
    constructor(id, image) {
        this.#id = id;
        this.#image = image;
    }

    render() {
        const image = document.createElement("img");
        image.id = this.#obtenerId();
        image.src = this.#image;
        image.classList.add("image");
        return image;
    }

    addClickListener() {
        const id = this.#obtenerId();
        const image = document.querySelector("#" + id);
        image.addEventListener("click", async () => {
            agregarAFavoritos(this.#id);
            await cargarFavoritos();
        })
    }

    #obtenerId() {
        return "image-" + this.#id;
    }
}

export const cargarFavoritos = async () => {
    const divFavoritos = document.querySelector("#favoritos");
    divFavoritos.innerHTML = "";

    const favoritosIds = obtenerFavoritos();

    const tienda = await cargarTienda();

    for (const producto of tienda) {
        if(favoritosIds.includes(producto.id)) {
            const image = document.createElement("img");
            image.src = producto.image;
            image.classList.add("image");
            divFavoritos.appendChild(image);

            image.addEventListener("click", () => {
                eliminarFavorito(producto.id);
                cargarFavoritos();
            })
        }
    }
}

export const cargarTienda = async () => {
    const tienda = localStorage.getItem(TIENDA);

    if (tienda === null) {
        const request = await fetch("https://raw.githubusercontent.com/Manuelard03/GHIFLIX-FINAL/main/assets/json/catalogo-completo.json");
        const data = await request.json();

        localStorage.setItem(TIENDA, JSON.stringify(data));
        return data;
    }

    return JSON.parse(tienda);
}
import { agregarAFavoritos, obtenerFavoritos, eliminarFavorito } from "./session.js";

const TIENDA = "tienda";

export class Pelicula {
    #id = "";
    #card = "";
    constructor(id, card) {
        this.#id = id;
        this.#card = card;
    }

    render() {
        const image = document.createElement("img");
        image.id = this.#obtenerId();
        image.src = this.#card;
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
    const divFavoritos = document.querySelector("#buscados");
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
    const catalogo = localStorage.getItem(CATALOGO);

    if (catalogo === null) {
        const request = await fetch("https://raw.githubusercontent.com/Manuelard03/GHIFLIX-FINAL/main/assets/json/home.json");
        const data = await request.json();

        localStorage.setItem(CATALOGO, JSON.stringify(data));
        return data;
    }

    return JSON.parse(catalogo);
}
import { estaEnSesion, cerrarSesion } from "./session.js"
import { cargarTienda, Producto, cargarFavoritos } from "./utils.js"

const render = async () => {
    estaEnSesion();
    
    const boton = document.querySelector("#cerrar");

    boton.addEventListener("click", () => {
        cerrarSesion();
    })

    const tienda = await cargarTienda();

    await cargarFavoritos();

    const listaTienda = document.querySelector("#lista-productos");

    for (const producto of tienda) {
        const item = new Producto(producto.id, producto.image);
        const image = item.render();
        listaTienda.appendChild(image);
        item.addClickListener();
    }

}

window.onload = render;
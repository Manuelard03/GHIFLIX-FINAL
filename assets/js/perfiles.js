import { estaEnSesion, cerrarSesion } from "./session.js"

const render = async () => {
    estaEnSesion();
    
    const boton = document.querySelector("#cerrar");

    boton.addEventListener("click", () => {
        cerrarSesion();
    })

}

window.onload = render;
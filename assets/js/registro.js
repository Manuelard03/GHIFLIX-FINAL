import { registrarPersona, actualizarLista } from "./session.js"

const render = async () => {
    actualizarLista();

    const formulario = document.querySelector("#formulario-registro");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const correo = event.target.correo.value;
        const contrasena = event.target.contrasena.value;

        registrarPersona(correo, contrasena);
        actualizarLista();
    })

}

window.onload = render;
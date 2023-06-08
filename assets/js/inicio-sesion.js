import { validarUsuario } from "./session.js"


const render = async () => {
    const formulario = document.querySelector("#formulario-login");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const correo = event.target.correo.value;
        const contrasena = event.target.contrasena.value;

        validarUsuario(correo, contrasena);
    })

    const botonRegistro = document.querySelector("#boton-registro");
    botonRegistro.addEventListener("click", (event) => {
        window.location.href = "./registro.html"
    })
}

window.onload = render;
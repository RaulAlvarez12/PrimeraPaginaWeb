document.addEventListener("DOMContentLoaded", ()=>{ //Funcion flecha anonima
    
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (event) =>{

        event.preventDefault();
        const {correo, contrasenna} = obtenerDatosFormulario();
        const esValido = validarContrasenna(contrasenna) && validarCorreo(correo);
        esValido ? manejarExito(): manejarError();

    });

});
//Funcion flecha con nombre
const obtenerDatosFormulario=()=>{
    const correo = document.getElementById("correo").value.trim();
    const contrasenna = document.getElementById("contrasenna").value.trim();
    return {correo, contrasenna};
}

const validarContrasenna=(contrasenna) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/.test(contrasenna);

const validarCorreo=(correo) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    
const manejarExito=()=>{
    alert("Iniciar sesión exitoso");
    limpiarCamposTexto();
};

const manejarError=()=>{
    alert("Datos no son válidos");
};

const limpiarCamposTexto=()=>{
    const campos = document.querySelectorAll("#formulario input[type='email'], #formulario input[type='password']");
    campos.forEach((campo) => campo.value="")
};
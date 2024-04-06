document.addEventListener("DOMContentLoaded", ()=>{ //Funcion flecha anonima
    
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", (event) =>{

        event.preventDefault();
        const {nombre, genero, correo, contrasenna, cantMascotas, fecha} = obtenerDatosFormulario();
        const esValido = validarContrasenna(contrasenna) && validarCorreo(correo);
        const camposValidos = validarNombre(nombre) && validarGenero(genero) && validarCantMascotas(cantMascotas) && validarFecha(fecha);
        let resultadoFinal = esValido && camposValidos;
        resultadoFinal ? manejarExito(): manejarError();

    });

});
//Funcion flecha con nombre
const obtenerDatosFormulario=()=>{
    const correo = document.getElementById("correo").value.trim();
    const contrasenna = document.getElementById("contrasenna").value.trim();
    return {correo, contrasenna};
}

const validarNombre=(nombre) => /^\b(?=.*[A-Z])(?=.*[a-z])[a-zA-Z]{3,20}$/.test(nombre) //Valida que comience con mayúscula y que solo contenga letras

const validarGenero=(genero)=> /^(?:no|masculino|femenino)$/.test(genero);

const validarCantMascotas=(cantMascotas)=> /^[\d]?$/.test(cantMascotas);

const validarFecha=(fecha)=> /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/.test(fecha);

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
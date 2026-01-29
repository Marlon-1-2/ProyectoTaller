import '../css/style.css'; 
import 'flowbite';

//seleccionar todos los input y asignarlos a constantes
const nombre = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPasword = document.getElementById("confirmPassword");
const formulario = document.getElementById("formulario");

//expreciones regulares para la validacion
const patrones ={
    usuario: /^[a-zA-ZÀ-ÿ\s]{3,16}$/, // Letras y espacios (3-16 caracteres)
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Formato email
    clave: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // Mínimo 8 caracteres, 1 letra y 1 número
};

//funcion para habilitar el mensaje de error}
const mostrarError =(input, idError)=>{
    const mensaje = document.getElementById(idError);

    //si el mensaje existe le quitamos la clase hidden para que sea visible
    if(mensaje) mensaje.classList.remove("hidden");
    input.classList.add("border-red-500");
    input.classList.remove("border-slate-700");

};

//funcion para eliminar error
const eliminarError = (input, idError)=>{
    const mensaje = document.getElementById(idError);
    if(mensaje) mensaje.classList.add("hidden");
    input.classList.remove("border-red-500");
    input.classList.add("border-green-500");

};

//manejar el evento principal que es la validacion
formulario.addEventListener("submit", (e) =>{
    e.preventDefault(); //evita que la pgina se actualiza
    let formularioValido = true;
    //validar del nombre
    if(!patrones.usuario.test(nombre.value)){
        mostrarError(nombre, "error-username");
        formularioValido=false;
    }else{
        eliminarError(nombre, "error-username");
    }
    //validacion del email
    if(!patrones.correo.test(email.value)){
        mostrarError(email, "error-email");
        formularioValido=false;
    }else{
        eliminarError(email, "error-email");
    }
    //validacion del pasword
    if(!patrones.clave.test(password.value)){
        mostrarError(password, "error-password");
        formularioValido=false;
    }else{
        eliminarError(password, "error-password");
    }
    //validacion de que las contraseñas sean iguales
    if(password.value!==confirmPasword.value || confirmPasword.value===""){
        mostrarError(confirmPasword, "error-confirmPassword");
        formularioValido=false;
    }else{
        eliminarError(confirmPasword, "error-confirmPassword");
    }
    if(formularioValido){
        alert("Registro Exitoso! :)");
        //limnpiar los inputd
        formulario.reset();
        [nombre, email, password, confirmPasword].forEach(input => {
        input.classList.remove("border-green-500", "border-red-500");
        input.classList.add("border-slate-700");
    });
    }
});
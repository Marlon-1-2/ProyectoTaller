import '../css/style.css'; 
import 'flowbite';


// Función para abrir el modal de contacto
export const abrirContacto = () => {
    const overlay = document.getElementById("overlayContacto");
    const modal = document.getElementById("modalContacto");

    if (overlay && modal) {
        overlay.style.display = "block";
        modal.style.display = "flex";
    }
};

// Función para cerrar el modal de contacto
export const cerrarContacto = () => {
    const overlay = document.getElementById("overlayContacto");
    const modal = document.getElementById("modalContacto");

    if (overlay && modal) {
        overlay.style.display = "none";
        modal.style.display = "none";
    }
};

// Permitir cerrar con tecla ESC
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        cerrarContacto();
    }
});

// Inicialización opcional: si quieres que todos los enlaces con clase .btn-contacto abran el modal
document.addEventListener("click", (e) => {
    const boton = e.target.closest(".btn-contacto");
    if (boton) {
        abrirContacto();
    }
});
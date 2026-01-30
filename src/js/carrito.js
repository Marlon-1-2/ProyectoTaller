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

// Permitir cerraron tecla ESC
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        cerrarContacto();
    }
});

document.addEventListener("click", (e) => {
    const boton = e.target.closest(".btn-contacto");
    if (boton) {
        abrirContacto();
    }
});





const lista = document.getElementById("lista-carrito");
const totalPago = document.getElementById("total-compras");


//Traer la información de la memoria del localStorage
let consolasSony = JSON.parse(localStorage.getItem("carrito-mandos")) || [];

const actualizarContador = () => {
    const contador = document.getElementById("carrito-contador");
    if (contador) contador.innerText = consolasSony.length;
};

const mostrarCarrito = () => {
    lista.innerHTML = "";
    let total = 0;

    consolasSony.forEach((consolas, index) => {
        total += parseFloat(consolas.Precio);
        lista.innerHTML += `
            <div class="flex justify-between items-center border-b border-slate-700 py-4">
                <p class="font-bold text-2xl">${consolas.Modelo}</p>
                <div class="flex items-center gap-4">
                    <span class="text-yellow-400 font-bold">$${consolas.Precio}</span>
                    <button data-index="${index}" class="btn-eliminar text-red-500 text-x">Eliminar</button>
                </div>
            </div>
        `;
    });
    totalPago.innerText = `$${total.toFixed(2)}`;
    actualizarContador();
};

lista.addEventListener("click", (e) => {
    const boton = e.target.closest(".btn-eliminar");
    if (boton) {
        const index = parseInt(boton.dataset.index);
        //Eliminar el lego del carrito basándonos en la posición seleccionada
        consolasSony.splice(index, 1);
        //Actualizar los datos
        localStorage.setItem("carrito-mandos", JSON.stringify(consolasSony));
        mostrarCarrito();
    }
});


const btnLimpiar = document.getElementById("btn-limpiar");

btnLimpiar.addEventListener("click", () => {
    consolasSony = [];

    localStorage.removeItem("carrito-mandos");
    mostrarCarrito();
});

mostrarCarrito();

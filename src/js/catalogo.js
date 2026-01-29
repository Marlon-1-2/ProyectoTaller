import "../css/style.css";
import "flowbite";
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

const banner = document.querySelector("#banner");
const cambiarAnuncui = () => {
    if (banner.innerText === "ENVIO GRATUITO EN PEDIDOS SUPERIORES A $50") {
        banner.innerText = "Rebajas hasta el 50% - compra ahora";
        banner.classList.remove("bg-black");
        banner.classList.add("bg-red-700");
    } else {
        banner.innerText = "ENVIO GRATUITO EN PEDIDOS SUPERIORES A $50";
        banner.classList.remove("bg-red-700");
        banner.classList.add("bg-black");
    }
};
banner.addEventListener("click", cambiarAnuncui);

const contenedor = document.getElementById("contenedor-consolas");

//funcion para cargar las consolas

const cargarTienda = async () => {
    try {
        const respuesta = await fetch("/data/mandos.json");
        //verificar la respuesta
        if (!respuesta.ok) throw new Error("Error en la red");
        //conervit el cuerpo de la respuesta a un objeto json q se pueda usar
        const datos = await respuesta.json();
        //limpiar en contenedor
        contenedor.innerHTML = "";
        //recorrer la lista de mandos
        datos.forEach((mandos) => {
            contenedor.innerHTML += `
                <div class="p-8 border rounded-lg dark:border-white hover:border-red-500 transition-colors group bg-black shadow-xl">
                    <div class="relative overflow-hidden rounded-lg h-32 mb-4 bg-gray-700">
                        <img class="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500" 
                            src="${mandos.imagen}" alt="${mandos.Modelo}">
                    </div>

                    <div class="flex flex-col justify-between">
                        <div>
                            <h1 class="font-bold text-white uppercase text-sm line-clamp-1 mb-1">${mandos.Modelo}</h1>
                            <span class="text-[15px] bg-gray-600 text-black px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">
                                ${mandos.Precio}
                            </span>
                        </div>
                        <div class="flex items-center justify-between mt-6">
                            <button 
                            data-titulo="${mandos.Modelo}" 
                            data-precio="${mandos.Precio}"
                            class=" btn-agregar  bg-gray-600 hover:bg-white text-black p-2 rounded-lg transition-all active:scale-95">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });
    } catch (error) {
        console.log("Error", error);
        contenedor.innerHTML = `<p class="text-red-700 text-center col-span-full">Verificar la conexion</p>`;
    }
};
cargarTienda();

//localStore
//intentar recuperar los libros elegidos por el usuario y si no elgine ninguno no nos devuelve nada
let carrito = JSON.parse(localStorage.getItem("carrito-mandos")) || [];
//funcuion para actualizar el carrito
const actualizarContador = () => {
    const contador = document.getElementById("carrito-contador");
    if (contador) contador.innerText = carrito.length;
};
actualizarContador();

contenedor.addEventListener("click", (e) => {
    const boton = e.target.closest(".btn-agregar");
    if (boton) {
        const title = boton.dataset.titulo;
        const price = boton.dataset.precio;

        //crear un objeto con la informacion del libro
        const modelo = {
            Modelo: title,
            Precio: price,
        };

        //agregar al carrito
        carrito.push(modelo);

        localStorage.setItem("carrito-mandos", JSON.stringify(carrito));
        actualizarContador();
    }
});



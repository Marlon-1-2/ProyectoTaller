import '../css/style.css';
import 'flowbite';

document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('section button');
    let contador = 0;

    botones.forEach((boton) => {
        boton.addEventListener('click', () => {
            const nombreProducto = boton.parentElement.querySelector('h3').textContent;
            contador++;
            alert(nombreProducto + " agregado. Total en carrito: " + contador);

            boton.style.backgroundColor = boton.style.backgroundColor === 'blue' ? 'green' : 'blue';

            const listaResumen = document.getElementById('listaResumen');
            const contadorTexto = document.getElementById('contador');
            if (listaResumen && contadorTexto) {
                const item = document.createElement('li');
                item.textContent = nombreProducto;
                listaResumen.appendChild(item);
                contadorTexto.textContent = "Consolas añadidas: " + contador;
            }
        });
    });

    const botonesFiltro = document.querySelectorAll('#filtros button');
    const tarjetas = document.querySelectorAll('section .bg-gradient-to-r');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            const gen = boton.dataset.generacion;

            tarjetas.forEach(tarjeta => {
                const nombre = tarjeta.querySelector('h3').textContent.toLowerCase();

                if (gen === '1') {
                    tarjeta.style.display = nombre.includes('playstation 1') || nombre.includes('playstation 2') ? 'block' : 'none';
                } else if (gen === '2') {
                    tarjeta.style.display = nombre.includes('playstation 3') || nombre.includes('playstation 4') || nombre.includes('playstation 5') ? 'block' : 'none';
                } else if (gen === 'portatil') {
                    tarjeta.style.display = nombre.includes('psp') || nombre.includes('vita') ? 'block' : 'none';
                }
            });
        });
    });

    const mostrarTodo = document.getElementById('mostrarTodo');
    if (mostrarTodo) {
        mostrarTodo.addEventListener('click', () => {
            tarjetas.forEach(t => t.style.display = 'block');
        });
    }
});
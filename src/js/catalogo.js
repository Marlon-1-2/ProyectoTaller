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

});
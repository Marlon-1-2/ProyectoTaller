import '../css/style.css'; 
import 'flowbite';

        function abrirContacto() {
            document.getElementById("overlayContacto").style.display = "block";
            document.getElementById("modalContacto").style.display = "flex";
        }

        function cerrarContacto() {
            document.getElementById("overlayContacto").style.display = "none";
            document.getElementById("modalContacto").style.display = "none";
        }
    

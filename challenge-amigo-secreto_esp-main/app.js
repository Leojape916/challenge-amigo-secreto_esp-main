// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Aqui se guardan los nombres
let amigos = [];

// Función que se llama cuando se hace clic en el botón
function agregarAmigo() {
    // Obtenemos el valor del input
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Eliminar espacios extra

    // Si el input no está vacío, agregamos el nombre al array
    if (nombre !== "") {
        amigos.push(nombre);
        console.log(amigos); 

        // Limpiamos el campo de entrada xd
        input.value = '';
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}
// Array donde se guardarán los nombres
let amigos = [];

// Función que se llama cuando se hace clic en el botón
function agregarAmigo() {
    // Obtener el valor del input
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Eliminar espacios extra

           amigos.push(nombre);
        console.log(amigos)
    
}

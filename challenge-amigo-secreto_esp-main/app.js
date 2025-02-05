// Aquí se guardan los nombres
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

        // Limpiamos el campo de entrada
        input.value = '';

        // Actualizamos la lista en HTML
        mostrarLista();
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

// Función para mostrar los amigos en la lista HTML
function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de actualizarla

    // Crear un elemento <li> por cada amigo y agregarlo a la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
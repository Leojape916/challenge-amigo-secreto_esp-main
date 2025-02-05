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

// Mostramos los amigos en una lista
 function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de actualizarla

    // Crear un elemento <li> para cada amigo
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Elegimos un amigo al azar
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostramos el amigo sorteado en el <ul> de resultados xd
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 
    const liResultado = document.createElement('li');
    liResultado.textContent = `Amigo secreto: ${amigoSorteado}`;
    resultado.appendChild(liResultado);
}
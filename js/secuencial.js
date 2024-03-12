var salirBoton = document.getElementById("salirBoton");
var container = document.getElementById("container");

function realizarBusqueda() {
    var numeros = document.getElementById("numInput").value.split(',').map(function(item) {
        return parseInt(item.trim());
    });

    var numeroBuscado = prompt("Ingrese el número que desea buscar:");

    if (!isNaN(numeroBuscado)) {
        var resultado = busquedaSecuencial(numeros, parseInt(numeroBuscado));
        mostrarResultados(numeros, resultado, parseInt(numeroBuscado));
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

function busquedaSecuencial(lista, valorBuscado) {
    for (var i = 0; i < lista.length; i++) {
        if (lista[i] === valorBuscado) {
            return i;
        }
    }
    return -1;
}

function mostrarResultados(lista, indiceEncontrado, valorBuscado) {
    var resultados = document.getElementById("resultados");

    container.classList.add("rotate"); // Aplicar la rotación al contenedor

    setTimeout(function() {
        container.classList.remove("rotate"); // Eliminar la clase de rotación después de la animación
        if (indiceEncontrado !== -1) {
            resultados.innerHTML = `Números ingresados: ${lista.join(', ')}<br>El número ${valorBuscado} se encuentra en la posición ${indiceEncontrado + 1}.`;
        } else {
            resultados.innerHTML = `Números ingresados: ${lista.join(', ')}<br>El número ${valorBuscado} no fue encontrado en la lista.`;
        }
        salirBoton.style.display = "block";
    }, 500); // 500 milisegundos, ajusta según la duración de tu animación
}

function reiniciarPrograma() {
    container.classList.remove("rotate"); // Asegurarse de que no haya rotación activa
    document.getElementById("numInput").value = ""; // Limpiar el campo de entrada
    document.getElementById("resultados").innerHTML = ""; // Limpiar los resultados
    salirBoton.style.display = "none"; // Ocultar el botón salir
}

function salir() {
    alert("¡Gracias por usar la aplicación de búsqueda secuencial!");
    reiniciarPrograma(); // Llamar a la función para reiniciar el programa
    // Puedes agregar más acciones de reinicio si es necesario
}
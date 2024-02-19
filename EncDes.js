

function eliminarAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function encriptar() {
    const texto = eliminarAcentos(document.getElementById('inputText').value.toLowerCase());
    const encriptado = texto.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encriptado;
    document.getElementById('inputText').value = texto;
}
 
function desencriptar() {
    const texto = eliminarAcentos(document.getElementById('inputText').value.toLowerCase());
    const desencriptado = texto.replace(/enter/g, 'e')
                                .replace(/imes/g, 'i')
                                .replace(/ai/g, 'a')
                                .replace(/ober/g, 'o')
                                .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = desencriptado;
}

function copiar() {
    const texto = document.getElementById('outputText');
    texto.select();
    navigator.clipboard.writeText(texto.value)
    .then(() => {
        texto.value = ''; // Limpia el área de texto
        alert('El texto ha sido copiado al portapapeles.'); // Muestra un mensaje de éxito
        setTimeout(() => {
            location.reload(); // Refresca la página después de un pequeño retraso
        }, 500); // Tiempo de espera en milisegundos (ejemplo: 500ms)
    })
    .catch(err => {
        console.error('No se pudo copiar el texto: ', err);
    });
}



document.addEventListener("DOMContentLoaded", function() {
     // Al cargar la página, ocultar card-textbox y card-button
    ocultarElemento(".card-textbox");
    ocultarElemento(".card-button");
     // Función para mostrar un elemento
    function mostrarElemento(selector) {
        var elementos = document.querySelectorAll(selector);
        elementos.forEach(function(elemento) {
            elemento.style.display = "block";
        });
    }
     // Función para ocultar un elemento
    function ocultarElemento(selector) {
        var elementos = document.querySelectorAll(selector);
        elementos.forEach(function(elemento) {
            elemento.style.display = "none";
        });
    }
     // Función para mostrar card-textbox y card-button
    function mostrarResultado() {
        mostrarElemento(".card-textbox");
        mostrarElemento(".card-button");
    }
     // Función para ocultar card-msg y card-imagen
    function ocultarMensaje() {
        ocultarElemento(".card-msg");
        ocultarElemento(".card-imagen");
    }
     // Evento clic en el botón "Encriptar"
    document.getElementById("encryptBtn").addEventListener("click", function() {
        mostrarResultado();
        ocultarMensaje();
    });
     // Evento clic en el botón "Desencriptar"
    document.getElementById("decryptBtn").addEventListener("click", function() {
        mostrarResultado();
        ocultarMensaje();
    });
});

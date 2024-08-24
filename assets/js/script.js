// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const encryptButton = document.getElementById("encrypt-btn");
    const decryptButton = document.getElementById("decrypt-btn");
    const copyButton = document.getElementById("copy-btn");
    const inputText = document.getElementById("input-text");
    const outputText = document.getElementById("output-text");

    // Función para encriptar el texto
    function encryptText(text) {
        let encryptedText = text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        return encryptedText;
    }

    // Función para desencriptar el texto
    function decryptText(text) {
        let decryptedText = text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return decryptedText;
    }

    // Evento para encriptar
    encryptButton.addEventListener("click", function() {
        const text = inputText.value.toLowerCase();
        if (text) {
            outputText.textContent = encryptText(text);
        } else {
            outputText.textContent = "Ningún mensaje fue encontrado";
        }
    });

    // Evento para desencriptar
    decryptButton.addEventListener("click", function() {
        const text = inputText.value.toLowerCase();
        if (text) {
            outputText.textContent = decryptText(text);
        } else {
            outputText.textContent = "Ningún mensaje fue encontrado";
        }
    });

    // Evento para copiar el texto
    copyButton.addEventListener("click", function() {
        const text = outputText.textContent;
        if (text && text !== "Ningún mensaje fue encontrado") {
            navigator.clipboard.writeText(text).then(function() {
                alert("Texto copiado al portapapeles");
            }, function(err) {
                alert("Error al copiar el texto: " + err);
            });
        }
    });
});

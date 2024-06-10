function verificacion(input) {
    if (input === "Hola Mundo") {
        return (true
    } else {
        return (false)
    }
}

function verificarTexto() {
    const input = document.getElementById('inputText').value;
    if (verificacion(input) === true) {
        document.body.style.backgroundColor = "green";
    } else {
        document.body.style.backgroundColor = "red";
    }
}

module.exports = verificacion;
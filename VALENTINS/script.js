function responderSi() {
    // Redirigir a la página "cursi.html" cuando se presiona el botón verde
    window.location.href = "cursi.html";
}

function responderNo() {
    var noButton = document.getElementById("noButton");
    var siButton = document.getElementById("siButton");

    if (noButton.innerText === "No") {
        noButton.innerText = "No seas cruel";
    } else {
        // Puedes agregar más frases crueles según tus preferencias
        var frasesCruel = [
            "Prepárate para las consecuencias.",
    "No juegues conmigo...",
    "Te arrepentirás de esta decisión.",
    "Las cosas se pondrán difíciles para ti.",
    "Haces una elección peligrosa.",
    "Vas a lamentar decirme que no.",
    "No sabes en lo que te estás metiendo.",
    "Mis métodos pueden volverse... interesantes.",
    "Estás cavando tu propia tumba.",
    "No subestimes mi capacidad de venganza.",
    "Puedo ser tu peor pesadilla.",
    "Hoy dices no, mañana suplicas por perdón.",
    "Este rechazo no quedará impune.",
    "No deberías haberme provocado.",
    "Te esperan tiempos difíciles."
        ];

        var randomIndex = Math.floor(Math.random() * frasesCruel.length);
        noButton.innerText = frasesCruel[randomIndex];

        // Aumentar el tamaño del botón verde (SI) desde el primer clic
        siButton.style.fontSize = (parseInt(siButton.style.fontSize) || 16) + 10 + "px";
    }
}

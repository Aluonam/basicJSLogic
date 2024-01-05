
function* director() {
    yield "Comienza";
    yield "Tres";
    yield "Dos";
    yield "Uno";
    yield "ACCIÓN";
}

let countDown = director();

console.log(countDown.next())


let countdownElement = document.getElementById('countdown');

function startCountdown() {
    let nextValue = countDown.next();

    if (!nextValue.done) {
        countdownElement.textContent = nextValue.value;

        // Llamada recursiva para el siguiente paso en la cuenta regresiva
        setTimeout(startCountdown, 1000);
    } else {
        countdownElement.textContent = "¡Listo!";
    }
}

// Iniciar la cuenta regresiva después de 2 segundos
setTimeout(startCountdown, 2000);
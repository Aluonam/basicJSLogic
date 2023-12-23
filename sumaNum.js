// Escribe un número y suma los números de forma iterativa

const numeroUsuario = prompt("Escribe un número para hacer una suma iterativa:")
const numeroParaIterar = parseInt(numeroUsuario);

const sumaIterativa = (numeroParaIterar) => {

    let sumaTotal = 0

    for( let i=0; i<=numeroParaIterar; i++){
        sumaTotal= sumaTotal + i
    }
    document.write("<br> La suma total es: ",sumaTotal)
}

sumaIterativa(numeroParaIterar)

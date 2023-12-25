
const palabraUsuario = prompt("Escribe las dos palabras que consideras palíndromo. Ejemplo: eva-ave")

const palindromoNoExacto = (palabraUsuario)=>{
    const palabraAlReves = palabraUsuario.split("").reverse().join("")

}

palindromoNoExacto(palabraUsuario)

const palabraUsuario = prompt("Escribe las dos palabras que consideras palíndromo. Ejemplo: eva-ave")

const palindromoNoExacto = (palabraUsuario)=>{
    const palabraAlReves = palabraUsuario.split("").reverse().join("")
    
    if(palabraUsuario===palabraAlReves){
        console.log("es palindromo")
    }else{
        console.log("no lo es")
    }
}

palindromoNoExacto(palabraUsuario)
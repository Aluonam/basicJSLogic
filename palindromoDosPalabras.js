// este programita ejecuta una función que permite averiguar si dos palabras se leen igual al derecho o al revés la una de la otra, como ave-eva o amor-roma.

const palabraUsuario = prompt("Escribe un palíndromo con guión como ave-eva")

const palindromoNoExacto = (palabraUsuario)=>{
    const palabraAlReves = palabraUsuario.split("").reverse().join("")
    
    if(palabraUsuario===palabraAlReves){
        document.write("es palindromo")
    }else{
        document.write("no lo es")
    }
}

palindromoNoExacto(palabraUsuario)
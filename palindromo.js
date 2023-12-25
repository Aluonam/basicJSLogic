
const palabra = prompt("Escribe una palabra para comprobar si es un palíndromo")

const palindromo = ()=>{
    const delReves = palabra.split("").reverse()
    console.log(delReves)
}

palindromo()
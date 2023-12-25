
const palabra = prompt("Escribe una palabra para comprobar si es un palíndromo")

const palindromo = (palabra)=>{
    const palabraIntroducida = palabra.split("")
    const delReves = palabra.split("").reverse()
    
    if(palabraIntroducida.join("") === delReves.join("")){
        document.write("Esta palabra SI es un palíndromo")
    } 
    else{
        document.write("Esta palabra NO es un palíndromo")
    }
}

palindromo(palabra)
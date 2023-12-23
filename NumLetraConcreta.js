// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

const fraseUsuario = prompt("Escribe una frase para saber cuantas veces aparece la letra A: ")

const letraA = (fraseUsuario)=>{
    const letras= fraseUsuario.split("").filter((letra)=>letra == "a")
    document.write("<br> El número de veces que aparece la letra A es: ",letras.length)
  }
  
  letraA(fraseUsuario)
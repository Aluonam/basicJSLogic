
// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
const letraA = (frase)=>{
    const letras= frase.split("").filter((letra)=>letra == "a")
    console.log(letras.length)
  }
  
  letraA("hola que tal estas")
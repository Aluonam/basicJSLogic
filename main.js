// Escribe un programa que pida un número y diga si es divisible por 2

const divisible = (num)=>{
  const isDivisible = num%2 === 0
  console.log(isDivisible)
}
  
 divisible(5)
 //false



// Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
const letraA = (frase)=>{
  const letras= frase.split("").filter((letra)=>letra == "a")
  console.log(letras.length)
}

letraA("hola que tal estas")


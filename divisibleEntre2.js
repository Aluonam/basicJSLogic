// Escribe un programa que pida un número y diga si es divisible por 2

const num = prompt("Escribe un número ¿Será divisible entre dos?")
const divisible = (num)=>{
    const isDivisible = num%2 === 0
    document.write("<br>","El número es divisible: ",isDivisible)
  }
    
   divisible(num)
   //false
  
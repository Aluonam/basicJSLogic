// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 
//(sólo hay que comprobar si lo es por uno de los cuatro)

const number = prompt("Escribe un número ¿Será divisible entre 2, 3, 5 o 7?") 

const divisibleNum = (number)=>{
    const numerosDivision = [2, 3, 5, 7]
    const division = numerosDivision.some((element)=>num % element === 0)
    document.write("<br> Es divisible entre 2, 3, 5 o 7: ",division)
          
  }
  
  divisibleNum(number)





// Escribe un programa que pida una frase y escriba las vocales que aparecen
const vocalesFrase = (frase) =>{
  
  const vocales = ["a","e","i","o","u"]
  const existeVocal = []
  frase.split("").map((element)=>{
      if(vocales.includes(element)){
          existeVocal.push(element)
      }
    })
  
  //si no queremos que salgan repetidas usar new Set()
  const vocalUnica = [...new Set(existeVocal)]
  console.log(vocalUnica)
 
}
vocalesFrase("mi nombre es pau")

// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

const divisibleNum = (num)=>{
    const numerosDivision = [2, 3, 5, 7]
   const division = numerosDivision.some((element)=>num % element === 0)
   console.log(division)
          
  }
  
  divisibleNum(287)
  // false
  


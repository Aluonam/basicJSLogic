
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
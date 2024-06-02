const analyzer = {  

  getWordCount: (text) => {
    if(!text) return 0;
    return text.trim().split(/\s+/).length;
  },

  getCharacterCount: (text) => {
    if(!text) return 0;
    return text.length;
  },


  getCharacterCountExcludingSpaces: (text) => {
     if(!text) return 0;
     const signosDePuntuacion = [".", ",", ":", ";", "¿", "?", "¡", "!"];
     let charCountExSpa = 0;

     for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (!signosDePuntuacion.includes(char) && char !==' '){
          charCountExSpa++;
      }
     }
      return charCountExSpa;
    },
  
  getAverageWordLength: (text) => {    
    if(!text || text.trim().length === 0) return 0; // verifica si el texto está vacio
    const words = text.trim().split(/\s+/); //divide el texto en palabras
    const totalWords = words.length; //calcula el número total de palabras
    const sumLengths = words.reduce ((sum,word) => sum + word.length, 0); //suma las longitudes de todas las palabras
    const averageLength = totalWords > 0 ? parseFloat ((sumLengths / totalWords).toFixed(2)) : 0; //calcula la longitud promedio de palabras
    
    return averageLength;
                         
  },


  getNumberCount: (text) => {
    if(!text) return 0;
    const todosLosNumeros = /\d/g; //Define una expresión regular para encontrar todos los dígitos (del 0 al 9)
    const numbers = text.match(todosLosNumeros); //Buscar todos los dígitos en el texto
    if (!numbers) return 0;

    return numbers.length;

  },


  getNumberSum: (text) => {
    if(!text) return 0;
    const sumNum = /\d/g;
    const number = text.match(sumNum);
     
    if (!number) return 0;
    const sum = number.reduce((acc, num) => acc + parseInt(num, 10), 0);

    return sum;


  },
};

export default analyzer;

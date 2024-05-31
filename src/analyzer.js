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
    if(!text) return 0;
    const words = text.trim().split(/\s+/);
    const totalWords = words.length;
    const sumLengths = words.reduce ((sum,word) => sum + word.length, 0);
    const averageLength = totalWords > 0 ? parseFloat ((sumLengths / totalWords).toFixed(2)) : 0;
    
    return averageLength;
    
  },


  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;

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
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;

const analyzer = {  

  getWordCount: (text) => { //cuenta el numero de palabras en el texto
    if(!text) return 0; //verificamos si el texto está vacio, si está vacio da 0
    return text.trim().split(/\s+/).length;
    //text.trim elimina espacios del inicio y fin, con el .split(/\s+/) cuenta por espacios
  },

  getCharacterCount: (text) => { //cuenta el numero de caracteres en el texto
    if(!text) return 0;
    return text.length;//devuelve el número de caracteres
  },


  getCharacterCountExcludingSpaces: (text) => {
    if(!text) return 0;
    const signosDePuntuacion = [".", ",", ":", ";", "¿", "?", "¡", "!", "'"];
    //creamos la constante con los signos de puntuacion correspondientes
    let charCountExSpa = 0;
    //creamos una variable que estará en 0
    for (let i = 0; i < text.length; i++) {
      //bucle para contar el indice desde 0 y si es menor que 0 ir sumando 1
      const char = text[i]; // declara char y le da el valor de del caracter en la posicion i
      if (!signosDePuntuacion.includes(char) && char !==' '){
      // evalua que en la cadena no haya espacios ni los signos
        charCountExSpa++;
      }
    }
    return charCountExSpa;
  },
  
  getAverageWordLength: (text) => {    
    if(text) { 
    //si text es null o undefine luego de elminar espacios en blanco
      const limpiaEspa = text.trim();
      if(!limpiaEspa) return 0;
      const words = limpiaEspa.split(/\s+/);
      const totalWords = words.length;
      //almacena el número total de palabras
      const sumLengths = words.reduce ((sum,word) => sum + word.length, 0); 
      //suma las longitudes de todas las palabras
      const averageLength = totalWords > 0 ? parseFloat ((sumLengths / totalWords).toFixed(2)) : 0; 
      //si totalWord es mayor a 0 se calcula la longitud promedio
      return averageLength;
    } else {
      return 0;        
    }                 
  },


  getNumberCount: (text) => {
    const todosLosNumeros = (/\b\d+(\.\d+)?\b/g); //BUSCAR LOS REGEX
    //Define una expresión regular para encontrar todos los dígitos (del 0 al 9)
    const numbers = text.match(todosLosNumeros); 
    //Buscar todos los dígitos que coincidan de la const todosLosNumeros 
    if (!numbers) return 0;
    //sino hay numeros arroja 0

    return numbers.length;
    
  },


  getNumberSum: (text) => {
    const sumNum = (/\b\d+(\.\d+)?\b/g);
    const number = text.match(sumNum);
    if (!number) return 0;
    const sum = number.reduce((acc, num) => acc + parseFloat(num, 10), 0); //NO ENTIENDO BIEN
    //con reduce iteramos y toma el valor acumulado y el numero actual y se suma 
    //luego de convertirlo en un valor entero
    return sum;
  
  },
};

export default analyzer;

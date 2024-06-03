import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textarea = document.querySelector("textarea"); //busco el elemento testarea
const palabras = document.querySelector("li[data-testid='word-count']");
const caracteresSinEspacios = document.querySelector("li[data-testid='character-count']");
const caracteres = document.querySelector("li[data-testid='character-no-spaces-count']");
const longitud = document.querySelector("li[data-testid='number-count']");
const numeros = document.querySelector("li[data-testid='number-sum']");
const suma = document.querySelector("li[data-testid='word-legth-average']");
const resetButton = document.getElementById('reset-button'); //busco el elemento id reset-button

textarea.addEventListener("input", () => { // escucha el input cada que se escribe
const text = textarea.value; //declaramos la constante y obtiene el contenido act del cuadro de texto

const wordCount = analyzer.getWordCount(text); //llama a una funcion para contar el numero de palabras
palabras.textContent = `PALABRAS: ${wordCount}`; //crea cadena de texto con el numero de palabras

 const characterCount = analyzer.getCharacterCount(text);//llama a una funcion para contar el numero de caracteres
 caracteres.textContent = `CARACTERES: ${characterCount}`;//crea cadena de texto con el numero de caracteres

 const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(text);//llama a una funcion para contar el numero de palabras sin epacios ni signos de puntuacion
 caracteresSinEspacios.textContent = `CARACTERES SIN ESPACIOS: ${characterCountExcludingSpaces}`;//crea cadena de texto con el numero de palabras sin espacios ni signos de puntuacion

 const averageWordLength = analyzer.getAverageWordLength(text);//llama a una funcion para contar la longitud de palabras
 longitud.textContent = `LONGITUD: ${averageWordLength}`;//crea cadena de texto con la longitud de palabras

 const numberCount = analyzer.getNumberCount(text);//llama a una funcion para contar los números
 numeros.textContent = `NUMEROS: ${numberCount}`;//crea cadena de texto con la cantidad de números

 const numberSum = analyzer.getNumberSum(text);//llama a una funcion para sumar los números
 suma.textContent = `SUMA: ${numberSum}`; // //crea cadena de texto con la suma de números


});



resetButton.addEventListener('click', () => { // cuando se haga click se ejecutara la lista de funciones
 textarea.value = ''; //borrará lo escrito en el textarea
 palabras.textContent="PALABRAS: 0";
 caracteres.textContent="CARACTERES: 0";
 caracteresSinEspacios.textContent = "CARACTERES SIN ESPACIOS: 0";
 longitud.textContent = "LONGITUD: 0";
 numeros.textContent = "NÚMEROS: 0";
 suma.textContent = "SUMA: 0";
//dejará los númeos a 0 de cada una de la lista 
})
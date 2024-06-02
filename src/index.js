import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textarea = document.querySelector("textarea");
const palabras = document.querySelector('.lista .palabras');
const caracteresSinEspacios = document.querySelector('.lista .sin-espacios');
const caracteres = document.querySelector('.lista .caracteres');
const longitud = document.querySelector('.lista .longitud');
const numeros = document.querySelector('.lista .numeros');
const suma = document.querySelector('.lista .suma')
const resetButton = document.getElementById('reset-button');

textarea.addEventListener("input", () => {
 const text = textarea.value;

 const wordCount = analyzer.getWordCount(text);
 palabras.textContent = `PALABRAS: ${wordCount}`; 

 const characterCount = analyzer.getCharacterCount(text);
 caracteres.textContent = `CARACTERES: ${characterCount}`;

 const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(text);
 caracteresSinEspacios.textContent = `CARACTERES SIN ESPACIOS: ${characterCountExcludingSpaces}`;

 const averageWordLength = analyzer.getAverageWordLength(text);
 longitud.textContent = `LONGITUD: ${averageWordLength}`;

 const numberCount = analyzer.getNumberCount(text);
 numeros.textContent = `NUMEROS: ${numberCount}`;

 const numberSum = analyzer.getNumberSum(text);
 suma.textContent = `SUMA: ${numberSum}`;

});



resetButton.addEventListener('click', () => {
 textarea.value = ''; 
 palabras.textContent="PALABRAS: 0";
 caracteres.textContent="CARACTERES: 0";
 caracteresSinEspacios.textContent = "CARACTERES SIN ESPACIOS: 0";
 longitud.textContent = "LONGITUD: 0";
 numeros.textContent = "NÚMEROS: 0";
 suma.textContent = "SUMA: 0";


})
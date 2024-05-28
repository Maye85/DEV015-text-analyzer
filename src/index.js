import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textarea = document.querySelector("textarea");
const palabras = document.querySelector('.lista .palabras');
const caracteresSinEspacios = document.querySelector('.lista .sin-espacios');
const signosDePuntuacion = [".", ",", ":", ";", "¿", "?", "¡", "!"];

textarea.addEventListener("input", () => {
 const text = textarea.value;
 const wordCount = analyzer.getWordCount(text);
 palabras.textContent = `PALABRAS: ${wordCount}`; 


let charCount = 0;
for (let i = 0; i < text.length; i++) {
    const charCountExSpa = text[i];
    if (!signosDePuntuacion.includes(charCountExSpa) && charCountExSpa !==' '){
        charCount++;
    }
}
caracteresSinEspacios.textContent = `CARACTERES SIN ESPACIOS: ${charCount}`;
});

const resetButton = document.getElementById('reset-button');
 console.log(resetButton);
 resetButton.addEventListener('click', () => {
 textarea.value = ''; 
 palabras.textContent="PALABRAS: 0"
});
import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textarea = document.querySelector("textarea");
const palabras = document.querySelector('.lista .palabras');

textarea.addEventListener("input", () => {
    const text = textarea.value;
    const wordCount = analyzer.getWordCount(text);
    palabras.textContent = `PALABRAS: ${wordCount}`; 
});

const sinEspacios = [".", ",", ":", ";", "...", "¿?", "¡!"];
for (let)

const resetButton = document.getElementById('reset-button');
 console.log(resetButton);
resetButton.addEventListener('click', () => {
    textarea.value = ''; 
    palabras.textContent="PALABRAS: 0"
});
const wordDisplay = document.getElementById('wordDisplay');
const wordElement = document.getElementById('word');
const typeElement = document.getElementById('type');


export function displayWord(wordInit) {
    const word = wordInit;

    if (wordDisplay.style.display === 'flex') {
        console.log("atualizando word...");
    }else{
        console.log("disponibilizando word...");
    }

    wordDisplay.style.display = 'flex';
    wordDisplay.style.flexDirection = 'column';
    wordDisplay.style.alignItems = 'center';

    wordElement.innerText = word.getPalavra();
    typeElement.innerText = word.getType();
}
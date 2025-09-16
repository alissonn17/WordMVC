import Word from "../model/word.model.js";
import { displayWord } from "../view/word.view.js";

export function inputReceived(init){
    // Pegando valores dos inputs
    const palavra = document.getElementById('wordInput').value;
    const type = document.getElementById('typeInput').value;

    init(palavra, type);
}

export function initWord(palavra, type){

    // Inicializando nova palavra
    const newWord = new Word(palavra, type);

    console.log("criando palavra...");
    console.log(Word.wordlist);

    displayWord(newWord);
}


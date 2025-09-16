class Word {
    // Classe do modelo de palavrada

    // Contador de words
    static word = 0;

    static wordlist = [];

    // Construtor recebe palavra e type
    constructor(palavra, type){
        this.id = word + 1;
        this.palavra = palavra;
        this.type = type;
        Word.word++;
        Word.wordlist.push(this);
    }

    // Método retorna palavra
    getPalavra(){
        return this.palavra;
    }

    // Método retorna type
    getType(){
        return this.type;
    }
}

export default Word;
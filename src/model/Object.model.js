class Word {
    // Classe do modelo de palavrada

    // Contador de words
    static word = 0;

    constructor(palavra, type){
        this.id = word + 1;
        this.palavra = palavra;
        this.type = type;
        word++;
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
"use strict";
// Classes sempre começam com letra maiúscula 
// export significa 'exportar'. Ou seja, ouros arquivos podem 'importar' esta classe
// e usar ela. 
//depois usamos a palavre 'classe' para indicar que estamos criando uma classe 
// e depois, colocamos o exato mesmo nome que damos para o arquivo
//  da CLASSE é feito o OBJETO;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
class Cachorro {
    // todo o código da classe vai aqui dentro
    //Atributos, são as coisas que o cachorro tem. são como variáveis;
    nome;
    peso;
    raca;
    //Toda classe precisa de um método especial chamado "constructor"
    //É ele que recebe os valores de nome, peso, raça, etc e cria o objeto.
    constructor(meuNome, meuPeso, minhaRaca) {
        this.nome = meuNome;
        this.peso = meuPeso;
        this.raca = minhaRaca;
    }
    // Métodos são funções, elas são as coisas que o cachorro faz.
    latir() {
        console.log(`${this.nome} está latindo!`);
    }
    comer() {
        console.log(`${this.nome} está comendo!`);
    }
}
exports.Cachorro = Cachorro;
//# sourceMappingURL=Cachorro.js.map
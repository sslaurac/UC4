"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
class Cachorro {
    nome;
    raca;
    idade;
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    getNome() {
        return this.nome;
    }
    setNome(novoNome) {
        this.nome = novoNome;
    }
    getRaca() {
        return this.raca;
    }
    setRaca(novaRaca) {
        this.raca = novaRaca;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(novaIdade) {
        this.idade = novaIdade;
    }
}
exports.Cachorro = Cachorro;
//# sourceMappingURL=Cachorro.js.map
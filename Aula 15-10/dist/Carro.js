"use strict";
/* Crie a Classe de Carro
siga a instruções para cria-la usando de exemplo a classe Cachorro.

O Carro deve ter:
marca, tipo, ano

O que o Carro deve fazer:
- ele anda
- ele buzina

Depois de criar a classe, crie 3 carros diferentes no "Index.ts",
 chame seus atributos em console.log() e chame seus metodos.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    marca;
    tipo;
    ano;
    constructor(minhaMarca, meuTipo, meuAno) {
        this.marca = minhaMarca;
        this.tipo = meuTipo;
        this.ano = meuAno;
    }
    andar() {
        console.log(`O carro ${this.marca} anda!`);
    }
    buzina() {
        console.log(`${this.marca} buzina!`);
    }
}
exports.Carro = Carro;
//# sourceMappingURL=Carro.js.map
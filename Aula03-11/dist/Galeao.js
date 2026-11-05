"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Galeao = void 0;
const Navio_1 = require("./Navio");
class Galeao extends Navio_1.Navio {
    constructor(nome, capacidadeTripulacao, vida, velocidade, canhoes) {
        super(nome, capacidadeTripulacao, vida, velocidade, canhoes);
        this.capacidadeTripulacao = 50;
    }
    navegar() {
        console.log(`O ${this.nome}  avança lentamente pelo mar.`);
    }
    atacar() {
        console.log(`O ${this.nome} dispara uma poderosa salva de canhões.`);
    }
    repararNavio(vida) {
        if (vida < 0) {
            this.vida = vida;
        }
    }
}
exports.Galeao = Galeao;

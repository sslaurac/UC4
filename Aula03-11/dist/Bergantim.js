"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bergantim = void 0;
const Navio_1 = require("./Navio");
class Bergantim extends Navio_1.Navio {
    constructor(nome, capacidadeTripulacao, vida, velocidade, canhoes) {
        super(nome, capacidadeTripulacao, vida, velocidade, canhoes);
        this.capacidadeTripulacao = 20;
    }
    navegar() {
        console.log(`O ${this.nome} aproveita seus ventos favoráveis para navegar rapidamente.`);
    }
    atacar() {
        console.log(`O ${this.nome} realiza uma sequência rápida de disparos.`);
    }
}
exports.Bergantim = Bergantim;

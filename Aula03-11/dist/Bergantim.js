"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bergantim = void 0;
const Navio_1 = require("./Navio");
class Bergantim extends Navio_1.Navio {
    constructor(nome, capacidadeTripulacao) {
        super(nome, capacidadeTripulacao, 50, 100, 20);
        this.veririficarTripulacao();
    }
    navegar() {
        return `O Bergantim ${this.nome} aproveita seus ventos favoráveis para navegar rapidamente.`;
    }
    atacar() {
        return `O Bergantim ${this.nome} realiza uma sequência rápida de disparos com seus canhões.`;
    }
    veririficarTripulacao() {
        if (this.capacidadeTripulacao > 20)
            this.capacidadeTripulacao = 20;
        if (this.capacidadeTripulacao < 0)
            this.capacidadeTripulacao = 0;
    }
}
exports.Bergantim = Bergantim;

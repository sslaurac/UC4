"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Galeao = void 0;
const Navio_1 = require("./Navio");
class Galeao extends Navio_1.Navio {
    constructor(nome, capacidadeTripulacao) {
        super(nome, capacidadeTripulacao, 200, 50, 40);
        this.veririficarTripulacao();
    }
    navegar() {
        return `O galeão ${this.nome} avança lentamente pelo mar.`;
    }
    atacar() {
        return `O galeão ${this.nome} dispara uma poderosa salva com ${this.canhoes} canhões.`;
    }
    repararNavio() {
        this.vida += 100;
        if (this.vida > 200)
            this.vida = 200;
    }
    veririficarTripulacao() {
        if (this.capacidadeTripulacao > 50)
            this.capacidadeTripulacao = 50;
        if (this.capacidadeTripulacao < 0)
            this.capacidadeTripulacao = 0;
    }
}
exports.Galeao = Galeao;

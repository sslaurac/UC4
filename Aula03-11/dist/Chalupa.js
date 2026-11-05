"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chalupa = void 0;
const Navio_1 = require("./Navio");
class Chalupa extends Navio_1.Navio {
    constructor(nome, capacidadeTripulacao, vida, velocidade, canhoes) {
        super(nome, capacidadeTripulacao, vida, velocidade, canhoes);
        this.capacidadeTripulacao = 10;
    }
    navegar() {
        console.log(`A ${this.nome} utiliza sua agilidade para realizar manobras rápidas.`);
    }
    atacar() {
        console.log(`A ${this.nome} dispara seus poucos canhões e tenta escapar rapidamente.`);
    }
    explorarIlha() {
        console.log(`A tripualção da ${this.nome} está explorando uma ilha em busca de tesouros.`);
    }
}
exports.Chalupa = Chalupa;

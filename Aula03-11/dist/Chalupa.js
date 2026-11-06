"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chalupa = void 0;
const Navio_1 = require("./Navio");
class Chalupa extends Navio_1.Navio {
    constructor(nome, capacidadeTripulacao) {
        super(nome, capacidadeTripulacao, 25, 120, 10);
        this.veririficarTripulacao();
    }
    navegar() {
        return `A chalupa ${this.nome} utiliza sua agilidade para realizar manobras rápidas.`;
    }
    atacar() {
        return `A chalupa ${this.nome} dispara seus poucos canhões e tenta escapar rapidamente.`;
    }
    explorarIlha() {
        return `A tripualção da ${this.nome} está explorando uma ilha em busca de tesouros.`;
    }
    veririficarTripulacao() {
        if (this.capacidadeTripulacao > 10)
            this.capacidadeTripulacao = 10;
        if (this.capacidadeTripulacao < 0)
            this.capacidadeTripulacao = 0;
    }
}
exports.Chalupa = Chalupa;

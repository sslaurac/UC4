"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navio = void 0;
class Navio {
    constructor(nome, capacidadeTripulacao, vida, velocidade, canhoes) {
        this.nome = nome;
        this.capacidadeTripulacao = capacidadeTripulacao;
        this.vida = vida;
        this.velocidade = velocidade;
        this.canhoes = canhoes;
    }
    navegar() {
        console.log(`${this.nome} está navegando!`);
    }
    atacar() {
        console.log(`${this.nome} está atacando com seus canhões.`);
    }
    receberDano(dano) {
        if (dano <= 0) {
            this.vida += dano;
        }
    }
    exibirInformacoes() {
        console.log("Detealhes do navio: ");
    }
}
exports.Navio = Navio;

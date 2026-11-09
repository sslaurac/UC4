"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
class Gerente {
    constructor(nome) {
        this.nome = nome;
    }
    gerenciar() {
        console.log(`${this.nome} gerencia suas equipes.`);
    }
    trabalhar() {
        console.log(`${this.nome} trabalha junto à suas equipes.`);
    }
}
exports.Gerente = Gerente;

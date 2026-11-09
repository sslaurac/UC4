"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiderTecnico = void 0;
class LiderTecnico {
    constructor(nome) {
        this.nome = nome;
    }
    gerenciar() {
        console.log(`${this.nome} é Lider Técnico e gerencia sua equipe.`);
    }
    trabalhar() {
        console.log(`${this.nome} é Lidrr Técnico e trabalha junto com a sua equipe.`);
    }
    programar() {
        console.log(`${this.nome} é Lider Técnico e pode programar.`);
    }
}
exports.LiderTecnico = LiderTecnico;

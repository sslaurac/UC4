"use strict";
/*

Crie uma classe Personagem que tenha
nome
vida
dinheiro

-  coloque todos os atributos como 'private'
- crie um método que mostra a vida (ex: mostrarVida())
- crie um método que modifica a vida (ex: mudarVida(vida:number))

*/
Object.defineProperty(exports, "__esModule", { value: true });
const Cachorro_1 = require("./Cachorro");
const Personagem_1 = require("./Personagem");
const personagem = new Personagem_1.Personagem("Fulano", 100, 10);
console.log(personagem.getVida());
personagem.setVida(200);
console.log(personagem.getVida());
personagem.setDinheiro(150);
console.log(personagem.getDinheiro());
personagem.setNome("Jo");
console.log(personagem.getNome());
/*
Crie uma classe chamada Cachorro
coloque atributos no Cachorro
coloque os atributos 'private'
crie o constructor
crie os métodos 'get' e os 'set'
crie 3 cachorros no index e chame seus métodos
*/
const cachorro = new Cachorro_1.Cachorro("Rebeca", "Poodle", 5);
const cachorro2 = new Cachorro_1.Cachorro("Zak", "Pug", 1);
const cachorro3 = new Cachorro_1.Cachorro("Lulu", "Vira-lata", 10);
cachorro2.setIdade(5);
console.log(cachorro2.getIdade());
cachorro.setNome("Rebeka");
console.log(cachorro.getNome());
//# sourceMappingURL=index.js.map
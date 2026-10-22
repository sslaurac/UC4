/*

Crie uma classe Personagem que tenha
nome
vida
dinheiro

-  coloque todos os atributos como 'private'
- crie um método que mostra a vida (ex: mostrarVida())
- crie um método que modifica a vida (ex: mudarVida(vida:number))

*/

import { Cachorro } from "./Cachorro";
import { Personagem } from "./Personagem";

const personagem:Personagem = new Personagem("Fulano", 100, 10)

console.log(personagem.getVida())

personagem.setVida(200)
console.log(personagem.getVida())


personagem.setDinheiro(150)
console.log(personagem.getDinheiro())

personagem.setNome("Jo")
console.log(personagem.getNome())

/*
Crie uma classe chamada Cachorro
coloque atributos no Cachorro
coloque os atributos 'private'
crie o constructor 
crie os métodos 'get' e os 'set'
crie 3 cachorros no index e chame seus métodos
*/

const cachorro:Cachorro = new Cachorro("Rebeca", "Poodle", 5)
const cachorro2:Cachorro = new Cachorro("Zak", "Pug", 1)
const cachorro3:Cachorro = new Cachorro("Lulu", "Vira-lata", 10)

cachorro2.setIdade(5)
console.log(cachorro2.getIdade())

cachorro.setNome("Rebeka")
console.log(cachorro.getNome())
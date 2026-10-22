"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arma_1 = require("./Arma");
const Personagem_1 = require("./Personagem");
// const personagem:Personagem = new Personagem("Xablau", 25)
// console.log(personagem.vida) 
//ARRAYS
const espada = new Arma_1.Arma("Espada", 15);
const cajado = new Arma_1.Arma("Cajado", 10);
const arco = new Arma_1.Arma("Arco", 8);
const per = new Personagem_1.Personagem("Fulano", 7, espada);
const per1 = new Personagem_1.Personagem("Ciclano", 5, cajado);
const per2 = new Personagem_1.Personagem("Beltrano", 3, arco);
// string é um tipo. Logo podemos criar um Arrays deste tipo. 
const nomes = ["Laura", "Ester", "Leo"];
// number é um tipo. Logo, podemos criar uma arrays deste tipo.
const numeros = [100, 50, 50];
// Se "Personagem" também é um tipo, não podemos criar um array de Personagem??
const personagens = [per, per1, per2];
per1.atacarOutroPersonagem(per);
//# sourceMappingURL=index.js.map
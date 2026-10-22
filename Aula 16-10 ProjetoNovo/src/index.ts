import { Arma } from "./Arma";
import { Personagem } from "./Personagem";


// const personagem:Personagem = new Personagem("Xablau", 25)

// console.log(personagem.vida) 


//ARRAYS
const espada:Arma = new Arma("Espada", 15)
const cajado:Arma = new Arma("Cajado", 10)
const arco:Arma = new Arma("Arco", 8)

const per:Personagem = new Personagem("Fulano", 7, espada )
const per1:Personagem = new Personagem("Ciclano", 5, cajado)
const per2:Personagem = new Personagem("Beltrano", 3, arco )


// string é um tipo. Logo podemos criar um Arrays deste tipo. 
const nomes:string[] = ["Laura", "Ester", "Leo"]

// number é um tipo. Logo, podemos criar uma arrays deste tipo.
const numeros:number[] = [100, 50, 50]

// Se "Personagem" também é um tipo, não podemos criar um array de Personagem??
const personagens:Personagem[] = [per, per1, per2]


per1.atacarOutroPersonagem(per)
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
class Personagem {
    //Atributos - coisas que o personagem TEM
    nome;
    vida = 50;
    forca;
    arma;
    constructor(nome, forca, arma) {
        this.nome = nome;
        this.forca = forca;
        this.arma = arma;
        //this.vida = 100 também funciona;
    }
    curar() {
        this.vida += 10;
        if (this.vida > 100) {
            this.vida = 100;
        }
    }
    perder(dano) {
        this.vida -= dano;
        if (this.vida < 0) {
            this.vida = 0;
        }
    }
    curarOutroPersonagem(per) {
        per.vida += 100;
        if (per.vida > 100) {
            per.vida = 100;
        }
        console.log(`O personage ${per.nome} foi curado por ${this.nome}. 
            \nVida de ${per.vida}:  ${per.vida}.`);
    }
    // criem um método chamado atacar que faça um personagem tirar a vida do outro. 
    atacarOutroPersonagem(per) {
        per.vida -= this.arma.ataque;
        // OU per.vida -= this.forca
        if (per.vida < 0) {
            per.vida = 0;
        }
        console.log(`O personagem ${per.nome} foi atacado por ${this.nome}. 
            \nVida de ${per.nome}:  ${per.vida}.`);
    }
}
exports.Personagem = Personagem;
/* 1) Crie uma nova classe chamda "Arma"
    Arma deve ter nome ataque
    Não esqueça do constructor
    
    2) Dentro da classe Personagem, crie o atributo arma (do tipo Arma)
        Chame ele no constructor de Personagem também.

    3) Modifique o método 'atacar' da classe Personagem para usar o dano da arma.
    */
// Métodos - o que o personagem FAZ
// dentro das classes pode criar metodos que alteram os atributos 
//# sourceMappingURL=Personagem.js.map
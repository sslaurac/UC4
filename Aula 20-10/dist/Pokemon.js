"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    nome;
    vida;
    ataque;
    poder;
    constructor(nome, vida, ataque, poder) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.poder = poder;
    }
    falar() {
        console.log(`${this.nome} `.repeat(3));
    }
    atacar(pokemon) {
        pokemon.vida -= this.ataque;
        if (pokemon.vida < 0) {
            pokemon.vida = 0;
        }
        console.log(`${pokemon.nome} foi atacado por ${this.nome} e perdeu ${this.ataque} de vida .`);
    }
    atacarComPoder(pokemon) {
        pokemon.vida -= this.poder.ataque;
        if (pokemon.vida < 0) {
            pokemon.vida = 0;
        }
        console.log(`${pokemon.nome} atacou usando ${this.poder.ataque}`);
    }
}
exports.Pokemon = Pokemon;
//# sourceMappingURL=Pokemon.js.map
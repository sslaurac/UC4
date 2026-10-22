"use strict";
/*
    1) Crie uma classe chamada 'Pokemon'.
    o pokemon deve ter um nome(string), vida(number), ataque(number), e um poder
    o poder é uma classe que também vamos criar

    Métodos do Pokemon:
    - falar -> um métodos que repete o nome do Pokemon algumas vezes
    
    - atacar -> um método que recebe  outro pokemon e ataca, tirando a vida
    
    - atacar com poder -> um método que recebe outro pokemon e ataca ele também, porém diz
    o nome do poder e usa o ataque do pdoer.

    2) Crie uma classe chamada 'Poder'. Ela deve ter um nome(string) e ataque(number).Não precisa
    de nenhuma método, exceto 'constructor'

    3) Crie dois poderes e dois pokémons no index.ts e simule uma pequena batalha entre eles.

*/
Object.defineProperty(exports, "__esModule", { value: true });
const Poder_1 = require("./Poder");
const Pokemon_1 = require("./Pokemon");
const newPoder = new Poder_1.Poder("Choque", 10);
const newPoder2 = new Poder_1.Poder("Agua", 8);
const newPoder3 = new Poder_1.Poder("Fogo", 15);
const pokemon = new Pokemon_1.Pokemon("Pikachu", 30, 20, newPoder);
const pokemon2 = new Pokemon_1.Pokemon("Squirtle", 30, 10, newPoder2);
const pokemon3 = new Pokemon_1.Pokemon("Charmander", 25, 15, newPoder3);
pokemon2.atacarComPoder(pokemon);
pokemon.atacar(pokemon2);
pokemon3.atacar(pokemon2);
pokemon3.falar();
//# sourceMappingURL=index.js.map
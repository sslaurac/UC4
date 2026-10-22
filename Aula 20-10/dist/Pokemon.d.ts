import { Poder } from "./Poder";
export declare class Pokemon {
    nome: string;
    vida: number;
    ataque: number;
    poder: Poder;
    constructor(nome: string, vida: number, ataque: number, poder: Poder);
    falar(): void;
    atacar(pokemon: Pokemon): void;
    atacarComPoder(pokemon: Pokemon): void;
}
//# sourceMappingURL=Pokemon.d.ts.map
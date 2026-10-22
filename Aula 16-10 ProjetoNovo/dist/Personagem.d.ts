import { Arma } from "./Arma";
export declare class Personagem {
    nome: string;
    vida: number;
    forca: number;
    arma: Arma;
    constructor(nome: string, forca: number, arma: Arma);
    curar(): void;
    perder(dano: number): void;
    curarOutroPersonagem(per: Personagem): void;
    atacarOutroPersonagem(per: Personagem): void;
}
//# sourceMappingURL=Personagem.d.ts.map
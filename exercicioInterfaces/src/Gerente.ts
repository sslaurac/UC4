import { IGerente } from "./IGerente";
import { ITrabalhador } from "./ITrabalhador";

export class Gerente implements IGerente, ITrabalhador{
    public nome:string
   
    constructor(nome:string) {
        this.nome = nome 
    }

    gerenciar(): void {
        console.log(`${this.nome} gerencia suas equipes.`)
    }

    trabalhar(): void {
        console.log(`${this.nome} trabalha junto à suas equipes.`)
    }

}
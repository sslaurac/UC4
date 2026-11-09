import { IProgramador } from "./IProgramador";
import { ITrabalhador } from "./ITrabalhador";

export class Desenvolvedor implements IProgramador, ITrabalhador{
    public nome:string

    constructor(nome:string) {
        this.nome = nome 
    }

    programar(): void {
        console.log(`${this.nome} é um desenvolvedor e pode trabalhar e programar.`)
    }

    trabalhar(): void {
        console.log(`${this.nome} é um desenvolvedor e pode trabalhar e programar.`)
    }
}
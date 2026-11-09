import { IGerente } from "./IGerente";
import { IProgramador } from "./IProgramador";
import { ITrabalhador } from "./ITrabalhador";

export class LiderTecnico implements ITrabalhador, IProgramador, IGerente{
   
    public nome:string

    constructor(nome:string){
        this.nome = nome
    }

    gerenciar(): void {
        console.log(`${this.nome} é Lider Técnico e gerencia sua equipe.`)
    }

    trabalhar(): void {
        console.log(`${this.nome} é Lider Técnico e trabalha junto com a sua equipe.`)
    }

    programar(): void {
        console.log(`${this.nome} é Lider Técnico e pode programar.`)
    }
}
import { Navio } from "./Navio";

export class Bergantim extends Navio{

    constructor(nome:string, capacidadeTripulacao:number){
      
        super(nome, capacidadeTripulacao, 50, 100, 20)
        this.veririficarTripulacao()

    }

     navegar():string{
        return `O Bergantim ${this.nome} aproveita seus ventos favoráveis para navegar rapidamente.`
    }

     atacar():string {
        return `O Bergantim ${this.nome} realiza uma sequência rápida de disparos com seus canhões.`
    }

    private veririficarTripulacao():void {
        if (this.capacidadeTripulacao > 20) this.capacidadeTripulacao = 20
        if (this.capacidadeTripulacao < 0) this.capacidadeTripulacao = 0

    }
}
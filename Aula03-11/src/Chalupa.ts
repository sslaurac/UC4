import { Navio } from "./Navio";

export class Chalupa extends Navio{
    
    constructor(nome:string, capacidadeTripulacao:number) {
        super(nome, capacidadeTripulacao, 25, 120, 10)
        this.veririficarTripulacao()
    
    }
    
     navegar():string{
        return `A chalupa ${this.nome} utiliza sua agilidade para realizar manobras rápidas.`
    }

     atacar():string {
        return `A chalupa ${this.nome} dispara seus poucos canhões e tenta escapar rapidamente.`
    }

     explorarIlha():string{
        return `A tripualção da ${this.nome} está explorando uma ilha em busca de tesouros.`
    }

    private veririficarTripulacao():void {
        if (this.capacidadeTripulacao > 10) this.capacidadeTripulacao = 10
        if (this.capacidadeTripulacao < 0) this.capacidadeTripulacao = 0

    }
}

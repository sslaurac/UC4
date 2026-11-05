import { Navio } from "./Navio";

export class Galeao extends Navio{

    constructor(nome:string, capacidadeTripulacao:number){
        
        super(nome,capacidadeTripulacao, 200, 50, 40)
        this.veririficarTripulacao()
    }

    protected navegar():string{
        return `O galeão ${this.nome} avança lentamente pelo mar.`
    }

    protected atacar():string{
        return `O galeão ${this.nome} dispara uma poderosa salva com ${this.canhoes} canhões.`
    }

    protected repararNavio():void{
        this.vida += 100
        if (this.vida > 200) this.vida = 200
    } 

    private veririficarTripulacao():void {
        if (this.capacidadeTripulacao > 50) this.capacidadeTripulacao = 50
        if (this.capacidadeTripulacao < 0) this.capacidadeTripulacao = 0

    }
}

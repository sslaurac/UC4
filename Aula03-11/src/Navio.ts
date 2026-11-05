export class Navio{
    protected nome:string
    protected capacidadeTripulacao:number
    protected vida:number
    protected velocidade:number
    protected canhoes:number

    constructor(nome:string, capacidadeTripulacao:number, vida:number,
       velocidade:number, canhoes:number){
         this.nome = nome 
         this.capacidadeTripulacao = capacidadeTripulacao
         this.vida = vida
         this.velocidade = velocidade
         this.canhoes = canhoes

      }
   protected navegar():string {
      return `O navio ${this.nome} está navegando!`
   }

   protected atacar():string {
      return `O navio ${this.nome} está atacando com seus ${this.canhoes} canhões.`
   }

   protected receberDano(dano:number):void{
     if (dano > 0) this.vida -= dano
     if (this.vida < 0) this.vida = 0
   }
   
   protected exibirInformacoes():string {
      return `
      Nome: ${this.nome}
      Tripulação: ${this.capacidadeTripulacao}
      vida: ${this.vida}
      Velocidade: ${this.velocidade}
      Canhões:  ${this.canhoes}`
   }
   
}
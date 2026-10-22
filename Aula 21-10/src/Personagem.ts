export class Personagem {
    private nome:string
    private vida:number
    private dinheiro:number

    constructor (nome:string, vida:number, dinheiro:number){
        this.nome = nome
        this.vida = vida
        this.dinheiro = dinheiro
    }

    getNome():string{
        return this.nome
    }

    setNome(novoNome:string):void {
        if (novoNome.length < 3 ){
            console.log("O nome deve ter pelo menos 3 caracteres!")
            return
        }
        this.nome = novoNome
    }

    getVida():number{
        return this.vida
    }

    setVida(vidaEscolhida:number):void{
        if (vidaEscolhida < 0 ){
            vidaEscolhida = 0
        }
        this.vida = vidaEscolhida
    }

    getDinheiro():number {
        return this.dinheiro
    }

    setDinheiro(novoDinheiro):void {
        this.dinheiro = novoDinheiro
    }
}
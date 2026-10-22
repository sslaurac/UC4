export class Cachorro {
    private nome:string
    private raca:string
    private idade:number

    constructor(nome:string, raca:string, idade:number){
        this.nome = nome
        this.raca = raca
        this.idade = idade
    }

    getNome():string{
        return this.nome
    }

    setNome(novoNome:string):void{
        this.nome = novoNome
    }

    getRaca():string{
        return this.raca
    }

    setRaca(novaRaca:string):void{
        this.raca = novaRaca
    }

    getIdade():number{
        return this.idade
    }

    setIdade(novaIdade:number):void{
        this.idade = novaIdade
    }


}
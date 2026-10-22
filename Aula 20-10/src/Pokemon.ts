import { Poder } from "./Poder"

export class Pokemon {
    nome:string
    vida:number
    ataque:number
    poder:Poder

    constructor(nome:string, vida:number, ataque:number, poder:Poder){
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
        this.poder = poder
    }

    falar():void{
        console.log(`${this.nome} ` .repeat(3))
    }

    atacar(pokemon:Pokemon):void{
        pokemon.vida -= this.ataque
        
        this.verificarVida(pokemon)

        console.log(`${pokemon.nome} foi atacado por ${this.nome} e perdeu ${this.ataque} de vida .`)  
    }

    atacarComPoder(pokemon:Pokemon):void{
        pokemon.vida -= this.poder.ataque
          if (pokemon.vida < 0){
            pokemon.vida = 0
        }
        console.log(`${pokemon.nome} foi atacado por ${this.nome} usando ${this.poder.nome} e perdeu ${this.poder.ataque} de vida `)
    }

    // quando se tem um código que se repete, podemos criar uma função
    verificarVida(pokemon:Pokemon):void{
        if (pokemon.vida < 0 ){
        pokemon.vida = 0 
        }
    
        if (pokemon.vida > 100){
        pokemon.vida = 100
        }
    }  
}



 
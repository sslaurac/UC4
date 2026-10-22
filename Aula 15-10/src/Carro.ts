/* Crie a Classe de Carro 
siga a instruções para cria-la usando de exemplo a classe Cachorro.

O Carro deve ter:
marca, tipo, ano

O que o Carro deve fazer: 
- ele anda
- ele buzina

Depois de criar a classe, crie 3 carros diferentes no "Index.ts",
 chame seus atributos em console.log() e chame seus metodos.
 */


 export class Carro {
    marca:string
    tipo:string
    ano:number

    constructor(minhaMarca:string, meuTipo:string, meuAno:number){
        this.marca = minhaMarca
        this.tipo =  meuTipo
        this.ano = meuAno
 
    }
    andar():void{
        console.log(`O carro ${this.marca} anda!`)
    }

    buzina():void{
    console.log(`${this.marca} buzina!`)
    }


}
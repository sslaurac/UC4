// Classes sempre começam com letra maiúscula 
// export significa 'exportar'. Ou seja, ouros arquivos podem 'importar' esta classe
// e usar ela. 
//depois usamos a palavre 'classe' para indicar que estamos criando uma classe 
// e depois, colocamos o exato mesmo nome que damos para o arquivo
//  da CLASSE é feito o OBJETO;

export class Cachorro {
    // todo o código da classe vai aqui dentro
    //Atributos, são as coisas que o cachorro tem. são como variáveis;
    nome:string
    peso:number
    raca:string

    //Toda classe precisa de um método especial chamado "constructor"
    //É ele que recebe os valores de nome, peso, raça, etc e cria o objeto.
    constructor(meuNome:string, meuPeso:number, minhaRaca:string){
        this.nome = meuNome
        this.peso = meuPeso
        this.raca = minhaRaca
    }

    // Métodos são funções, elas são as coisas que o cachorro faz.
    latir():void {
        console.log(`${this.nome} está latindo!`)
    }

    comer():void {
        console.log(`${this.nome} está comendo!`)
    }

}
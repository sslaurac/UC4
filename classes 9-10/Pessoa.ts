// Classes sempre começam com letra maiúscula 
// export significa 'exportar'. Ou seja, ouros arquivos podem 'importar' esta classe
// e usar ela. 
//depois usamos a palavre 'classe' para indicar que estamos criando uma classe 
// e depois, colocamos o exato mesmo nome que damos para o arquivo
//  da CLASSE é feito o OBJETO;

export class Pessoa {
    //Atributos (o que uma Pessoa tem:)
    nome:string
    email:string
    senha:string

    // Metodo construtor (quando uma função esta dentro de uma classe, chamamos de método)
    constructor(meuNome:string, meuEmail:string, minhaSenha:string) {
        this.nome = meuNome
        this.email = meuEmail
        this.senha = minhaSenha
    }
}
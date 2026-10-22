// // Em typescript, as variáveis e constantes são tipadas, ou seja, informamaos de que tipo são 

// let meuNome: string = "Laura"
// let minhaIdade: number = 27
// let desligado: boolean = true

// function somar (a: number, b: number): number {
//     return a + b 
// }
// console.log(somar(10,90))

// //Arrays Em Type 
// let compras: string [] = [] // -> Um Array vazio 
// let compra: string [] = ["Pão", "Leite", "Manteiga"]

// let numeros:Array<number> =  [1,2,3,4]

// Crie um Array que contem notas;
// Depois calcule a média destas notas e mostre no terminal

const notas: number [] = [7,10,9,6]
let soma: number = 0;

for (let i = 0; i < notas.length; i ++) {
    soma += notas[i]
}
const media: number = soma / notas.length
console.log("A soma das notas é: " +  soma)
console.log("A media das notas é: " + media)

// Objetos em typescript
// atributos com "?" são opcionais; pode ou não adicionar valores à ele;

let person: {nome: string, idade: number, peso?:number} = {
    nome: "Laura",
    idade: 27
}
console.log(person.nome)
person.peso = 60


// crie dois objetos representando pessoas (coloque nomes diferentes para os objetos
// estes objsetos deve ter: nome, cidade, emprego, sendo que emprego dever um atributo opcional
// depois, faça um if que mosrte duas frases diferentes:
// se a pessoa tem um emprego ou, mostre "fulano da cidade tal está trabalhando."
// se não, mosrte "fulano da cidade tal está desempregado."


let usuarioX: { nome: string, cidade: string, emprego?:boolean} = {
    nome: "Laura",
    cidade: "Sapucaia",    
}
usuarioX.emprego = true
if (usuarioX.emprego) {
    console.log("Laura da cidade " + usuarioX.cidade, "esta trabalhando.")
}


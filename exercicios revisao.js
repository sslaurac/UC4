//1 
const rl = require("readline-sync");

// let nome = rl.question("Qual o seu nome: ")
// let idade = rl.questionInt("Qual a sua idade: ")

// console.log(`Seu nome é ${nome} e sua idade é ${idade}`)

//2
// let a = rl.questionInt("Digite um número inteiro: ") 
// let b = rl.questionInt("Digite outro número inteiro: ")

// let soma = a + b
// console.log(`A soma é ${soma} .`)
// let subtracao = a - b
// console.log(`A subtração é ${subtracao} .`)
// let multiplicacao = a * b
// console.log(`A multiplicação é ${multiplicacao}`)
// let divisao = (a + b) / 2
// console.log(`A divisão é ${divisao} .`)


//3 

// let nota = rl.questionInt("Digite a nota do aluno: ")
// const resultado = nota >= 7 ? "Aprovado" : "Reprovado";
// console.log(resultado);


//4 

// function verSeParOuImpar(numero) {
//     if (numero % 2 === 0) {
//         return "Par"
//     } else {
//         return "Ímpar"
//     }
// }
// console.log(verSeParOuImpar (6))
// console.log(verSeParOuImpar(7))


console.log("--------Estuturas Condicionais---------")

// 5 

// let dia = rl.questionInt("Digite o dia da semana: ")

// switch(dia) {
// case 1:
//     console.log("Domingo");
//     break;
// case 2: 
//     console.log("Segunda");
//     break;
// case 3:
//     console.log("Terça");
//     break;
// case 4:
//     console.log("Quarta");
//     break;
// case 5:
//     console.log("Quinta");
//     break;
// case 6:
//     console.log("Sexta")
// default:
//     console.log("Não existe");

// }

// 6
// const cardapios = ["Hamburgue", "Pizza", "Lasanha", "PF"];
// for (const cardapio of cardapios) console.log(cardapio);

// let menu = rl.questionInt("Qual o item selecionado: ")
// switch (menu) {
// case 1: 
//     console.log(31.90);
//     break;
// case 2:
//     console.log(45.50);
//     break;
// case 3:
//     console.log(22.90);
//     break;
// case 4:
//     console.log(29.90);
// default:
//     console.log("Escolha o prato do menu acima: ")
// }


console.log("------------LOOPS-------------")

//7 - Crie um array de 5 números e calcule a soma usando for.
// const numeros = [1, 2, 3, 4, 5];
// let soma = 0

// for (const numero of numeros) {
//     soma = soma + numero
// }
// console.log(`A soma dos números ficou: ${soma}`);


//8 - Faça um loop while que exiba números de 1 a 10.
// let numero = 1;
// while (numero <= 10) {
//     console.log(numero);
//     numero++;
// }

// 9 -Use for...of para imprimir todos os elementos de um array de frutas
// const frutas = ["maçã", "banana", "laranja", "pessego", "mamão"];
// for (const fruta of frutas) console.log(fruta);

//10 - se forEach para imprimir todos os elementos de um array de cores.
// const cores = ["Azul", "Verde", "Branco", "Vermelho", "Preto"];
// cores.forEach((cor) => console.log(cor));


//11 - OBJETO - Crie um objeto pessoa com nome e idade e use for...in para imprimir cada propriedade.

// const pessoa = { nome: "Daniel", idade: 25 };
// for (let i in pessoa) {
//   console.log(`${i}: ${pessoa[i]}`);
// }



//12 -Faça um loop que exiba todos os números pares de 0 a 20.
//  let numero = 0; 
// while (numero <= 20) {
//     if (numero % 2 === 0)
//     console.log(numero);
//     numero++;
// }

// /// Outra forma de fazer a 12;
// for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0) console.log(i)
// }

//13 - Crie uma função tradicional que receba 2 números e retorne o maior. 
// function maiorNumero(n1, n2) {
//     if (n1 > n2) {
//         return n1
//     } else if (n2 >n1) {
//         return n2
//     } else {
//         return 'Os número são iguais'
//     }
// }

// console.log(maiorNumero(46,5546))


//14 - Crie uma arrow function que receba um array e retorne a soma de todos os elementos
// const somatorio = (array) => {
//     let soma = 0
//     for (const numero of array) {
//         soma += numero 
//     }
//     return soma
// }

// const numeros = [1, 2, 3, 4, 5];
// console.log(somatorio(numeros))

// 15 - Crie uma função que peça ao usuário seu nome e idade (usando readline) e exiba uma saudação personalizada.
    
const saudacao = () => {
    let nome = rl.question('Digite o seu nome: ')
    let idade = rl.questionInt('Digite a sua idade: ')
    console.log(`Olá ${nome}! Que legal você tem ${idade} anos de idade.`)
}
saudacao()
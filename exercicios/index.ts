// Exercicio 1: 
/* crie uma função chamada 'somar' que pede dois números. estes números devem ser passados pelo usuário 
através do readline-sync
Mostre a soma destes dois números. não esqueça de tipar o retorno corretamente.
*/

/*Exercicio 2:
Seu Zé, também está no ramo do jogo do bicho no mercadinho dele. ele precisa agora de um sistema que identifique os animais a partir 
dos números que os cliente escolhem, por isso vc deve:
- solicitar o nome do cliente;
- solicitar um número de 1 a 20;
- criar uma função chamada 'descobrirBicho' que recebe esse núemro;
- utilizando if, else if e else, essa função identifica qual animal a pessoa escolheu;
- a função retorna o nome do cliente, o número escolhhido e o nome do animal escolhido, tudo numa frase só;

ANIMAIS:
 Avestruz: 01 a 04 | Águia: 05 a 08 | Burro: 09 a 12 | Borboleta: 13 a 16 | Cachorro: 17 a 20*/

import rl from "readline-sync";

 let n1: number = Number(rl.question("Digite o primeiro numero: "));
 let n2: number = Number(rl.question("Digite outro numero: "));

function somas (numero1:number, numero2:number): number {
   
    return numero1 + numero2;

}
const soma:Number = somas(n1, n2) 
console.log(somas(n1,n2)) 

//OU console.log("A soma dos números é: " + somas(n1,n2))


// // EXERCICIO 2
// let cliente:string = (rl.question("Qual o seu nome: "));
// let numeroBicho:number = (rl.questionInt("Digite um numero de 1 a 20: ")); 

// function descobrirBicho (numero:number, cliente:string): string {
    
//     let frase:string = ""
    
//     if (numero < 0 || numero > 20){
//         return "Digite um número válido!" 
//     } else if (numero <= 4) {   
//         frase = `${cliente} escolheu o número ${numero} que representa o Avestruz.`
//     } else if (numero <= 8){
//         frase = `${cliente} escolheu o número ${numero} que representa o Águia.`
//     } else if (numero <= 12){
//         frase = `${cliente} escolheu o número ${numero} que representa o Burro.`
//     } else if (numero <= 16){
//         frase = `${cliente} escolheu o número ${numero} que representa o Borboleta.`
//     } else {
//         frase = `${cliente} escolheu o número ${numero} que representa o Cachorro.`
//     }

//     return frase 
    
// }
// const frase:string = descobrirBicho(numeroBicho, cliente) 
// console.log(frase)
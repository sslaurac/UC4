// // revisão de JS 
// // estrututas de  repetição

// const frutas = [ "pitaya", "kiwi", "conde"]

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }


// for (const fruta of frutas) {
//     console.log(fruta)
// }

// console.log("--------------------------------")
// // for in - indica o ÍNDICE 
// for (const fruta in frutas) {
//     console.log(fruta)
// }

// /// mostrar o indice e o nome da fruta

// for (const fruta in frutas) {
//     console.log(`${fruta} = ${frutas[fruta]}`)
// }

// console.log("----------função----------")

// console.log(saudacao("Daniel"))

// function saudacao(nome) {
//     return `Olá ${nome}, seja bem-vindo!`
// }

// console.log("---------soma----------")

// function soma (a, b) {
//     return a + b

// }
// soma (10,5)
// let media = soma (10, 5) / 2


// // função do ttipo Void, que alteram o valor de alguma coisa
// console.log("-------------------")

// let nome = 'Daniel'
// function alteraNome(nomeNovo){ 
//     nome = nomeNovo
// }

// console.log(nome)
// alteraNome("Rodorlfo")
// console.log(nome)


// const soma = (a, b) => a + b
// console.log(soma(10, 5))

// console.log("-------------Arrow Function---------------")
// const pratos = ["de plástico", "de vidro", "de cerâmica", "de ferro"]
// pratos.forEach(function (item)
//     { console.log(item)})

// // com arrow function
// pratos.forEach((item) => console.log(item))
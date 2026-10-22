// como agora exportamos a classe, agora nós podemos importa-las;
import { Cachorro } from "./Cachorro";
import { Carro } from "./Carro";


// para criarmos um objeto, criamos uma variável que deve ser do tipo da classe (Cachorro),
// depois usamos "new" para criar um novo cachorro e dentro dos parênteses devemos colocar todas as infos 
// que o Constructor pede na ordem. 
const meuCachorro:Cachorro = new Cachorro("Bob", 11, "Vira-lata")
const outroCachorro:Cachorro = new Cachorro("Rex", 23, "Pitbull")
// agora podemos acessar as informações do novo cachorro; Por exemplo, para ver o nome:
console.log(meuCachorro.nome)
console.log(meuCachorro.raca)
console.log("--------------------------")
console.log(outroCachorro.nome)
console.log(outroCachorro.peso)
// posso também chamar os Métodos para ver o que o cachorro faz:
meuCachorro.latir()


const novoCarro:Carro = new Carro("Gol", "bolinha", 1999)
const outroCarro:Carro = new Carro("Gol", "quadrado", 2000)
const maisCarro:Carro = new Carro("Renault", "Clio", 2011)

console.log(novoCarro.marca)
console.log(novoCarro.ano)
novoCarro.andar()
outroCarro.buzina()
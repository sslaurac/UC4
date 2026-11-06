import { Bergantim } from "./Bergantim";
import { Chalupa } from "./Chalupa";
import { Galeao } from "./Galeao";
import { Navio } from "./Navio";

const bergantim:Bergantim = new Bergantim("Velazque", 50)
const chalupa:Chalupa = new Chalupa("Napoleão", 10)
const galeao:Galeao = new Galeao("Santana", 38)

console.log(bergantim.exibirInformacoes())
console.log(chalupa.exibirInformacoes())
console.log(galeao.exibirInformacoes())

console.log(bergantim.navegar())
console.log(bergantim.atacar())

console.log(chalupa.navegar())
console.log(chalupa.atacar())

console.log(galeao.navegar())
console.log(galeao.atacar())

chalupa.receberDano(5)
bergantim.receberDano(10)
galeao.receberDano(11)


console.log(chalupa.explorarIlha())

galeao.repararNavio()
console.log(galeao.exibirInformacoes())


const armada:Navio[] = [bergantim, chalupa, galeao]

armada.forEach((navio) => {
    console.log (navio.navegar())
    console.log (navio.atacar())
    console.log (navio.exibirInformacoes())
    navio.receberDano(10)
    console.log (navio.exibirInformacoes())
})
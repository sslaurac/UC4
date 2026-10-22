"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// como agora exportamos a classe, agora nós podemos importa-las;
const Cachorro_1 = require("./Cachorro");
const Carro_1 = require("./Carro");
// para criarmos um objeto, criamos uma variável que deve ser do tipo da classe (Cachorro),
// depois usamos "new" para criar um novo cachorro e dentro dos parênteses devemos colocar todas as infos 
// que o Constructor pede na ordem. 
const meuCachorro = new Cachorro_1.Cachorro("Bob", 11, "Vira-lata");
const outroCachorro = new Cachorro_1.Cachorro("Rex", 23, "Pitbull");
// agora podemos acessar as informações do novo cachorro; Por exemplo, para ver o nome:
console.log(meuCachorro.nome);
console.log(meuCachorro.raca);
console.log("--------------------------");
console.log(outroCachorro.nome);
console.log(outroCachorro.peso);
// posso também chamar os Métodos para ver o que o cachorro faz:
meuCachorro.latir();
const novoCarro = new Carro_1.Carro("Gol", "bolinha", 1999);
const outroCarro = new Carro_1.Carro("Gol", "quadrado", 2000);
const maisCarro = new Carro_1.Carro("Renault", "Clio", 2011);
console.log(novoCarro.marca);
console.log(novoCarro.ano);
novoCarro.andar();
outroCarro.buzina();
//# sourceMappingURL=index.js.map
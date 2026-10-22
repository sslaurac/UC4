/*
    1) Crie uma classe chamada 'Pokemon'.
    o pokemon deve ter um nome(string), vida(number), ataque(number), e um poder
    o poder é uma classe que também vamos criar  

    Métodos do Pokemon:
    - falar -> um métodos que repete o nome do Pokemon algumas vezes
    
    - atacar -> um método que recebe  outro pokemon e ataca, tirando a vida
    
    - atacar com poder -> um método que recebe outro pokemon e ataca ele também, porém diz
    o nome do poder e usa o ataque do pdoer.

    2) Crie uma classe chamada 'Poder'. Ela deve ter um nome(string) e ataque(number).Não precisa
    de nenhuma método, exceto 'constructor' 

    3) Crie dois poderes e dois pokémons no index.ts e simule uma pequena batalha entre eles. 

*/

import { Poder } from "./Poder";
import { Pokemon } from "./Pokemon";

const newPoder:Poder = new Poder("Choque", 10)
const newPoder2:Poder = new Poder("Agua", 8)
const newPoder3:Poder = new Poder("Fogo", 15)

const pokemon:Pokemon = new Pokemon("Pikachu", 30, 20, newPoder)
const pokemon2:Pokemon = new Pokemon("Squirtle", 30, 10, newPoder2)
const pokemon3:Pokemon = new Pokemon("Charmander", 25, 15, newPoder3)


pokemon2.atacarComPoder(pokemon)
pokemon.atacar(pokemon2)
pokemon3.atacar(pokemon2)
pokemon3.falar()


/*ENCAPSULAMENTO 
    é o ato de proteger os dados dos nossos objetos (tantos os atributos quanto os métodos)
e controlar como podem acessados ou modificados.

Exemplo: Usando o encapsulamento, podemos impedir que alguém deixe a vida do pokémon negativa.
Para utilizar o encapsulamento nas nossas classes, precisamos adicionar certas palavras antes dos
atributos e antes dos métodos. São elas: 

    - public = permite acessar e/ou modificar um atributo ou método em qualquer arquivo do meu progama DIRETAMENTE
    Na classe -> Public vida.number
    No index -> pokemon.vida = -999

    - private = NÃO permite acessar e/ou modificar. Para fazer isso, precisamos chamar os métodos da classe.
    Ex:
    - protected
Chamamos estas três palavras de 'modificadores de acesso'. 

*/




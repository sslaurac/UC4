import { Desenvolvedor } from "./Desenvolverdor";
import { Gerente } from "./Gerente";
import { LiderTecnico } from "./LiderTecnico";

const desenvolvedor = new Desenvolvedor("Paulo");
const gerente = new Gerente("Ester");
const liderTecnico = new LiderTecnico("Miriam")

desenvolvedor.programar()
desenvolvedor.trabalhar()

gerente.gerenciar()
gerente.trabalhar()

liderTecnico.gerenciar()
liderTecnico.programar()
liderTecnico.trabalhar()
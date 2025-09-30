import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../models/cliente";

export default class ListagemDependentesTitular extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        let titularNome = this.entrada.receberTexto('Qual o nome do titular que deseja consultar os dependentes?')
        let titular = this.clientes.find(c => c.Nome === titularNome)
        if (titular) {
            if (titular.Dependentes.length > 0) {
                console.log(`Dependentes de ${titular.Nome}:`)
                titular.Dependentes.forEach(dep => console.log(`- ${dep.Nome}`))
            } else {
                console.log(`${titular.Nome} não possui dependentes.`)
            }
        } else {
            console.log('Titular não encontrado!')
        }
    }
}
import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../models/cliente";

export default class ListagemTitularDependentes extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        let dependenteNome = this.entrada.receberTexto('Qual o nome do dependente que deseja consultar o titular?')
        let titular = this.clientes.find(cliente =>
            cliente.Dependentes.some(dep => dep.Nome === dependenteNome)
        );
        if (titular) {
            console.log(`O titular de ${dependenteNome} é ${titular.Nome}`)
        } else {
            console.log('Dependente não encontrado ou não possui titular!')
        }
    }
}
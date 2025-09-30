import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../models/cliente";

export default class CadastrarDependente extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.log('Iniciando o cadastro de um novo dependente...')
        let titularNome = this.entrada.receberTexto('Qual o nome do titular que deseja se afiliar?')
        let titular = this.clientes.find(c => c.Nome === titularNome)
        if (titular) {
            let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
            let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
            let dataNascimento = this.entrada.receberData('Qual a data de nascimento do novo cliente?')
            let dependente = new Cliente(nome, nomeSocial, dataNascimento)
            titular.addDependents(dependente)
            console.log(`Cadastro do cliente ${dependente.Nome} realizado com sucesso!`)
        } else {
            console.log('Titular não encontrado!')
        }
    }
}
import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../models/cliente";

export default class EditarCliente extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        let titularNome = this.entrada.receberTexto('Qual o nome do cliente que deseja editar?')
        console.log(`Iniciando a edição de dados do cliente ${titularNome}`)
        let titular = this.clientes.find(c => c.Nome === titularNome)
        if (titular) {
            let novoNome = this.entrada.receberTexto('Qual o novo nome do cliente?')
            let novoNomeSocial = this.entrada.receberTexto('Qual o novo nome social do cliente?')
            let novaDataNascimento = this.entrada.receberData('Qual a nova data de nascimento do cliente?')
            titular.Nome = novoNome
            titular.NomeSocial = novoNomeSocial
            titular.DataNascimento = novaDataNascimento
            console.log('Dados do cliente atualizados com sucesso!')
        } else {
            console.log('Cliente não encontrado!')
        }
        console.log(`Finalizando a edição de dados do cliente ${titular?.Nome}`)
    }  
}
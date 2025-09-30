import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../models/cliente";
import CadastrarDocumentoCliente from "./cadastrarDocumentoCliente";
import CadastrarEnderecoTitular from "./cadastrarEnderecoTitular";

export default class CadastrarClienteTitular extends Processo {
    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente...')
        let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento do novo cliente?')
        let cliente = new Cliente(nome, nomeSocial, dataNascimento)

        this.processo = new CadastrarEnderecoTitular(cliente)
        this.processo.processar()

        this.processo = new CadastrarDocumentoCliente(cliente)
        this.processo.processar()

        let armazem = Armazem.InstanciaUnica
        armazem.Clientes.push(cliente)

        console.log('Finalizando o cadastro do cliente...')
    }
}
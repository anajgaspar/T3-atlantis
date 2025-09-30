import Processo from "../abstracoes/processo";
import { tipoDocumento } from "../enum/tipoDocumento"
import Cliente from "../models/cliente";
import Documento from "../models/documento";

export default class CadastrarCpf extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('Iniciando o cadastro de um novo CPF...')
        let numero = this.entrada.receberTexto('Qual o número do documento?')
        let dataExpedicao = this.entrada.receberData('Qual é a data de expedição do documento?')
        let cpf = new Documento(numero, tipoDocumento.CPF, dataExpedicao)
        this.cliente.Documentos.push(cpf)
    }
}
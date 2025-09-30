import Processo from "../abstracoes/processo";
import { tipoDocumento } from "../enum/tipoDocumento"
import Cliente from "../models/cliente";
import Documento from "../models/documento";

export default class CadastrarRg extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
    }

    processar(): void {
        console.log('Iniciando o cadastro de um novo RG...')
        let numero = this.entrada.receberTexto('Qual o número do documento?')
        let dataExpedicao = this.entrada.receberData('Qual é a data de expedição do documento?')
        let rg = new Documento(numero, tipoDocumento.RG, dataExpedicao)
        this.cliente.Documentos.push(rg)
    }
}
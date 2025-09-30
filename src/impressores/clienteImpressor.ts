import Impressor from "../interfaces/impressor";
import Cliente from "../models/cliente";
import DocumentosImpressor from "./documentosImpressor";
import EnderecoImpressor from "./enderecoImpressor";

export default class ClienteImpressor implements Impressor {
    private cliente: Cliente
    private impressor!: Impressor

    constructor(cliente: Cliente) {
        this.cliente = cliente

    }
    imprimir(): string {
        let impressao = `****************************\n`
            + `| Nome: ${this.cliente.Nome}\n`
            + `| Nome social: ${this.cliente.NomeSocial}\n`
            + `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n`
            + `| Data de cadastro: ${this.cliente.DataCadastro.toLocaleDateString()}`

        this.impressor = new EnderecoImpressor(this.cliente.Endereco)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        this.impressor = new DocumentosImpressor(this.cliente.Documentos)
        impressao = impressao + `\n${this.impressor.imprimir()}`

        impressao = impressao + `\n****************************`
        return impressao
    }

}
import Impressor from "../interfaces/impressor";
import Endereco from "../models/endereco";

export default class EnderecoImpressor implements Impressor {
    private endereco: Endereco
    constructor(endereco: Endereco) {
        this.endereco = endereco
    }
    imprimir(): string {
        let impressao = `| Endereço:\n`
            + `| Rua: ${this.endereco.Rua}\n`
            + `| Bairro: ${this.endereco.Bairro}\n`
            + `| Cidade: ${this.endereco.Cidade}\n`
            + `| Estado: ${this.endereco.Estado}\n`
            + `| País: ${this.endereco.Pais}\n`
            + `| Código Postal: ${this.endereco.Pais}`
        return impressao
    }
}
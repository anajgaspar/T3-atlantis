import Impressor from "../interfaces/impressor";
import Hospedagem from "../models/hospedagem";

export default class HospedagemImpressor implements Impressor {
    private hospedagem: Hospedagem
    private impressor!: Impressor

    constructor(hospedagem: Hospedagem) {
        this.hospedagem = hospedagem

    }
    imprimir(): string {
        let impressao = `****************************\n`
            + `| Cliente: ${this.hospedagem.cliente.Nome}\n`
            + `| Acomodação: ${this.hospedagem.acomodacao.NomeAcomodacao}\n`

        impressao = impressao + `\n****************************`
        return impressao
    }

}
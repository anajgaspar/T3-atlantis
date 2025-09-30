import Impressor from "../interfaces/impressor"
import Documento from "../models/documento"
import DocumentoImpressor from "./documentoImpressor"

export default class DocumentosImpressor implements Impressor {
    private documentos: Documento[]
    private impressor!: Impressor

    constructor(documentos: Documento[]) {
        this.documentos = documentos
    }

    imprimir(): string {
        let impressao = ``
        for (let index = 0; index < this.documentos.length; index++) {
            this.impressor = new DocumentoImpressor(this.documentos[index])
            if (index == 0) {
                impressao = impressao + `${this.impressor.imprimir()}`
            } else {
                impressao = impressao + `\n${this.impressor.imprimir()}`
            }

        }
        return impressao
    }
}
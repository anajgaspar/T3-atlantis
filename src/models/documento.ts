import { tipoDocumento } from "../enum/tipoDocumento"

export default class Documento {
    public numero: string
    public tipo: tipoDocumento
    public dataExpedicao: Date

    constructor(numero: string, tipo: tipoDocumento, dataExpedicao: Date) {
        this.numero = numero
        this.tipo = tipo
        this.dataExpedicao = dataExpedicao
    }

    public get Numero(){
        return this.numero
    }
    public get Tipo(){
        return this.tipo
    }
    public get DataExpedicao(){
        return this.dataExpedicao
    }
}
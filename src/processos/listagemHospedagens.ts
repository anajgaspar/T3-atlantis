import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import HospedagemImpressor from "../impressores/hospedagemImpressor";
import Impressor from "../interfaces/impressor";
import Hospedagem from "../models/hospedagem";

export default class ListagemHospedagens extends Processo {
    private hospedagens: Hospedagem[]
    private impressor!: Impressor
    constructor() {
        super()
        this.hospedagens = Armazem.InstanciaUnica.Hospedagens
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem das hospedagens...')
        this.hospedagens.forEach(hospedagem => {
            this.impressor = new HospedagemImpressor(hospedagem)
            console.log(this.impressor.imprimir())
        })
    }
}
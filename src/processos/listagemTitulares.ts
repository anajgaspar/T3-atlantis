import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ClienteImpressor from "../impressores/clienteImpressor";
import Impressor from "../interfaces/impressor";
import Cliente from "../models/cliente";

export default class ListagemTitulares extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem dos clientes titulares...')
        this.clientes.forEach(cliente => {
            if (this.titular(cliente)) {
                this.impressor = new ClienteImpressor(cliente)
                console.log(this.impressor.imprimir())
            }
        })
    }
    private titular(cliente: Cliente): boolean {
        let verificacao = false
        if (cliente.Titular == undefined) {
            verificacao = true
        }
        return verificacao
    }
}
import Processo from "../abstracoes/processo";
import MenuTipoDocumento from "../menus/menuTipoDocumento";
import Cliente from "../models/cliente";
import CadastrarCpf from "./cadastrarCpf";
import CadastrarPassaporte from "./cadastrarPassaporte";
import CadastrarRg from "./cadastrarRg";

export default class CadastrarDocumentoCliente extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuTipoDocumento()
        this.execucao = true
    }

    processar(): void {
        console.log('Inciando o cadastro de documentos...')
        while (this.execucao) {
            this.menu.mostrar()
            this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
            switch (this.opcao) {
                case 1:
                    this.processo = new CadastrarCpf(this.cliente)
                    this.processo.processar()
                    break;
                case 2:
                    this.processo = new CadastrarRg(this.cliente)
                    this.processo.processar()
                    break;
                case 3:
                    this.processo = new CadastrarPassaporte(this.cliente)
                    this.processo.processar()
                    break;
                case 0:
                    this.execucao = false
                    break;
                default:
                    console.log('Opção não entendida :(')
            }
        }
    }
}
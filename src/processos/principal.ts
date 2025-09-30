import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPrincipal"
import TipoCadastroCliente from "./tipoCadastroCliente"
import TipoListagemClientes from "./tipoListagemClientes"
import EditarCliente from "./editarCliente"
import ExcluirCliente from "./excluirCliente"
import CadastrarHospedagem from "./cadastrarHospedagem"
import ListagemAcomodacoes from "./listagemAcomodacoes"
import ListagemHospedagens from "./listagemHospedagens"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break;
            case 2:
                this.processo = new EditarCliente()
                this.processo.processar()
                break;
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break;
            case 4:
                this.processo = new ExcluirCliente()
                this.processo.processar()
                break;
            case 5:
                this.processo = new ListagemAcomodacoes()
                this.processo.processar()
                break;
            case 6:
                this.processo = new CadastrarHospedagem()
                this.processo.processar()
                break;
            case 7:
                this.processo = new ListagemHospedagens()
                this.processo.processar()
                break;
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break;
            default:
                console.log('Opção não entendida :(')
        }
    }
}
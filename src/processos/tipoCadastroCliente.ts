import Processo from "../abstracoes/processo";
import MenuTipoCadastroCliente from "../menus/menuTipoCadastroCliente";
import CadastrarClienteTitular from "./cadastrarClienteTitular";
import CadastrarDependente from "./cadastrarDependente";

export default class TipoCadastroCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoCadastroCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new CadastrarClienteTitular()
                this.processo.processar()
                break;
            case 2:
                this.processo = new CadastrarDependente()
                this.processo.processar()
                break;
            default:
                console.log('Opção não entendida :(')
        }
    }
}
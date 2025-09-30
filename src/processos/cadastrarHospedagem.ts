import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../models/cliente";
import Acomodacao from "../models/acomodacao";
import Hospedagem from "../models/hospedagem";
import DiretorCasalSimples from "../diretores/diretorCasalSimples";
import DiretorFamiliaMais from "../diretores/diretorFamiliaMais";
import DiretorFamiliaSimples from "../diretores/diretorFamiliaSimples";
import DiretorFamiliaSuper from "../diretores/diretorFamiliaSuper";
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais";
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples";
import MenuTipoAcomodacao from "../menus/menuTipoAcomodacao";

export default class CadastrarHospede extends Processo {
    private clientes: Cliente[];
    private acomodacoes: Acomodacao[];
    private hospedagens: Hospedagem[];

    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
        this.hospedagens = Armazem.InstanciaUnica.Hospedagens
        this.menu = new MenuTipoAcomodacao()
        this.execucao = true
    }
    processar(): void {
        console.log('Iniciando o cadastro de uma nova hospedagem...')
        let clienteNome = this.entrada.receberTexto('Qual o nome do cliente?')
        let cliente = this.clientes.find(c => c.Nome === clienteNome)
        let acomodacao: Acomodacao | undefined
        if (cliente) {
            do {
                this.menu.mostrar()
                this.opcao = this.entrada.receberNumero("Qual tipo de acomodação deseja?")
                switch (this.opcao) {
                    case 1:
                        acomodacao = new DiretorCasalSimples().construir()
                        break;
                    case 2:
                        acomodacao = new DiretorFamiliaMais().construir()
                        break;
                    case 3:
                        acomodacao = new DiretorFamiliaSimples().construir()
                        break;
                    case 4:
                        acomodacao = new DiretorFamiliaSuper().construir()
                        break;
                    case 5:
                        acomodacao = new DiretorSolteiroMais().construir()
                        break;
                    case 6:
                        acomodacao = new DiretorSolteiroSimples().construir()
                        break;
                    case 0:
                        return;
                    default:
                        console.log('Opção não entendida :(')
                }
            } while (!acomodacao);
            let hospedagem = new Hospedagem(cliente, acomodacao)
            this.hospedagens.push(hospedagem)
        } else {
            console.log('Cliente não encontrado!')
        }
        console.log(`Cadastro da hospedagem realizado com sucesso!`)
    }
}
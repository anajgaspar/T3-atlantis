import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../models/cliente";

export default class ExcluirCliente extends Processo {
    private clientes: Cliente[]
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        let clienteNome = this.entrada.receberTexto('Qual o nome do cliente que deseja excluir?')
        let cliente = this.clientes.find(c => c.Nome === clienteNome)
        if (cliente) {
            if (cliente.Titular) {
                let titular = cliente.Titular
                titular.removerDependente(cliente)
                console.log(`Dependente ${cliente.Nome} removido com sucesso!`)
            } else {
                const indice = Armazem.InstanciaUnica.Clientes.indexOf(cliente);
                if (indice > -1) {
                    Armazem.InstanciaUnica.Clientes.splice(indice, 1);
                }
                console.log(`Titular ${cliente.Nome} removido com sucesso!`);
            }
        } else {
            console.log("Cliente não encontrado.")
        }
    }
}
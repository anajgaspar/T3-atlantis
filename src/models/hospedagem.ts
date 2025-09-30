import Acomodacao from "./acomodacao";
import Cliente from "./cliente";

export default class Hospedagem {
    public cliente: Cliente
    public acomodacao: Acomodacao
    constructor(cliente: Cliente, acomodacao: Acomodacao) {
        this.cliente = cliente
        this.acomodacao = acomodacao
    }
    public get Cliente() {
        return this.cliente
    }
    public get Acomodacao() {
        return this.acomodacao
    }
}

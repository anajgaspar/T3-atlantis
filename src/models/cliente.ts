import Documento from "./documento";
import Endereco from "./endereco";
import Telefone from "./telefone";

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public dataNascimento: Date
    public dataCadastro: Date
    public telefones: Telefone[] = []
    public endereco!: Endereco
    public documentos: Documento[] = []
    public dependentes: Cliente[] = []
    public titular!: Cliente

    constructor(nome: string, nomeSocial: string, dataNascimento: Date) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.dataNascimento = dataNascimento
        this.dataCadastro = new Date()
    }

    public get Nome() {
        return this.nome 
    }
    public set Nome(novoNome: string) {
        this.nome = novoNome
    }
    public get NomeSocial() {
        return this.nomeSocial 
    }
    public set NomeSocial(novoNomeSocial: string) {
        this.nomeSocial = novoNomeSocial
    }
    public get DataNascimento() {
        return this.dataNascimento 
    }
    public set DataNascimento(novaDataNascimento: Date) {
        this.dataNascimento = novaDataNascimento
    }
    public get DataCadastro() {
        return this.dataCadastro 
    }
    public get Telefones() {
        return this.telefones 
    }
    public get Endereco() {
        return this.endereco 
    }
    public get Documentos() {
        return this.documentos 
    }
    public get Dependentes() {
        return this.dependentes 
    }
    public get Titular() {
        return this.titular 
    }

    public set Endereco(endereco: Endereco) { this.endereco = endereco }

    public addDependents(dependente: Cliente) {
        dependente.titular = this
        dependente.endereco = this.endereco.clonar() as Endereco
        dependente.telefones = this.telefones.map(tel => tel.clonar() as Telefone)
        this.dependentes.push(dependente)
    }

    public removerDependente(dep: Cliente) {
        this.dependentes = this.dependentes.filter(d => d !== dep)
    }
}
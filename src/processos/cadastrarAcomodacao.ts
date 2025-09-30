import Processo from "../abstracoes/processo";
import DiretorCasalSimples from "../diretores/diretorCasalSimples";
import DiretorFamiliaMais from "../diretores/diretorFamiliaMais";
import DiretorFamiliaSimples from "../diretores/diretorFamiliaSimples";
import DiretorFamiliaSuper from "../diretores/diretorFamiliaSuper";
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais";
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples";
import Armazem from "../dominio/armazem";
import Acomodacao from "../models/acomodacao";

export default class CadastrarAcomodacao extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        const diretores = [
            new DiretorCasalSimples(),
            new DiretorFamiliaMais(),
            new DiretorFamiliaSimples(),
            new DiretorFamiliaSuper(),
            new DiretorSolteiroMais(),
            new DiretorSolteiroSimples()
        ]
        diretores.forEach(diretor => {
            this.acomodacoes.push(diretor.construir())
        })
    }
}
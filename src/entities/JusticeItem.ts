export interface IJusticeItem {
    codItem: number;
    codItemPai: number;
    nome: string;
    situacao: string;
    dispositivoLegal: string;
    artigo: string;
    justES1grauMilitar: boolean;
    justES2grauMilitar: boolean;
    justESJuizadoEspFazendaPublica: boolean;
    justTurmaEstadualUniform: boolean;
    justES1grau: boolean;
    justES2grau: boolean;
    justESJuizadoEspecial: boolean;
    justESTurmasRecursais: boolean;
    justFed1grau: boolean;
    justFed2grau: boolean;
    justFedJuizadoEspecial: boolean;
    justFedTurmasRecursais: boolean;
    justFedNacionalUniform: boolean;
    justFedRegionalUniform: boolean;
    justFedCFJ: boolean;
    justTrab1grau: boolean;
    justTrab2grau: boolean;
    justTrabTST: boolean;
    justTrabCSJT: boolean;
    stf: boolean;
    stj: boolean;
    cnj: boolean;
    justMilUniao1grau: boolean;
    justMilUniaoSTM: boolean;
    justMilEst1grau: boolean;
    justMilEstTJM: boolean;
    justEleitoral1grau: boolean;
    justEleitoral2grau: boolean;
    justEleitoralTSE: boolean;
}


class JusticeItem implements IJusticeItem {

    public codItem = 0;
    public codItemPai = 0;
    public nome = "";
    public situacao = "";
    public dispositivoLegal = "";
    public artigo = "";
    public justES1grauMilitar = false;
    public justES2grauMilitar = false;
    public justESJuizadoEspFazendaPublica = false;
    public justTurmaEstadualUniform = false;
    public justES1grau = false;
    public justES2grau = false;
    public justESJuizadoEspecial = false;
    public justESTurmasRecursais = false;
    public justFed1grau = false;
    public justFed2grau = false;
    public justFedJuizadoEspecial = false;
    public justFedTurmasRecursais = false;
    public justFedNacionalUniform = false;
    public justFedRegionalUniform = false;
    public justFedCFJ = false;
    public justTrab1grau = false;
    public justTrab2grau = false;
    public justTrabTST = false;
    public justTrabCSJT = false;
    public stf = false;
    public stj = false;
    public cnj = false;
    public justMilUniao1grau = false;
    public justMilUniaoSTM = false;
    public justMilEst1grau = false;
    public justMilEstTJM = false;
    public justEleitoral1grau = false;
    public justEleitoral2grau = false;
    public justEleitoralTSE = false;
 
}

export default JusticeItem;
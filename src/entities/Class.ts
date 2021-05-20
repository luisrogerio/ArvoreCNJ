import JusticeItem from "@entities/JusticeItem";

export interface IClass {
    natureza: string;
    sigla: string;
    poloAtivo: string;
    poloPassivo: string;
    numeracaoPropria: boolean;

}

class Class extends JusticeItem implements IClass {
    public natureza = "";
    public sigla = "";
    public poloAtivo = "";
    public poloPassivo = "";
    public numeracaoPropria = false;
 
}

export default Class;

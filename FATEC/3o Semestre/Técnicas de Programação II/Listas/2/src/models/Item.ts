export default class Item {
    public descricao: string;
    public valor: number;
    public quantidade: number;

    constructor(descricao: string, valor: number, quantidade: number) {
        this.descricao = descricao;
        this.valor = valor;
        this.quantidade = quantidade;
    }
}
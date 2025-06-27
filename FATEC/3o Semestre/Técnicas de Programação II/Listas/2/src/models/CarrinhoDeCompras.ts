import Item from './Item';

export default class CarrinhoDeCompras {
    private itens: Array<Item>;

    constructor() {
        this.itens = [];
    }

    public adicionarItem(item: Item): void {
        this.itens.push(item);
    }
    public removerItem(item: Item): void {
        this.itens = this.itens.filter((i) => i.descricao !== item.descricao);
    }
    public exibirItens(): void {
        console.log(this.itens);
    }
    public calcularTotal(): number {
        return this.itens.reduce((acc, item) => {
            return acc + item.valor * item.quantidade;
        }, 0);
    }
}
export default class Pagamento {
    public processar(valor: number, forma:string): void {
        console.log(`Pagamento de R$${valor} realizado em ${forma}`);
    }
}
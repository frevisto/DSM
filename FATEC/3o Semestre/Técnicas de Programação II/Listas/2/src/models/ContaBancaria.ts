// Código da classe ContaBancaria
export default class ContaBancaria {
  private saldo: number;

  constructor(saldo: number) {
    this.saldo = saldo;
  }

  public depositar(valor: number): void {
    this.saldo += valor;
  }


  public sacar(valor: number): void {
    if (this.saldo < valor) {
      return;
    } else {
      this.saldo -= valor;
    }
  }
}

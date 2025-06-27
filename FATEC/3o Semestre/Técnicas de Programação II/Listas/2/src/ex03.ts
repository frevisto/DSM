import CarrinhoDeCompras from './models/CarrinhoDeCompras';
import Item from './models/Item';
import Pagamento from './models/Pagamento';


// Exercício 3
const carrinhoc = new CarrinhoDeCompras();
let item = new Item('Camiseta', 50, 2);
carrinhoc.adicionarItem(item);
item = new Item('Calça', 130, 1);
carrinhoc.adicionarItem(item);
item = new Item('Meia', 20, 3);
carrinhoc.adicionarItem(item);
const total = carrinhoc.calcularTotal();
console.log(total);
const pagamento = new Pagamento();
pagamento.processar(total, 'dinheiro');
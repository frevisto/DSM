import CarrinhoDeCompras from './models/CarrinhoDeCompras';
import Item from './models/Item';

// Exercício 2
const carrinho = new CarrinhoDeCompras();
carrinho.adicionarItem(new Item('Camiseta', 50, 2));
carrinho.adicionarItem(new Item('Calça', 130, 1));
carrinho.adicionarItem(new Item('Meia', 20, 3));
carrinho.removerItem(new Item('Camiseta', 50, 2));
carrinho.exibirItens();
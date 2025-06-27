import  ContaBancaria  from './models/ContaBancaria';
import  Cliente  from './models/Cliente';

// Exercício 1
const conta = new ContaBancaria(0); 
const cliente = new Cliente('João', '123.456.789-00', new Date('1990-01-01'), 'Maria', conta);
cliente.conta.depositar(100);
cliente.conta.sacar(50);
cliente.conta.sacar(60);

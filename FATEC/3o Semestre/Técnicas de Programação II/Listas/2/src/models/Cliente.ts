import ContaBancaria from './ContaBancaria';

export default class Cliente {
    nome: string;
    cpf: string;
    nasc:Date;
    nomemae: string;
    conta: ContaBancaria;

    constructor(nome: string, cpf: string, nasc:Date, nomemae: string, conta: ContaBancaria) {
        this.nome = nome;
        this.cpf = cpf;
        this.nasc = nasc;
        this.nomemae = nomemae;
        this.conta = conta;
    }
}
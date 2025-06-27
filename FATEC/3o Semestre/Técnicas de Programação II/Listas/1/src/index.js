"use strict";
exports.__esModule = true;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, email, nasc) {
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
    }
    Pessoa.prototype.imprimir = function () {
        console.log('Nome: ' + this.nome);
        console.log('Email: ' + this.email);
        console.log('Data nasc.: ' + this.nasc);
    };
    return Pessoa;
}());
exports["default"] = Pessoa;
var cliente = new Pessoa("Vitor", "email@email.com", "01/10/1995");
cliente.imprimir();

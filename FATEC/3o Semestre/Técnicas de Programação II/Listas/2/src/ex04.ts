import {Agenda, Contato } from './models/Agenda';

// Exercício 4
const agenda = new Agenda();
let contato = new Contato('João', '1234-5678','abc@man.com');
agenda.adicionarContato(contato)
contato = new Contato('Maria', '1234-5678', 'etc@amd.com');
agenda.adicionarContato(contato);
contato = new Contato('José', '1234-5678', 'ksdfçds');
agenda.adicionarContato(contato);
agenda.exibirContatos();
agenda.removerContato(contato);
agenda.exibirContatos();
export class Contato {
    public nome: string;
    public telefone: string;
    public email: string;

    constructor(nome: string, telefone: string, email: string) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}


export class Agenda {
    private contatos: Array<Contato>;

    constructor() {
        this.contatos = [];
    }

    public adicionarContato(contato: Contato): void {
        this.contatos.push(contato);
    }
    public removerContato(contato: Contato): void {
        this.contatos = this.contatos.filter((c) => c.nome !== contato.nome);
    }

    public exibirContatos(): void {
        console.log(this.contatos);
    }
}

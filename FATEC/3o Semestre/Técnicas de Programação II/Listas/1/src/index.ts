

export default class Pessoa {
    nome: string;
    email: string;
    nasc:string;
    
    constructor(nome: string, email: string, nasc:string) {
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
    }

    public imprimir():void{
        console.log('Nome: '+this.nome);
        console.log('Email: '+this.email);
        console.log('Data nasc.: '+this.nasc)
    }

    public idade(nasc:any):number{
        const hoje = new Date();
        const ano:number = parseInt(nasc.substring(6,10));
        const mes:number = parseInt(nasc.substring(3,5))-1; // os meses são representados como 0-11(jan-dez), por isso -1.
        const dia:number = parseInt(nasc.substring(0,2));
        const datan = new Date(ano,mes,dia);
        let idade:number = hoje.getFullYear() - datan.getFullYear();
        const m:number = hoje.getMonth() - datan.getMonth();

        if (m < 0 || (m==0 && hoje.getDate() < datan.getDate())){
            idade --
        }
        return idade;
    }
}


const cliente = new Pessoa("Vitor","email@email.com","01/10/1995");

console.log(cliente.idade("01/10/1995"));

// Feito até página 5/7
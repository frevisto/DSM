interface Pessoa {
    nome:string;
    idade:number;
    print():void;
    somar(a:number,b:number):number;
}

// Interface não permite que seus atributos tenham o modificador de visibilidade alterado;
// Apenas público;

class Cliente implements Pessoa{
    nome:string;
    idade:number;
    valor:number;
    private saldo:number;
    // método private
    constructor(a:string,b:number,c:number,d:number){
        this.nome=a;
        this.idade=b;
        this.saldo=c;
        this.valor=d;
    }
    
    print():void{
        console.log(this.nome,this.idade, this.saldo,this.valor)
    };

    somar(a:number,b:number):number{
        return this.valor+=a+b;
    }

}

const a = new Cliente(
    'Vitor',29,2000,0
);

const b:Pessoa=a;

b.print();

b.somar(1,1);


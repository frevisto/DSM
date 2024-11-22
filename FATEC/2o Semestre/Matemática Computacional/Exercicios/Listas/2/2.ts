enum Meses{
    Janeiro,
    Fevereiro,
    Março,
    Abril,
    Maio,
    Junho,
    Julho,
    Agosto,
    Setembro,
    Outubro,
    Novembro,
    Dezembro
}

enum Dias{
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado'
}

// funçao recursiva para calculo fatorial
// prova do 0! = 1 =>  1! = 1 × 0! = 1

function calc_Fat(n:number):number{
    if(n<0){
        console.log('Informe valores válidos.')
    }if(n==0||n==1){
        return 1;
    }else{
        return n* calc_Fat(n-1);
    }
}

class Pessoa{
    
    Nome:string;
    
    Idade:number;
    
    constructor(Nome:string,Idade:number){
    
        this.Nome=Nome;
    
        this.Idade=Idade;
    }
}

class Aluno extends Pessoa{
    
    RA:number;
    
    Ano_de_Ingresso:number;
    
    constructor(Nome:string,Idade:number,RA:number,Ano_de_Ingresso:number){
    
        super(Nome,Idade)
    
        this.RA=RA;
    
        this.Ano_de_Ingresso=Ano_de_Ingresso;
    }
}
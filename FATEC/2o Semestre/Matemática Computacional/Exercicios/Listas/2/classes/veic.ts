class Veiculo{
    Latitude:number;
    Longitude:number;

    constructor(a:number,b:number){
        this.Latitude=a;
        this.Longitude=b;
    }

    Mover(a:number,b:number){
        this.Latitude=a;
        this.Longitude=b;
    }
    retornar_Posicao_Bid():void{
        console.log('Latitude atual:',this.Latitude,'\nLongitude Atual:',this.Longitude)
    }
}

class Veic_Voador extends Veiculo{
    Altura:number;

    constructor(a:number, b:number, Altura:number){
    
        super(a,b);

        this.Altura=Altura;        
    }
    Voar(a:number):void{
        this.Altura=a;
    }

    retornar_Posicao_Trid():void{
        console.log('Latitude atual:',this.Latitude,'\nLongitude Atual:',this.Longitude,'\nAltura Atual:',this.Altura)
    }
}

export {Veiculo,Veic_Voador};
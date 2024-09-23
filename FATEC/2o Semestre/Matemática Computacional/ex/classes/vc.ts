export class Carro{
    prct_tanque:number;

    constructor(n:number){
        if (n>1&&n<0){
            throw new Error("Erro");
        }else{
            this.prct_tanque=n;
        }
    }
    Andar(n:number):void{
        let kms:number=n;
        let kmf:number=(this.prct_tanque*100)*11.75;
        let aux:number=(kmf-kms)/11.75;
        if(aux<0){throw new Error('Tanque vazio');
            this.prct_tanque=0;
        }else{
        this.prct_tanque=aux;}
        console.log(`Tanque em ${this.prct_tanque}\nKms rodados:${kms}`)
}
}
// classe caneta, 

//usuário como classe. 

//quando a função está dentro de uma classe, ela é um "metodo". Início em java
// 



class Cachorro{
    raca: string;
    peso:number;
    constructor(raca: string, peso:number){
        this.raca = raca;
        this.peso = peso;
    }
    latir(): string{        
        return "au au au";
    }
    engordar(){

        this.peso = this.peso+1;
    }
}

// this especifica 'neste objeto', usado neste objeto

export { Cachorro}
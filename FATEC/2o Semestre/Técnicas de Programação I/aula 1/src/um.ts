function somar(a:number,b:number):number|string {
    if( a < b ){
    return a + b; //somar
    }
    else{
    return "" + a + b; //concatenar, pq primeiro elemento é string e a direção do processamento é à direita. "Casting" é a alteração de tipo
    }
    }
    console.log("Resultado:", somar(1,2));
    console.log("Resultado:", somar(5,3));
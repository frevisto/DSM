export function validarInt(input: string): number {
    
    input = input.trim();

    let numero = parseInt(input);
    
    if (isNaN(numero) || numero == undefined) {
        console.log("Entrada inválida. Por favor, insira um número.");
        process.exit(1);
    }
    
    return numero;
}

export function validarFlt(input: string): number {
    
    input = input.trim();
    input = input.replace(",",".");

    let numero = parseFloat(input);
    
    if (isNaN(numero) || numero == undefined) {
        console.log("Entrada inválida. Por favor, insira um número.");
        process.exit(1);
    }
    
    return numero;
}

export function validarTriangulo(a: number[]): boolean {
    return (
        a[0] + a[1] >= a[2] &&
        a[1] + a[2] >= a[0] &&
        a[0] + a[2] >= a[1]
    );
}

export function validarMeses(a:number):boolean{
    if(a>12 || a<1){
        return false;
    }else {return true}
}


export function validarCategoria(a: string): string | void {
    if (a.length === 0 || a.length > 1) {
        console.log("Categoria inválida");
        process.exit(1);
    }

    if (!isNaN(parseInt(a, 10))) {
        console.log("Categoria informada difere do tipo esperado");
        process.exit(1);
    }

    return a.toLowerCase();
}

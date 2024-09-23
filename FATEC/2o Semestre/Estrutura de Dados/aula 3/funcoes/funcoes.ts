// esse tipo de construcão se refere a tratadores, app.get/post(rota, funçao tratadora). 
// Na memória, em operação, minha_op: any vai ser um endereço vazio (?) , n:number uma referencia ou cópia.


export function operacao(minha_op:any, n:number):number{
    return minha_op(n);
}

export function minha_op_1(x:number): number{
    return x*x;
}

export function minha_op_2(x:number): number{
    return x*x*x;
}

// referencias na memória

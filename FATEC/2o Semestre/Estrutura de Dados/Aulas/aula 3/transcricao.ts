//passagem de valor por cópia, cf. notes.txt
let xx: number = 1;

function alterar (xx:number){
    xx=xx+1;
}
console.log('Valor de xx antes', xx);
alterar(xx);
console.log('Valor de xx depois', xx);


// passagem por referencia, o objeto é carregado ele mesmo 
let yy: number[] = [1];

function alterar2 (a:number[]){
    a[0]=a[0]+2
};

console.log('Valor de yy antes', yy);
alterar2(yy);
console.log('Valor de yy depois', yy);


//má prática. parametro vazio, invocação dentro da função, vaza dados para o global. 
var zz:number=2;
function alterar3(){
    zz = zz+1
}
console.log(zz)


// esse tipo de construcão se refere a tratadores, app.get/post(rota, funçao tratadora). 
// Na memória, em operação, minha_op: any vai ser um endereço vazio (?) , n:number uma referencia ou cópia.
{let x:number=1;
function operacao(minha_op:any, n:number):number{
    return minha_op(x);
}

function minha_op_1(x:number): number{
    return x*x;
}

function minha_op_2(x:number): number{
    return x*x*x;
}

console.log(minha_op_1,2);//4
console.log(minha_op_2,2);//8
}
// referências na memória.

// evitar console.log() em funções não visuais.


//--------- INTERVALO
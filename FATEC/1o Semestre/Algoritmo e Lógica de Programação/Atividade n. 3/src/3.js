// adição de estrutura de decisão

function imprimir(a,b){
    if(a>b){
        let temp = a;
        a = b
        b=temp;
    }
    for(;a <= b; a++){
        console.log(a)
    }
}

imprimir(5,10);
imprimir(19,15);
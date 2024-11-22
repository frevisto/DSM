// criar uma pilha de funções;

function fA(fB:any, fC:any, z:number):any{
    return fB(fC,z)+1;
}
function fB(fC:any, z:number):any{
    return fC(z)*3;
}
function fC(z:number):any{
    return z*2;
}

console.log(fA(fB,fC,1));
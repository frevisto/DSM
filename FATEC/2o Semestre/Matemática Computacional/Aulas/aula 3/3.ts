// x(k) | x1 = 1   &    xk= 2 x k-1 

function enncontrar_xk(k:number):number{
    if(k==1){
        return 1;
    }else{
        return 2*(enncontrar_xk(k-1))
    }
};


console.log(enncontrar_xk(1));
console.log(enncontrar_xk(2));
console.log(enncontrar_xk(3));
console.log(enncontrar_xk(4));
console.log(enncontrar_xk(5));
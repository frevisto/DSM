export class Fibonacci{

    fibo(n:number):number{
        return (n<2) ? n: this.fibo(n-1)+this.fibo(n-2);
    }
}


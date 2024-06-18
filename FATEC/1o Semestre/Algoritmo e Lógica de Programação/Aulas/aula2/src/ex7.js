a = prompt("Primeiro número:");
b = prompt("Segundo número:" );
c = prompt("Terceiro núemro:");
console.log("Calcularemos o maior...")
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);
if(a > b && a > c){
    console.log(a)
}
if(b > a && b > c){
    console.log(b)
}
if(c > a && c > b){
    console.log(c)
};
console.log("Fim do programa.")
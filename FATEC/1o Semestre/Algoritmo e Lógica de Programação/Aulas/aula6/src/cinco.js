function inverte(nome){
    temp = "";
    i = 0;
    while(i < nome.length){
        temp = nome[i] + temp;
        i= i+1;
    }
    return temp;
}
r = inverte("Venceslau");
console.log(r);
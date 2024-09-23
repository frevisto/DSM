// seis números aleatórios pares

let i = 0;
while(i<6){
    let nro = Math.floor(Math.random()*100);
    if(nro%2==0){
        console.log(nro);
        i++;
    }
};
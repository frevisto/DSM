// apenas múltiplos de 3 | 5

let i = 0;
while(i<6){
    let nro = Math.floor(Math.random()*100);
    if((nro%3==0) || (nro%5==0)){
        console.log(nro);
        i++;
    }
};
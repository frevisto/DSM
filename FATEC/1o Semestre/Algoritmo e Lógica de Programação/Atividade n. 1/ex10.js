// maiores que 50 precisam ser pares
// menores, impares

let i = 0;
while(i<6){
    let nro = Math.floor(Math.random()*100);

    if((nro>50) & nro%2==0){
                console.log(nro);
        i++;
    }else if((nro<50)&(nro%2!==0)){
        console.log(nro);
        i++;
    }
};
// problema de Gauss jovem: soma de intervalo.

function somatorio(nro){
    let soma = 0;
    for( i = 0 ; i <= nro ; i++){
        soma = soma + i;
    }
    return soma;
   }

   let r = somatorio(10);
   console.log("Somatório:", r);



//    Sn = (a1+an)N / 2


function sGauss(pre, las) {
    if(pre > las){
        var temp = pre;
        var pre = las;
        var las = temp;
    }
    const N = (las - pre + 1);
    var Sn = ( N * (pre + las)) / 2;
    return Sn;
}

sGauss(100, 1);


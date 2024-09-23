// adiciona a condição NaN para insert negativo

function fatorial(nro) {
    let total = 0;
    if (nro < 0) {
        total = NaN;
        return total;
    } 
    else {
        let total = 1;
        for (let i = 1 ; i <= nro ; i++) {
          total *= i;
        }
        return total;
      }
      
}


let r = fatorial(5);
console.log("Fatorial:", r);
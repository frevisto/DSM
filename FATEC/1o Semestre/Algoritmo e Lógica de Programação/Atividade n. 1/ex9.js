// divisíveis por 3 ou 5, maiores que 80 e menores que 20


let i = 0;
while (i < 6) {
  let nro = Math.floor(Math.random() * 100);
  if ((nro < 20) | (nro > 80) & (nro % 3 == 0) | (nro % 5 == 0)) {
    console.log(nro);
    i++;
  }
};
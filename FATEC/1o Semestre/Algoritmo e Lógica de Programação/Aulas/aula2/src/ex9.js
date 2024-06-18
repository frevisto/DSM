console.log("Este programa irá calcular seu IMC.");
a = prompt("Por favor, insira sua massa corporal em kilos.");
a = parseFloat(a);
b = prompt("Por favor, insira sua altura em metros.");
b = parseFloat(b);
console.log("Estamos calculando seu índice! :)");
c = a / (b * b);
if (c >= 40) {
  console.log("Obesidade Mórbida.");
} else if (c >= 35 && c >= 39.9) {
  console.log("Obesidade severa");
} else if (c <= 34.9 && c >= 30) {
  console.log("Obesidade");
} else if (c <= 29.9 && c >= 25) {
  console.log("Levemente acima do peso");
} else if (c <= 24.9 && c >= 18.6) {
  console.log("Peso ideal");
} else if (c <= 18.5) {
  console.log("Abaixo do peso");
}
console.log("Seu índice corporal é:", c.toFixed(2));
console.log("Fim do programa.");
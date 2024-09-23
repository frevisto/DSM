a = prompt("Qual a temperatura corporal?");
a = parseFloat(a);
if (a >= 41) {
  console.log("Hipertermia");
}
if (a >= 39.6 && a <= 40.9) {
  console.log("Febre Alta");
}
if (a >= 37.8 && a <= 39.5) {
  console.log("Febre");
}
if (a >= 37.7 && a <= 35.1) {
  console.log("Normal");
}
if (a <= 35) {
  console.log("Hipotermia");
}
console.log("Fim do programa.");

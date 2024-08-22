// IMC se calcula peso / altura ²

const prov: string[] = process.argv.slice(2);

if (prov.length < 2) {
  console.log(
    "Este programa calcula seu IMC. Forneça PESO EM KILOS e ALTURA EM CENTÍMETROS como parâmetros, respectivamente. Para o funcionamento do programa, utilize pontos para a casa decimal."
  );
  process.exit(1);
}

const altura: number = parseFloat(prov[1]) / 100;

const peso: number = parseFloat(prov[0]);

if (isNaN(peso) || isNaN(altura)) {
  console.log(
    "Por favor, forneça valores numéricos válidos para peso e altura."
  );
  process.exit(1);
}

const IMC: number = parseFloat((peso / Math.pow(altura, 2)).toFixed(2));

if(IMC>=100){
  console.log("Por favor, forneça PESO EM KILOS e ALTURA EM CENTÍMETROS como parâmetros, respectivamente, e ponto na casa decimal.");
  process.exit(1);
}

function infImc(IMC:number): string{

    const tab: { [key: number]: string } = {
      1: "IMC Abaixo do Ideal ${IMC}",
      2: "IMC Ideal",
      3: "IMC Acima do Ideal",
      4: "Obesidade de Grau I",
      5: "Obesidade de Grau II",
      6: "Obesidade de Grau III",
    };
  
    if (IMC < 18.5) {
      return tab[1];
    } else if (IMC >= 18.5 && IMC <= 24.99) {
      return tab[2];
    } else if (IMC >= 25 && IMC <= 29.99) {
      return tab[3];
    } else if (IMC >= 30 && IMC <= 34.99) {
      return tab[4];
    } else if (IMC >= 35 && IMC <= 39.99) {
      return tab[5];
    } else if (IMC >= 40) {
      return tab[6];
    } else {
      return "IMC não calculado. Exceção lógica.";
    }
  }

const classificacao: string = infImc(IMC);

console.log(`Indicador: ${IMC}, ${classificacao}`);


// Observação: Durante os testes, recebi linha 53 por algumas tentativas. Primeiro acreditei ser uma questão de arredondamento.
// Inseri .toFixed(2) mas ainda recebia o erro. O IMC do teste era 24.97, então entendi que na estrutura de decisão a precisão
// deve acompanhar a quantidade de casas decimais do input! Ajustei os limites e recebi o resultado esperado.
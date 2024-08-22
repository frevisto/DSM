const gr: string[] = process.argv.slice(2);
if (gr.length < 2) {
    console.log(
      "Por favor, forneça BASE e ALTURA como parâmetros, respectivamente."
    );
    process.exit(1);
}    
var bsSt: string = gr[0].replace(",", ".");
var atSt: string = gr[0].replace(",", ".");

var bs:number=parseFloat(parseFloat(bsSt).toFixed(5));
var at:number=parseFloat(parseFloat(atSt).toFixed(5));

if (isNaN(bs) || isNaN(at)) {
  console.log(
    "Por favor, forneça valores numéricos válidos para base e altura."
  );
  process.exit(1);
}
var m2:number=parseFloat((bs*at).toFixed(5));

console.log("Área do retângulo:",m2);

// durante o teste deste script ocorreu um typo, escrevi como argumento "4,454," com uma segunda vírgula.

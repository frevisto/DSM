// recebe Fahrenheit : float
//  processa Cº = ((Fº - 32) / 9)*5
// retorna Cº

var sTp:string[] = process.argv.slice(2)
if (sTp.length===0){
    console.log("Este programa recebe graus Fahrenheit e retorna Celsius e Fahrenheit.")
}
var gFn:number= !isNaN(parseFloat(sTp[0]))?parseFloat(sTp[0]):NaN;
if (isNaN(gFn)){
    console.log("Por favor, informe valores numéricos válidos.");
    process.exit(1);
}
var gCs:number= ((gFn-32)/9)*5;
console.log("| Celsius:",gCs,"| Fahrenheit:",gFn,"|");
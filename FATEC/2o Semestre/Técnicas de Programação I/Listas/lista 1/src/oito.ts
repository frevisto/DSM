// recebe salário atual, aplica % de reajuste, mostra novo salário.

let sInf:string[]=process.argv.slice(2);

// possível reutilizar função verificadora de NaN. Ainda não sei perfeitamente e faltam algumas listas.


var bSal: number = !isNaN(parseInt(sInf[0])) ? parseInt(sInf[0]) : NaN;
var pRst: number = !isNaN(parseInt(sInf[1])) ? (parseInt(sInf[1])/100) : NaN;


if (isNaN(bSal) || isNaN(pRst)) {
    console.log("Por favor, informe valores numéricos válidos.");
    process.exit(1);
}

var nSal:number= (bSal*pRst)+bSal;

console.log("| Salário Base:",bSal,"| Percentual de Reajuste:", pRst,"| Novo Salário:",nSal,"|")
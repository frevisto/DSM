const aInp: string[] = process.argv.slice(2);

if (aInp.length === 0) {
    console.log("Este programa retorna aproximadamente sua idade em dias. Para o cálculo, informe ANOS, MESES E DIAS respectivamente como parâmetros.");
    process.exit(1);
}

const anos: number = !isNaN(parseInt(aInp[0])) ? parseInt(aInp[0]) : 0;
const meses: number = !isNaN(parseInt(aInp[1])) ? parseInt(aInp[1]) : 0;
const dias: number = !isNaN(parseInt(aInp[2])) ? parseInt(aInp[2]) : 0;


if (isNaN(anos) || isNaN(meses) || isNaN(dias)) {
    console.log("Por favor, informe valores numéricos válidos para anos, meses e dias.");
    process.exit(1);
}

const resAnos: number = 365 * anos;
const resMeses: number = 30 * meses;
const resDias: number = dias;

const resF: number = resAnos + resMeses + resDias;

console.log("Idade em dias:", resF);

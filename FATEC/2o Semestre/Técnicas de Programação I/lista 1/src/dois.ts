const ntInf: string[] = process.argv.slice(2);
console.log(ntInf);

if (ntInf.length === 0) {
    console.log("Este programa retorna a média simples números reais. Para o cálculo, informe-os como parâmetro e utilize PONTO para a casa decimal.");
    process.exit(1);
}

let ntP: number[] = [];

for (let i: number = 0; i < ntInf.length; i++) {
    const nro:number = parseFloat(ntInf[i]);

    if (!isNaN(nro)) {
        ntP.push(nro);
    } else {
        console.log(`Valor inválido fornecido: ${ntInf[i]}.`);
        process.exit(1);
    }
}

const soma: number = ntP.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

const average: number = soma / ntP.length;

console.log("Média dos valores fornecidos:", average);
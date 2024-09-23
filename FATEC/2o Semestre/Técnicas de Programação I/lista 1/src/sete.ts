// variaveis: total de eleitores, votos brancos, nulos e válidos.
// objetivo: calcular o percentual de cada um deles.

let vInf:string[]=process.argv.slice(2);

if (vInf.length === 0){
    console.log("Este programa recebe valores numéricos para TOTAL DE ELEITORES, VOTOS BRANCOS E VOTOS NULOS, então RETORNA O PERCENTUAL de cada.");
    process.exit(1);
}

const tEleitores: number = !isNaN(parseInt(vInf[0])) ? parseInt(vInf[0]) : 0;
const vBrancos: number = !isNaN(parseInt(vInf[1])) ? parseInt(vInf[1]) : 0;
const vNulos: number = !isNaN(parseInt(vInf[2])) ? parseInt(vInf[2]) : 0;

console.log("| % Votos Brancos:",((vBrancos/tEleitores)*100),"| % Votos Nulos:",((vNulos/tEleitores)*100),"| Total de votos:",(tEleitores),"|");
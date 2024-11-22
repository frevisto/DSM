import readline from 'readline';

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para gerar uma matriz quadrada com números aleatórios
function gerarMatrizQuadrada(n: number): number[][] {
    let matriz: number[][] = [];
    for (let i = 0; i < n; i++) {
        let linha: number[] = [];
        for (let j = 0; j < n; j++) {
            linha.push(Math.floor(Math.random() * 100) + 1);
        }
        matriz.push(linha);
    }
    return matriz;
}

// Função para somar a primeira linha às demais
function somarPrimeiraLinha(matriz: number[][]): number[][] {
    let primeiraLinha = matriz[0];
    let matrizResultante = matriz.map((linha) =>
        linha.map((valor, idx) => valor + primeiraLinha[idx])
    );
    return matrizResultante;
}

// Função principal
leitor.question('Informe a quantidade de elementos da matriz (n x n): ', (answer: string) => {
    let n = parseInt(answer);

    if (isNaN(n) || n <= 0) {
        console.log('Por favor, insira um número válido.');
        leitor.close();
        return;
    }

    // Gerar matriz quadrada
    let matrizOriginal = gerarMatrizQuadrada(n);
    console.log('Matriz Original:');
    console.table(matrizOriginal);

    // Somar a primeira linha às demais
    let matrizSoma = somarPrimeiraLinha(matrizOriginal);
    console.log('Matriz após somar a primeira linha a todas as outras:');
    console.table(matrizSoma);

    leitor.close();
});

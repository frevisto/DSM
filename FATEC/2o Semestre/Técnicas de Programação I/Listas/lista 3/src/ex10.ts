import readline from 'readline';

// Interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numbers: number[] = [];

function promptForNumber() {
    if (numbers.length < 10) {
        rl.question(`Digite um número inteiro entre 1 e 100 (${numbers.length + 1}/10):\n`, (input: string) => {
            const num = parseInt(input);

            if (isNaN(num) || num < 1 || num > 100) {
                console.log('Por favor, insira um número inteiro válido entre 1 e 100.');
            } else if (numbers.includes(num)) {
                console.log('Esse número já foi inserido. Por favor, insira um número diferente.');
            } else {
                numbers.push(num);
            }

            promptForNumber();
        });
    } else {
        rl.close();
        processResults();
    }
}

function processResults() {
    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    console.log('Números digitados em ordem crescente:', sortedNumbers.join(', '));
    console.log('O menor número digitado foi:', min);
    console.log('O maior número digitado foi:', max);
    console.log('A soma dos números digitados é:', sum);
}

// Iniciar a coleta de números
promptForNumber();

import readline from 'readline';

// Função para verificar se um número é primo
function isPrime(n: number): boolean {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

// Função para encontrar os fatores primos únicos de um número
function getPrimeFactors(n: number): number[] {
    const factors: number[] = [];
    for (let i = 2; i <= n; i++) {
        if (n % i === 0 && isPrime(i)) {
            factors.push(i);
            while (n % i === 0) {
                n /= i;
            }
        }
    }
    return factors;
}

// Interface de leitura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Receber input do usuário
rl.question('Digite um número inteiro:\n', (input: string) => {
    const num = parseInt(input);

    if (isNaN(num)) {
        console.log('Por favor, insira um número inteiro válido.');
    } else {
        if (isPrime(num)) {
            console.log(`${num} é um número primo.`);
        } else {
            const primeFactors = getPrimeFactors(num);
            console.log(`${num} não é um número primo.`);
            console.log(`Os fatores primos únicos de ${num} são: ${primeFactors.join(', ')}`);
        }
    }

    rl.close();
});

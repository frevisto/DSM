// src/index.ts

import readline from 'readline';

// Cria uma interface de leitura para interagir com o usuário via console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Função que retorna uma Promise para solicitar uma pergunta ao usuário
 * @param query - A pergunta a ser exibida para o usuário
 * @returns Promise<string> - A resposta do usuário
 */
function askQuestion(query: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer);
        });
    });
}

/**
 * Função principal que executa o fluxo do programa
 */
async function main() {
    const nomes: string[] = []; // Array para armazenar os nomes dos alunos
    const notas: [number, number][] = []; // Array para armazenar as duas notas de cada aluno
    const medias: number[] = []; // Array para armazenar as médias de cada aluno

    const numeroAlunos = 5; // Número total de alunos

    for (let i = 0; i < numeroAlunos; i++) {
        console.log(`\n--- Aluno ${i + 1} ---`);

        // Solicita o nome do aluno e garante que não esteja vazio
        let nome = '';
        while (nome.trim() === '') {
            nome = await askQuestion('Digite o nome do aluno: ');
            if (nome.trim() === '') {
                console.log('O nome não pode estar vazio. Tente novamente.');
            }
        }

        // Solicita a primeira nota e garante que seja um número válido entre 0 e 100
        let nota1: number;
        while (true) {
            const input = await askQuestion('Digite a primeira nota (0 a 100): ');
            nota1 = parseFloat(input);
            if (!isNaN(nota1) && nota1 >= 0 && nota1 <= 100) {
                break;
            } else {
                console.log('Por favor, insira uma nota válida (número entre 0 e 100).');
            }
        }

        // Solicita a segunda nota e garante que seja um número válido entre 0 e 100
        let nota2: number;
        while (true) {
            const input = await askQuestion('Digite a segunda nota (0 a 100): ');
            nota2 = parseFloat(input);
            if (!isNaN(nota2) && nota2 >= 0 && nota2 <= 100) {
                break;
            } else {
                console.log('Por favor, insira uma nota válida (número entre 0 e 100).');
            }
        }

        // Armazena os dados coletados nos arrays correspondentes
        nomes.push(nome);
        notas.push([nota1, nota2]);
        medias.push((nota1 + nota2) / 2);
    }

    // Fecha a interface de leitura após coletar todos os dados
    rl.close();

    // Exibe os resultados
    console.log('\n--- Resultados ---');
    for (let i = 0; i < numeroAlunos; i++) {
        console.log(`\nAluno: ${nomes[i]}`);
        console.log(`Notas: ${notas[i][0]} e ${notas[i][1]}`);
        console.log(`Média: ${medias[i].toFixed(2)}`);
    }

    // Alternativamente, você pode exibir os resultados em formato tabular:
    /*
    console.log('\n--- Resultados ---');
    console.log('Aluno\t\tNota 1\tNota 2\tMédia');
    for(let i = 0; i < numeroAlunos; i++) {
        console.log(`${nomes[i]}\t\t${notas[i][0]}\t${notas[i][1]}\t${medias[i].toFixed(2)}`);
    }
    */
}

// Executa a função principal
main();

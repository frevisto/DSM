import { leitor } from "./interface/leitor";

function Vogais() {
    let vogais: number = 0;
    let consoantes: number = 0;

    leitor.question('Insira uma palavra ou enter para sair: ', (answer: string) => {
        if (answer.length === 0) {
            leitor.close();
            process.exit(1);
        } else {
            for (let i: number = 0; i < answer.length; i++) {
                if (answer[i] === "a" || answer[i] === "e" || answer[i] === "i" || answer[i] === "o" || answer[i] === "u") {
                    vogais++;
                } else if (/[a-zA-Z]/.test(answer[i])) {
                    consoantes++;
                }
            }

            console.log('Vogais:', vogais, '\nConsoantes:', consoantes);
            leitor.close();
        }
    });
}

Vogais();

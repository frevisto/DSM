// import { leitor } from "./interface/leitor";


// enum linguaAnimal {
//     cachorro = "auau",
//     gato = "miau",
//     bebe = "buá",
//     galo = "cocoricó"
// }

// leitor.question("O bicho faz?\n", (answer: string) => {
//     let foundKey: string | undefined;

//     for (const key in linguaAnimal) {
//         if (linguaAnimal[key as keyof typeof linguaAnimal] === answer) {
//             foundKey = key;
//             break;
//         }
//     }

//     if (foundKey) {
//         console.log(`${foundKey}`);
//     } else {
//         console.log(`Nenhum animal encontrado para o som: "${answer}"`);
//     }

//     leitor.close();  // Não se esqueça de fechar o leitor!
// });

// Há formas de solucionar um problema. Acima, vemos a solução por iteração.
// Abaixo, vemos a solução por recursividade. Ambas as soluções foram sugeridas
// pelo ChatGPT de forma um pouco complexa. Prof. Fabrício faz notar "complexidade
// desnecessária", concordo, embora, a robustez, a lógica e a efetividade do código
// sugerido são indubitáveis.

// enum linguaAnimal {
//     cachorro = "auau",
//     gato = "miau",
//     bebe = "buá",
//     galo = "cocoricó"
// }

// const keys = Object.keys(linguaAnimal) as Array<keyof typeof linguaAnimal>;

// function encontrarChave(valor: string, keys: string[], index: number = 0): string | undefined {
//     // Caso base: se chegarmos ao fim do array de chaves, retornamos undefined
//     if (index >= keys.length) {
//         return undefined;
//     }

//     // Verifica se o valor atual corresponde ao valor no enum
//     const key = keys[index];
//     if (linguaAnimal[key as keyof typeof linguaAnimal] === valor) {
//         return key;
//     }

//     // Chamada recursiva para o próximo índice
//     return encontrarChave(valor, keys, index + 1);
// }


// leitor.question("Som?\n", (valor: string) => {
//     const chave = encontrarChave(valor, keys);
    
//     if (chave) {
//         console.log(`${chave}`);
//     } else {
//         console.log(`Não foi encontrada nenhuma chave correspondente ao som "${valor}".`);
//     }

//     leitor.close();
// });

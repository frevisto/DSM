/*
* A simple interface that models a set
*
* Author: Fabrício Galende M. de Carvalho, DSc.
*/

/*PC.3.5. Desenvolva uma classe, denominada de “Conjunto” que faça uso de um array para
*armazenar os elementos de um conjunto (i.e.: deve possuir o mesmo comportamento da
*interface Set do TypeScript). Adicionalmente, deve implementar os métodos denominados de
*inserir, pertence, união e intersecção. Implemente sua classe utilizando o arquivo denominado
*set_model.ts, fornecido pelo professor. Faça uso de tipos genéricos.
*/

class Conjunto<T> {
    elementos: T[];

    constructor() {
        this.elementos = [];
    }

    // Método para inserir um elemento no conjunto
    inserir(elemento: T): boolean {
        if (!this.pertence(elemento)) {
            this.elementos.push(elemento);
            return true;
        }
        return false;
    }

    // Método para verificar se um elemento pertence ao conjunto
    pertence(elemento: T): boolean {
        return this.elementos.includes(elemento);
    }

    // Método para unir dois conjuntos
    uniao(conjunto_1: Conjunto<T>, conjunto_2: Conjunto<T>): Conjunto<T> {
        const resultado = new Conjunto<T>();

        // Adiciona todos os elementos do primeiro conjunto
        conjunto_1.elementos.forEach(elem => resultado.inserir(elem));

        // Adiciona todos os elementos do segundo conjunto
        conjunto_2.elementos.forEach(elem => resultado.inserir(elem));

        return resultado;
    }

    // Método para encontrar a interseção de dois conjuntos
    interseccao(conjunto_1: Conjunto<T>, conjunto_2: Conjunto<T>): Conjunto<T> {
        const resultado = new Conjunto<T>();

        conjunto_1.elementos.forEach(elem => {
            if (conjunto_2.pertence(elem)) {
                resultado.inserir(elem);
            }
        });

        return resultado;
    }
}

// Exemplo de uso
const conjuntoA = new Conjunto<number>();
conjuntoA.inserir(1);
conjuntoA.inserir(2);
conjuntoA.inserir(3);

const conjuntoB = new Conjunto<number>();
conjuntoB.inserir(2);
conjuntoB.inserir(3);
conjuntoB.inserir(4);

// União
const uniao = conjuntoA.uniao(conjuntoA, conjuntoB);
console.log("União:", uniao.elementos); // Saída: [1, 2, 3, 4]

// Interseção
const interseccao = conjuntoA.interseccao(conjuntoA, conjuntoB);
console.log("Interseção:", interseccao.elementos); // Saída: [2, 3]


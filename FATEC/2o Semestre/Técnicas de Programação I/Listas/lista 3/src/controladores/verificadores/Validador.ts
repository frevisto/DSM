export function validarInt(input: string): number {

    let ipt: string = input.trim();

    let numero = parseInt(ipt);

    if (isNaN(numero) || numero == undefined) {
        console.log("Entrada inválida. Por favor, insira um número.");

        process.exit(1);

    } else {

        return numero;
        
    };
};
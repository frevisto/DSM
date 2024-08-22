import { validarInt } from "./controladores/validadores";
import { leitor } from "./interface/leitor";


var resp: number[] = [];

function fazerPerguntas() {

    leitor.question("Qual sua idade em anos?\n", (answer: string) => {

        resp.push(validarInt(answer));

        leitor.question("Você sabe quantos meses?\n", (answer: string) => {

            resp.push(validarInt(answer));


            leitor.question("E quantos dias?\n", (answer: string) => {

                resp.push(validarInt(answer));
                console.log(resp[0],resp[1],resp[2]);
                const totalDias = (resp[0] * 365) + (resp[1] * 30) + resp[2];

                console.log("Sua idade em dias é aproximadamente:", totalDias);

                leitor.close();
            });
        });
    });
}

fazerPerguntas();


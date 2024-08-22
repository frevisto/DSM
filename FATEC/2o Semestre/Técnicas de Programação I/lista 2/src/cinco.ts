import { validarInt } from "./controladores/validadores";
import { leitor } from "./interface/leitor";


var resp: number[] = [];


function prgVer(){
    leitor.question("Qual o número total de eleitores do município?\n",(answer:string)=>{
        resp.push(validarInt(answer));

        leitor.question("Quantos destes votos foram brancos?\n",(answer:string)=>{
        resp.push(validarInt(answer));

            leitor.question("Quantos destes votos foram nulos?\n",(answer:string)=>{
                resp.push(validarInt(answer));

                leitor.question("Por fim, quantos votos você obteve?\n",(answer:string)=>{
                resp.push(validarInt(answer));
                
                const vVal:number=resp[0]-resp[1]-resp[2];
                const thrsH:number=(vVal+resp[1]);
                
                if(resp[3]/thrsH>=0.1){
                        console.log(`Parabéns, você está eleito e obteve ${(resp[3]/thrsH)*100}% dos votos`);
                } else{
                    console.log(`Infelizmente a contagem de seus votos não atingiu o piso de 10%, sendo ela: ${(resp[3]/thrsH)*100}%`);
                }

                leitor.close();
                });
            });
        });
    });
};
prgVer();
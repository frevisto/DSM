import { leitor } from "./interface/leitor";

let continuar = true;

function perguntar(){
    if(continuar){
        leitor.question(`Digite uma palavra (ou 'sair' para terminar):\n`, function (answer:string) {
            if(answer.toLowerCase()==="sair"){
                continuar=false;
                leitor.close;
                process.exit(1);
            } else{
                console.log(`Você digitou: ${answer}`);
                perguntar();
            }
        });
    }
}
perguntar();
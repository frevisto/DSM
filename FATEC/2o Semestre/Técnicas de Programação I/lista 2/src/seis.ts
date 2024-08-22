import { validarFlt } from "./controladores/validadores";
import { leitor } from "./interface/leitor";

var sB:number;

leitor.question("Por favor, insira seu salário atual.\n",(answer:string)=>{
    sB=(validarFlt(answer));
    if(sB<=650){
        console.log(`Seu salário de R$${sB} é passível de um reajuste de 10%.\n Novo salário: R$${(sB+(sB*0.1)).toFixed(2)}`)
    }else{
        console.log(`Seu salário de R$${sB} é passível de um reajuste de 5%.\n Novo salário: R$${(sB+(sB*0.05)).toFixed(2)}`)
    }
    leitor.close();
});
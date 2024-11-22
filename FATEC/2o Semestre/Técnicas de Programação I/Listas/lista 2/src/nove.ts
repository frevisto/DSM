import { leitor } from "./interface/leitor";
import { validarInt , validarMeses } from "./controladores/validadores";
import { meses } from "./listas/meses"


leitor.question("Informe o número do més que deseja:\n",(answer:string)=>{
    var t = validarInt(answer);
    if(validarMeses(t)){
        console.log(`O mês ${t} é ${meses[t]}`)
    }else {
        console.log("Número do mês inválido.");
    }
    leitor.close();
})
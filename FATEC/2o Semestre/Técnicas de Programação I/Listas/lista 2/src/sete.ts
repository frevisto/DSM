import { validarTriangulo, validarFlt } from "./controladores/validadores";
import { classificarTriangulo } from "./controladores/classificadores";
import { leitor } from "./interface/leitor";

// Esse programa avalia lados de um triangulo e retorna sua classificação, caso possível.

var lados:number[]=[];

leitor.question("Informe o primeiro comprimento:\n",(answer:string)=>{
    lados.push(validarFlt(answer))
    leitor.question("Informe o segundo comprimento:\n",(answer:string)=>{
        lados.push(validarFlt(answer))
        leitor.question("Informe o terceiro comprimento:\n",(answer:string)=>{
            lados.push(validarFlt(answer))

            if(!validarTriangulo(lados)){
                console.log("Comprimentos informados não formam um triângulo")
            }else{
                console.log(classificarTriangulo(lados));
            }
            leitor.close();
        })
    })
});
import { leitor } from "./interface/leitor";

leitor.question("Informe uma letra:\n",(answer:string)=>{
    switch(answer){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            console.log("Vogal");
            break;

            default:
                console.log("Consoante")
                leitor.close();
    }
})
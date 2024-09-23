import { validarCategoria } from "./controladores/validadores";
import { leitor } from "./interface/leitor";

leitor.question("Para o informe de seu percentual de reajuste, informe sua categoria:\n",(answer:string): void=>{
    let x = validarCategoria(answer);
    switch(x){
        case "a":
        case "c":
        case "f":
        case "h":
            console.log("Percentual de reajuste: 10%");
            break;
                case 'b': 
                case 'd':
                case 'e':
                case 'i':
                case 'j':
                case 't':
                    console.log("Percentual de reajuste: 15%");
                    break;
                        case "k":
                        case "r":
                            console.log("Percentual de reajuste: 25%");
                            break;
                                case "l": 
                                case "m":
                                case "n":
                                case "o":
                                case "p":
                                case "q":
                                case "s":
                                    console.log("Percentual de reajuste: 35%")
                                    break;
                                        case "u":
                                        case "v":
                                        case "x":
                                        case "y":
                                        case "z":
                                            console.log("Percentual de reajuste: 50%");
                                            break;
                                                default:
                                                    console.log("Percentual não informado");
                                                    break;
    }   
    leitor.close();
});
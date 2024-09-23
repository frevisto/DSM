import { createContext, useState } from "react";
import { CepContextProps, CepProps } from "../types";
import Cep from "../services/Cep";

export const CepContext = createContext({} as CepContextProps);

export function CepProvider({children}:any){
    const [cep,setCep] = useState<CepProps | null>(null);

    const handle = async function(nro:string){
        const response = await Cep.get(nro);
        setCep(response);
    }

    return <CepContext.Provider value={{cep, handle}}>
        {children}
    </CepContext.Provider>
}
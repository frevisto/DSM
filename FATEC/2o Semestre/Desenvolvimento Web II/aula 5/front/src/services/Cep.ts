
import { getCep } from "./api";

class Cep {
    async get(nro:string){
        const {data} = await getCep.get(`/${nro}/json/`);
        return data;
    }
}

const objeto = new Cep();
export default objeto;
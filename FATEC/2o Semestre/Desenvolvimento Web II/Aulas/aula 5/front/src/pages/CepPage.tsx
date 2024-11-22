import { useContext, useState } from "react";
import { CepContext } from "../contexts/CepContext";

export default function CepPage() {
  const [entrada, setEntrada] = useState("");
  const {cep, handle} = useContext(CepContext);

  return (
    <div>
      <input 
        value={entrada} 
        onChange={(e) => setEntrada(e.target.value)} 
      />
      <button onClick={() => handle(entrada)}>Obter</button>
      <div>
        <div>Logradouro: {cep?.logradouro}</div>
        <div>Localidade: {cep?.localidade}</div>
        <div>UF: {cep?.uf}</div>
      </div>
    </div>
  );
}
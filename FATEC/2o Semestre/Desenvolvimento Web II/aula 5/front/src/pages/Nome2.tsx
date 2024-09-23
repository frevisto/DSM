import { useState } from "react";
import { nodeModuleNameResolver, parseIsolatedEntityName } from "typescript";

export default function listarNome() {
  const [nome, setNome] = useState("");
  const [nomes, setNomes] = useState<string[]>([]);

  function save(){
    const aux = [...nomes,nome];
    setNomes(aux);
  }

  const saida= nomes.map((item,index)=><li key={index}>{item}</li>);

  return (
    <div>
      <h3>Exercício 2</h3>
      <label htmlFor="nome">Nome:</label>
      <input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <input type="button" onClick={() => save()}/>
      <div>
        <ol>
            {saida}
        </ol>
      </div>
    </div>
  );
}
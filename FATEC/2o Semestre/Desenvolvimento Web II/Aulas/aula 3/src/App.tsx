import { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");

  return (
    <div>
      <Form nome={nome} setNome={setNome} idade={idade} setIdade={setIdade} />
      <Result nome={nome} idade={idade} />
    </div>
  );
}

export default App;
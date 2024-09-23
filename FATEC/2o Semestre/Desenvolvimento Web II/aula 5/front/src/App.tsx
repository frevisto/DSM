import { useState } from "react";
import A from "./components/A";
import B from "./components/B";
import styled from "styled-components";

function App() {
  const [origem, setOrigem] = useState("B");
  return (
    <WrapperSld>
      <div>Origem: {origem}</div>
      <RowSld>
        <A set={setOrigem} />
        <B set={setOrigem} />
      </RowSld>
    </WrapperSld>
  );
}

export default App;

const WrapperSld = styled.div`
  background-color: wheat;
  padding: 5px;
  display: flex;
  flex-direction: column;
  max-width: 200px;
`;

const RowSld = styled.div`
  background-color: thistle;
  padding: 5px;
  display: flex;
  flex-direction: row;
`;

// Todo componente precisa de um return.
// Até quando chamando outro componente.
// A menos que não tenha retorno/renderização.
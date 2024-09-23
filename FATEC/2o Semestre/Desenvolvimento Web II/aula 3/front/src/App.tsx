import React, { useContext, useState } from 'react';
import Form from "./components/Form";
import Result from "./components/Result";
import logo from './logo.svg';
import './App.css';
import { Contexto, Provedor } from './contexts/Contexto';

function App() {
  const {nome, idade}=useContext(Contexto);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        
          <Provedor >
          <Form />
          <Result />
          </Provedor>
        

      </header>
    </div>
  );
}

export default App;

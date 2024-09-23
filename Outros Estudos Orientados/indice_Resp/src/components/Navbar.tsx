import React from "react";

function Navbar({onClear}){
    return (
        <nav className="bg-blue-500 text-white p-4">
            <h1 className="text-xl">Exercícios do 2º Semestre</h1>
            <button
            onClick={onClear} className="bg-red-500 hover:bg-red700 text-white font-bold py-2 px-4 rounded mt-2"
            >Limpar Main</button>
        </nav>
    );
}

export default Navbar;
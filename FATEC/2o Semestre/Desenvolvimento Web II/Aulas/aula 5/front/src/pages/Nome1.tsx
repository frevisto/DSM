import React, { useState } from 'react';

export default function Nome() {

    const [nome, setName] = useState("");

    return (
        <div>
            <label htmlFor='escrita'>Nome: </label>
            <input 
                id='escrita' 
                type='text' 
                value={nome} 
                onChange={(e) => setName(e.target.value)}
            />
            <div>Nome: {nome}</div>
        </div>
    );
}

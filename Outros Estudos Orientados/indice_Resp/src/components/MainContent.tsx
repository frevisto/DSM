import React from "react";

function MainContent({content}){
    return (
        <main className="flex-1 p-4">
            {content || <p>Selecione uma seção para carregar seu conteúdo.</p>}
        </main>
    );
}

export default MainContent;
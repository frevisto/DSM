import React from "react";

function Aside(){
    return (
        <aside className="bg-gray-200 w-64 p-4"
        >
            <h2 className="text-lg font-semibold">Índice
            </h2>
            <ul>
                <li><a href="#section1">Section 1</a></li>
                <li><a href="#section2">Section 2</a></li>
                <li><a href="#section3">Section 3</a></li>
            </ul>
        </aside>
    );
}

export default Aside;
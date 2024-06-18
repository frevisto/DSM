function exer7() {

    entrada = document.querySelector("#entrada").value;

    texto = document.createTextNode(entrada);

    
    li = document.createElement("li")
    li.setAttribute("title","Nome fornecido");
    li.appendChild(texto);    
    
    // p.appendChild(texto);
    document.querySelector('ol').appendChild(li);
  }
  
function exer8() {
    
  entrada = document.querySelector("#entrada").value;

  if (entrada.length == 0) {
    alert("Forneça entrada");
  } else {
    texto = document.createTextNode(entrada);

    li = document.createElement("li");
    li.setAttribute("title", "Nome fornecido");
    li.appendChild(texto);

    // p.appendChild(texto);
    document.querySelector("ol").appendChild(li);
  }
}

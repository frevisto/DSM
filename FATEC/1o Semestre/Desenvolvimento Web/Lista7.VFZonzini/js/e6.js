function exer6() {
    // obtém o value do campo entrada
    entrada = document.querySelector("#entrada").value;
    // seta o corpo da div saida
    p = document.createElement("p");
    p.setAttribute("title","Nome fornecido");
    texto = document.createTextNode(entrada);
    p.appendChild(texto);
    document.querySelector('#saida').appendChild(p);
  }
  
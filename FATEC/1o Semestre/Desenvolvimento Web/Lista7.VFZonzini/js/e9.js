function exer9() {
  let entrada = document.querySelector("#entrada").value;
  const q = document.getElementById("total");
  if (entrada.length == 0) {
    alert("Forneça entrada");
  } else {
    let texto = document.createTextNode(entrada);
    let li = document.createElement("li");
    li.setAttribute("title", "Nome fornecido");
    li.appendChild(texto);
    document.querySelector("ol").appendChild(li);
  }
  let quantidade = document.getElementsByTagName("li").length;
  q.innerText = quantidade;
}

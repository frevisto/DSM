export function isValidCPF(value: string): boolean {
  // Verifica se o valor é uma string
  if (typeof value !== "string") {
    return false;
  }
  // Remove qualquer caractere que não seja número
  value = value.replace(/[^\d]+/g, "");
  // Verifica se o CPF tem 11 dígitos e não é uma sequência de dígitos iguais
  if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) {
    return false;
  }
  // Converte a string em um array de números
  const values = value.split("").map((el) => +el);
  // Função para calcular o dígito verificador
  const rest = (count: number) =>
    ((values
      .slice(0, count - 1) // Corrigido aqui para pegar count-1 dígitos
      .reduce((soma, el, index) => soma + el * (count - index), 0) *
      10) % 11) %
    10;
  // Verifica se os dois dígitos verificadores são corretos
  return rest(10) === values[9] && rest(11) === values[10];
}
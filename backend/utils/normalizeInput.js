export function normalizarCampoTexto(valor) {
  if (typeof valor !== "string") return valor;
  const palavrasProibidas = [
    "SELECT",
    "UPDATE",
    "DELETE",
    "ORDER BY",
    "FROM",
    "WHERE",
    "CREATE",
    "TABLE",
    "DATABASE",
  ];
  let limpo = valor.trim();

  limpo = limpo.replace(/["'?=:]/g, "");

  for (const palavra of palavrasProibidas) {
    const regex = new RegExp(`\\b${palavra}\\b`, "gi");
    limpo = limpo.replace(regex, "");
  }

  return limpo;
}
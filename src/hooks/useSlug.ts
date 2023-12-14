export function createSlug(text: string) {
  return removerAcentos(text)
    .toLowerCase()
    .replaceAll("-", "")
    .replaceAll("  ", " ")
    .replaceAll(" ", "-");
}

function removerAcentos(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

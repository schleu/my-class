export function createSlug(text: string) {
  return text
    .toLowerCase()
    .replaceAll("-", "")
    .replaceAll("  ", " ")
    .replaceAll(" ", "-");
}

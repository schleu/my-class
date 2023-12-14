export const gerarNumeroAleatorio = (n: number) => {
  const r = Math.round(Math.random() * n);
  return r < 1 ? 1 : r;
};

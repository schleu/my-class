import { useGenerate } from "./helpers/useGenerate";

function getRate() {
  const r = useGenerate.randomNumber(10);
  return r > 5 ? 5 : r;
}

export const ratingsMoked = Array(useGenerate.randomNumber(99))
  .fill("")
  .map(() => ({
    id: useGenerate.UUID(),
    user: {
      id: useGenerate.UUID(),
      name: useGenerate.randomFullName(),
      picture: useGenerate.randomPhoto(),
    },
    rate: getRate(),
    comment: useGenerate.LoremIpsum(useGenerate.randomNumber(20)),
    createdAt: useGenerate.randomDate(),
  }));

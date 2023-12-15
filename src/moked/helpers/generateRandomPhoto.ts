import { useGenerate } from "./useGenerate";

export function generateRandomPhoto() {
  return `https://randomuser.me/api/portraits/med/men/${useGenerate.randomNumber(
    99
  )}.jpg`;
}

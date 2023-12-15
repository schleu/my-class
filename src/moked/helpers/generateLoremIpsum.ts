export function generateLoremIpsum(wordsCount = 69) {
  const loremIpsumText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const wordsArray = loremIpsumText.split(" ");

  wordsCount = Math.min(wordsCount, wordsArray.length);

  const selectedWords = [];
  for (let i = 0; i < wordsCount; i++) {
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    selectedWords.push(wordsArray[randomIndex]);
  }

  const loremIpsum = selectedWords.join(" ");

  return loremIpsum;
}

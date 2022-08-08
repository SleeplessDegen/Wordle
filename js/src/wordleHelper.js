export async function generateWordSet() {
  let wordSet;
  let guessMe;
  await fetch('./data/words.txt')
    .then((response) => response.text())
    .then((result) => {
      const wordArray = result
        .split('\n')
        .map((word) => word.trim().toLowerCase());
      guessMe = wordArray[Math.floor(Math.random() * wordArray.length)];
      wordSet = new Set(wordArray);
    });

  return { wordSet, guessMe };
}

export async function generateWordSet() {
  let wordSet;
  await fetch('./data/words.txt')
    .then((response) => response.text())
    .then((result) => {
      const wordArray = result
        .split('\n')
        .map((word) => word.trim().toLowerCase());
      wordSet = new Set(wordArray);
    });

  return { wordSet };
}

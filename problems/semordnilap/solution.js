const reverse = (string) => {
  let reversed = '';

  for (let j = string.length - 1; j >= 0; j--) {
    reversed += string[j];
  }

  return reversed;
};

function semordnilap(words) {
  const wordsSet = new Set(words);
  const pairs = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const reversedWord = reverse(word);

    if (wordsSet.has(reversedWord) && reversedWord !== word) {
      pairs.push([word, reversedWord]);
      wordsSet.delete(word);
      wordsSet.delete(reversedWord);
    }
  }

  return pairs;
}

// Do not edit the line below.
exports.semordnilap = semordnilap;

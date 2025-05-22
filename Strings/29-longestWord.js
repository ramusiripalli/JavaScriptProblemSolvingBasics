function longestWord(str) {
  const words = str.split(" ");
  let maxWord = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= maxWord.length) {
      maxWord = words[i];
    }
  }

  return maxWord;
}

console.log(longestWord("The quick brown fox jumps over the lazy dog")); // "jumps"

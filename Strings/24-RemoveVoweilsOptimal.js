function removeVowelsOptimal(str) {
  const vowels = "aeiou";
  const result = [];

  for (let ch of str) {
    if (!vowels.includes(ch.toLowerCase())) {
      result.push(ch); // push is faster than +=
    }
  }

  return result.join(""); // build the string once
}

console.log(removeVowelsOptimal("hello world")); // "hll wrld"
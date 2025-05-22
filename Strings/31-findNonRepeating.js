function firstNonRepeatingChar(str) {
  const freqMap = new Map();

  // Step 1: Count character frequencies
  for (const char of str) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  // Step 2: Find the first character with frequency 1
  for (const char of str) {
    if (freqMap.get(char) === 1) {
      return char;
    }
  }

  return null; // If no non-repeating character is found
}


console.log(firstNonRepeatingChar("swiss"));
// [1, 2, 3, 4, 5], 3 → 2

function stringCompression(str){

 const freqMap = new Map();

  // Step 1: Count character frequencies
  for (const char of str) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  return freqMap;


}

console.log(stringCompression("aaaabbbbccccddddeeee"));

/**
 * Count the number of vowels in a given string using a brute force approach.
 * This function iterates through each character of the string and checks if it's a vowel.
 * 
 * @param {string} str - The input string to check for vowels
 * @returns {number} - The total count of vowels found in the string
 */
function countVowelsBrute(str){
  // Initialize a counter to keep track of vowels found
  let count = 0;
  
  // Convert the string to lowercase and iterate through each character
  // This ensures we catch both uppercase and lowercase vowels
  for(let ch of str.toLowerCase()){
    // Check if the current character is a vowel (a, e, i, o, or u)
    if(ch === 'a' || ch === 'e' || ch === 'i' || ch ==='o' || ch === 'u'){
      // If it's a vowel, increment our counter
      count += 1;
    }
  }

  // Return the final count of vowels
  return count;
}

// Test the function with the string "RomuSiripalei"
// Expected output: 7 (vowels: o, u, i, i, a, e, i)
console.log(countVowelsBrute("RomuSiripalei"));

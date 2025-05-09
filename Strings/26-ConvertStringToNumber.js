function stringToNumberBruteForce(str) {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    let digit = str.charCodeAt(i) - '0'.charCodeAt(0); // manual conversion

    // If character is not a digit (0-9)
    if (digit < 0 || digit > 9) {
      throw new Error("Invalid input: not a digit");
    }

    result = result * 10 + digit;
  }

  return result;
}


console.log(stringToNumberBruteForce("12a34"))
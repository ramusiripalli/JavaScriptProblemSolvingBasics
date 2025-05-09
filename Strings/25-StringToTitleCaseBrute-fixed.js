function StringToTitleCase(str)
{
  const words = str.split(" ");
  let result = "";  // Initialize with empty string instead of space

  for(let word of words){
    // Remove the console.log for cleaner output
    let capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    result += capitalized + " ";
  }

  return result.trim();  // Trim is still needed to remove the trailing space
}

// Test with the same input as the optimal implementation
console.log(StringToTitleCase("hello ramu siripalli how are you doing"));

// Test with the original input that has commas
console.log(StringToTitleCase("hel,low,orl,d"));

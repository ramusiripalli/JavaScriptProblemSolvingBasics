function StringToTitleCase(str)
{
const words = str.split(" ");
let result = " ";

for(let word of words){
  console.log(word)
  let capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  result += capitalized + " ";
}

return result.trim();
}

console.log(StringToTitleCase("hello world"));
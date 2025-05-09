function toTitleCase(str){
let words = str.split(" ");
let titleCapiltalized = words.map(function(word){
let firstCapitalized = word.charAt(0).toUpperCase();
let restLetters = word.slice(1).toLowerCase();

return firstCapitalized + restLetters;
})

let res = titleCapiltalized.join(' ');

return res;

}

console.log(toTitleCase("hello ramu siripalli how are you doing"));
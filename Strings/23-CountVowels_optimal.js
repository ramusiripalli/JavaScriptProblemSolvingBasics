function countVowelsOptimal(str){
  const vowels = new Set(['a','e','i','o','u']);
  let count = 0;

  for (let ch of str.toLowerCase()){
      if(vowels.has(ch)){
        count++;
      }
  }

  return count;

}

console.log(countVowelsOptimal("RamuSiripalli"));
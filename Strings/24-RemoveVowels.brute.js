function RemoveVowels(nums){
let removedStr = "";

for(let ch of nums.toLowerCase()){

  if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
continue;
  }
  else{
    removedStr += ch;
  }
}

return removedStr;


}

console.log(RemoveVowels("RamuSiripalli"));


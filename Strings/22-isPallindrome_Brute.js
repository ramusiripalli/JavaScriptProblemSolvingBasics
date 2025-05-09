function isPallindromeBrute(str){
let reverseStr = "";
let n = str.length;

for(let i= n-1;i>=0;i--){
  reverseStr += str[i];
}

return reverseStr === str;

}

console.log(isPallindromeBrute("madamq"));
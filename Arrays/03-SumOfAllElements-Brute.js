function sumOfAllElements(nums){
let sum = 0;

for(let num of nums){
  sum += num;
}
  
return sum;
}

console.log(sumOfAllElements([1,4,5,6]));
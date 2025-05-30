// Find Missing Number
//        [1, 2, 4, 5]   → [3]
// Given an array of consecutive numbers with one missing, find the missing number.



function findMissing(nums){
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  for(let i=min;i<=max+1;i++){
    if(!nums.includes(i)){
      return i;
    }

  }
  return -1;
}

console.log(findMissing([11,12,13,14,15,17]));
function RemoveDuplicatesBrute(nums){
const n = nums.length;
const result = [];
for(let num of nums){
  if(!result.includes(num)){
    result.push(num);
  }
}

return result;
}

console.log(RemoveDuplicatesBrute([1,2,2,3,4,4,5,5,5,5]));
function moveZeroes(nums){
const nonZeros = [];
const zeros = [];

for(let i=0;i<nums.length;i++)
{
  if(nums[i] === 0){
    zeros.push(nums[i]);
  }
  else{
    nonZeros.push(nums[i]);
  }
}

return  nonZeros.concat(zeros)

}


console.log(moveZeroes([0,1,0,2,3]));
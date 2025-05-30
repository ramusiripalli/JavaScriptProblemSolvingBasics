// Pair Sum [2, 4, 3, 5, 7, 8, 9], 7 →  [[4, 3], [2, 5]]
// Write a function to find all pairs in an array whose sum is equal to a given target.

// so I am writing code with some logic, syntax mistakes will be there , please rectify and teach me how to do better


function pairSum(nums,targetSum){
let n = nums.length;
const res = [];
for(let i=0;i<n;i++)
{
  for(let j=i+1;j<n;j++)
  {
    if(nums[i] + nums[j] === targetSum){
res.push([nums[i],nums[j]]);
    }
  }
 
}
 return res;
}
console.log(pairSum([2,4,3,5,7,8,9],7))

// Find Peak Element
//        [1, 3, 20, 4, 1, 0] →  20
// Write a function to find a peak element in an array. 
// An element is a peak if it is not smaller than its neighbours.


function findPeak(nums){
let n = nums.length;
let res= [];
if(nums[0]>nums[1]){
  res.push(nums[0]);
}
if(nums[n-1]>nums[n-2]){
  res.push(nums[n-1]);
}
for(let i=1;i<n-1;i++){
if((nums[i] > nums[i+1]) && (nums[i] > nums[i-1])){
  res.push(nums[i]);
}
}

return res;
}

console.log(findPeak([1,3,20,4,1,0]));
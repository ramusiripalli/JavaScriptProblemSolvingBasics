function maximumProduct(nums){
let n = nums.length;
let largest = -Infinity;
let secondLargest = -Infinity;

for(let i =0;i<n;i++){
  if (nums.length < 2) throw new Error("Need at least two numbers");
  if(nums[i] > largest){
    secondLargest = largest;
    largest = nums[i];
  }
  else if(nums[i] > secondLargest && nums[i] !== largest)
  {
    secondLargest = nums[i];
  }
}

return largest*secondLargest;
}

console.log(maximumProduct([3,5,-2,8,11]))
function secondLargestOptimal(nums){
const n = nums.length;
let largest = -Infinity;
let secondLargest = -Infinity;
for(let i=0;i<n;i++){
  if(nums[i] > largest)
  {
    secondLargest = largest;
    largest = nums[i];
  }
  else if(nums[i] > secondLargest && (nums[i] !== largest)){
    secondLargest = nums[i];
  }
}

return secondLargest !== -Infinity ? secondLargest : -1;
}


const arr = [5,3,4,5,8,9,9,8,7,6,9,8];
console.log(secondLargestOptimal(arr));
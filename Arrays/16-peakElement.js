function peakElement(nums){
let left = 0;
let right = nums.length-1;

while(left < right){
  const mid = Math.floor(left + (right-left)/2);

  if(nums[mid] < nums[mid+1]){
    left = mid + 1;
  }
  else{
    right = mid;
  }
}
}


console.log(peakElement([1,3,20,4,1,0]))


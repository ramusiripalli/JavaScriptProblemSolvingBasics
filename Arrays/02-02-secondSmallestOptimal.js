function secondSmallestOptimal(nums){
const n = nums.length;
let smallest = Infinity;
let secondSmallest = Infinity;

for(let i=0;i<n;i++){

  if(nums[i] < smallest){
    secondSmallest = smallest;
    smallest = nums[i];
  }
  else if(nums[i] < secondSmallest && nums[i] !== smallest){
    secondSmallest = nums[i];
  }

}

return secondSmallest !== Infinity ? secondSmallest : -1;


}


console.log(secondSmallestOptimal([8,7,6,4,9,2,2,2,4,4,4]));
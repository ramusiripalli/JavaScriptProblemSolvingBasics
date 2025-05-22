function secondSmallest(nums){
  nums.sort((a,b)=> a - b); // 2,2,2,3,3,3,3,3,4,4,5,6,6,6,6,8
  const n = nums.length;
  let smallest = nums[0];
  let secondSmallest = Infinity;
  
  for(let i=1;i<n;i++){
    if(nums[i] !== smallest){
      secondSmallest = nums[i];
      break;
    }
  }

  return secondSmallest !== Infinity ? secondSmallest : -1;



}

console.log(secondSmallest([8,6,5,4,3,6,6,6,6,2,2,2,3,4,3,3,3]));
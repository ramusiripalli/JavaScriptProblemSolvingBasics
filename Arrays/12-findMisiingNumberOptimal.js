function missingNumber(nums){
  const n = nums.length+1;
  const a = Math.min(...nums);

  const expectedSum = n/2 * (2*a +(n-1)*1);
  const actualSum = nums.reduce((acc,cur) => acc+cur,0);

  return expectedSum - actualSum;

}

console.log(missingNumber([10,11,12,14,15]));
function largestNumber(nums){
    nums.sort((a,b) => a- b);

    return nums[nums.length -1];
}

console.log(largestNumber([4,2,3,11,7,8,9]));
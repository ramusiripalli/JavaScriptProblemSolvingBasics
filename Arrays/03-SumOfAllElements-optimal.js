function sumOfAllElementsOptimal(nums){

  const sum = nums.reduce((accumulator,currentValue) => {
    return accumulator+currentValue;
  },0);

return sum;

}


console.log(sumOfAllElementsOptimal([4,3,2,8,9,10]));
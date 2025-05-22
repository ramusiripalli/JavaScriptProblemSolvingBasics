function LargestElementOptimal(nums){
let largest = nums[0];
for(let value of nums ){
  if(value > largest){
    largest = value;
  }

}
return largest;

}

console.log(LargestElementOptimal([4,1,2,5,9,2,1,4]));


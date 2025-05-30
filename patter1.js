var subarraySum = function(nums) {
let n = nums.length;  //ramu
for(let i=0;i<n;i++)
{
for(let j =i;j<n;j++){
let str = " ";
  for(let k = i;k<=j;k++){
  str += nums[k];
  }
  console.log(str);
  
  
}

}    
};

subarraySum(['r','a','m','u']);



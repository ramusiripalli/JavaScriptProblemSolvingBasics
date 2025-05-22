function RemoveDuplicates(nums){
const set = new Set(nums);
const res = [...set];

return res;
}

console.log(RemoveDuplicates([1,2,2,3,4,4,4,5,5,6,7,7,7,8]));
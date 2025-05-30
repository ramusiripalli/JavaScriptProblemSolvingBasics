function leftRotate(nums,k){
let n = nums.length;
let part2 = nums.slice(0,2);
let part1 = nums.slice(k,n);

return part1.concat(part2);
}

console.log(leftRotate([1,2,3,4,5],2))
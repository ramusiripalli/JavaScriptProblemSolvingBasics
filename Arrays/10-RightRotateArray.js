function rightRotate(nums,K){
let n = nums.length;
let part1 = nums.slice(-2);
let part2 = nums.slice(0,n-2);

return part1.concat(part2);
}

console.log(rightRotate([1,2,3,4,5], 2))
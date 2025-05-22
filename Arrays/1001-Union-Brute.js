function union_Brute(nums1,nums2){
const set = new Set();
for(let i =0;i<nums1.length;i++){
  set.add(nums1[i]);
}

for(let j=0;j<nums2.length;j++){
  set.add(nums2[j]);
}

const myArray = [...set];

return myArray;
}


console.log(union_Brute([1,2,3,4],[2,3,4,5,6,7]));
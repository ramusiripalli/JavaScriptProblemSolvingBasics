function intersectionOfTwoArraysOptimal(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const result = [];

  for (let num of set1) {
    if (set2.has(num)) {
      result.push(num);
    }
  }

  return result;
}

let n1 = [1, 2, 3, 4, 9];
let n2 = [2, 3, 4, 9, 7, 6, 5];

console.log(intersectionOfTwoArraysOptimal(n1, n2));

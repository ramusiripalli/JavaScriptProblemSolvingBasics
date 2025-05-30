function InterSectionOfTwoArrays(nums1, nums2) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    const res = [];
    
    for (let i = 0; i < n1; i++) {
        for (let j = 0; j < n2; j++) {
            if (nums1[i] == nums2[j]) {
                res.push(nums1[i]);
                break;
            }
        }
    }
    
    return res;
}

console.log(InterSectionOfTwoArrays([1, 2, 3, 4, 9], [9, 2, 3, 4, 5]));
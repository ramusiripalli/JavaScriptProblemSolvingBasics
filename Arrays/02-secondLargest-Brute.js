function secondLargestBrute(nums) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b); // [1,4,5,6,7,7,8,9,9,9,9]
    
    const n = nums.length;
    const largest = nums[n - 1];
    let secondLargest = -1; // Default if no second largest exists
    
    // Traverse from the second last element backwards
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] !== largest) {
            secondLargest = nums[i];
            break; // Exit loop once found
        }
    }
    
    return secondLargest;
}

const arr = [7, 7, 8, 1, 4, 5, 6, 9, 9, 9, 9];
console.log(secondLargestBrute(arr)); // Output: 8
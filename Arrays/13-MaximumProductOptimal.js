function maximumProductOptimal(nums) {
  if (nums.length < 2) throw new Error("Need at least two numbers");

  // Initialize
  let max1 = -Infinity, max2 = -Infinity;
  let min1 =  Infinity, min2 =  Infinity;

  for (const x of nums) {
    // Update largest two
    if (x > max1) {
      max2 = max1;
      max1 = x;
    } else if (x > max2) {
      max2 = x;
    }

    // Update smallest two
    if (x < min1) {
      min2 = min1;
      min1 = x;
    } else if (x < min2) {
      min2 = x;
    }
  }

  // The answer is the best of the two possibilities
  return Math.max(max1 * max2, min1 * min2);
}

console.log(maximumProductOptimal([3, 5, -2, 8, 11]));   // 88
console.log(maximumProductOptimal([-10, -9, 1, 2]));      // 90

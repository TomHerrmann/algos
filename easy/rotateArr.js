/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 2 * 10^4
It's guaranteed that nums[i] fits in a 32 bit-signed integer.
k >= 0
*/

// const rotateArr = (nums, k) => {
//   if (k === 0) return nums;

//   const result = [];

//   let i = nums.length - k;
//   while (result.length < nums.length) {
//     if (i === nums.length) i = 0;
//     result.push(nums[i]);
//     i++;
//   }

//   return result;
// };

const rotateArr = (nums, k) => {
  if (k === 0) return nums;

  for (let i = 0; i < k; i++) {
    const popped = nums.pop();
    nums.unshift(popped);
  }

  return nums;
};

console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 3)); // => [5,6,7,1,2,3,4]
console.log(rotateArr([-1, -100, 3, 99], 2)); // => [3,99,-1,-100]

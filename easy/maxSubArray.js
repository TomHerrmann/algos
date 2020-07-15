/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

const inputError = 'Input must be an array of 2 or more ints';

const maxSubArray = (nums) => {
  if (!Array.isArray(nums)) throw new Error(inputError);
  if (nums[0] === undefined) throw new Error(inputError);
  if (nums.length < 2) throw new Error(inputError);

  let maxSub = nums[0] + nums[1];

  for (let i = 2; i < nums.length; i++) {
    const currentNum = nums[i];
    const nextNum = nums[i + 1];

    if (nextNum) {
      maxSub = Math.max(maxSub, maxSub + currentNum, currentNum + nextNum);
    } else {
      maxSub = Math.max(maxSub, maxSub + currentNum);
    }

    if (maxSub === currentNum + nextNum) i += 1;
  }

  return maxSub;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // => 6
console.log(maxSubArray([1, 2])); //=> 3
// console.log(maxSubArray([1]));

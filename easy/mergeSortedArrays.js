/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/

const mergeSortedArrs = (nums1, m, nums2, n) => {
  let index1 = m - 1;
  let index2 = n - 1;
  let index3 = n + m - 1;

  while (index1 >= 0 && index2 >= 0) {
    if (nums1[index1] >= nums2[index2]) {
      nums1[index3] = nums1[index1];
      index1--;
    } else {
      nums1[index3] = nums2[index2];
      index2--;
    }
    index3--;
  }

  while (index1 > -1) {
    nums1[index3] = nums1[index1];
    index1--;
    index3--;
  }

  while (index2 > -1) {
    nums1[index3] = nums2[index2];
    index2--;
    index3--;
  }

  return nums1;
};

console.log(mergeSortedArrs([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // => [1,2,2,3,5,6]

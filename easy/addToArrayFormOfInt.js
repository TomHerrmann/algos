/*
Add to Array-Form of Integer

For a non-negative integer X, the array-form of X is an array of its digits in left to right order.  For example, if X = 1231, then the array form is [1,2,3,1].

Given the array-form A of a non-negative integer X, return the array-form of the integer X+K.

Example 1:

Input: A = [1,2,0,0], K = 34
Output: [1,2,3,4]
Explanation: 1200 + 34 = 1234
Example 2:

Input: A = [2,7,4], K = 181
Output: [4,5,5]
Explanation: 274 + 181 = 455
Example 3:

Input: A = [2,1,5], K = 806
Output: [1,0,2,1]
Explanation: 215 + 806 = 1021
Example 4:

Input: A = [9,9,9,9,9,9,9,9,9,9], K = 1
Output: [1,0,0,0,0,0,0,0,0,0,0]
Explanation: 9999999999 + 1 = 10000000000
 

Note：

1 <= A.length <= 10000
0 <= A[i] <= 9
0 <= K <= 10000
If A.length > 1, then A[0] != 0
*/

// const addToArrayFromOfInt = (arr, x) => {
// const xArr = String(x).split('');

// const inputCopy = arr.slice();

// for (let i = inputCopy.length - 1; i >= 0; i--) {
//   const sum = inputCopy[i] + Number(xArr[xArr.length - 1]);

//   if (sum >= 10) {
//     inputCopy[i] = sum - 10;
//     inputCopy[i - 1]++;
//   } else {
//     inputCopy[i] = sum;
//   }

//   if (xArr.length <= 1) return inputCopy;

//   xArr.pop();
// }
// };

const addToArrayForm = (arr, x) => {
  const arrCopy = arr.slice();
  const xArr = String(x).split('');
  let index = arrCopy.length - 1;

  while (xArr.length) {
    if (index < 0) {
      const popped = Number(xArr.pop());
      arrCopy.unshift(popped);
    }

    const sum = arrCopy[index] + Number(xArr[xArr.length - 1]);

    if (sum >= 10) {
      arrCopy[index] = sum - 10;
      arrCopy[index - 1]++;
    } else {
      arrCopy[index] = sum;
    }

    index--;
    xArr.pop();
  }

  // for (let i = arrCopy.length - 1; i >= 0; i--) {
  //   const sum = arrCopy[i] + Number(xArr[xArr.length - 1]);

  //   if (sum >= 10) {
  //     arrCopy[i] = sum - 10;
  //     arrCopy[i - 1]++;
  //   } else {
  //     arrCopy[i] = sum;
  //   }

  //   if (xArr.length <= 1) break;

  //   xArr.pop();
  // }

  return arrCopy;
};

// console.log(addToArrayForm([1, 2, 0, 0], 34)); // => [1,2,3,4]
console.log(addToArrayForm([2, 7, 4], 10081)); // => [4,5,5]
console.log(addToArrayForm([2, 1, 5], 806)); // => [1,0,2,1]

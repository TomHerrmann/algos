/*
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

Each string consists only of '0' or '1' characters.
1 <= a.length, b.length <= 10^4
Each string is either "0" or doesn't contain any leading zero.

*/

const toDec = (bin) => {
  let dec = 0;

  for (let i = bin.length - 1; i >= 0; i--) {
    if (bin[i] === '1') {
      const binVal = Math.pow(2, bin.length - 1 - i);
      dec += binVal;
    }
  }

  return dec;
};

const toBin = (dec) => {
  if (dec === 0) return '0';

  let decCopy = dec;

  const binLength = Math.floor(Math.sqrt(dec)) + 1;
  let binExponent = binLength;
  let i = 0;
  const binArr = [];

  while (binArr.length <= binLength) {
    if (decCopy - Math.pow(2, binExponent) >= 0) {
      decCopy -= Math.pow(2, binExponent);
      binArr[i] = 1;
    } else {
      binArr[i] = 0;
    }

    binExponent--;
    i++;
  }

  while (binArr[0] === 0) {
    binArr.shift();
  }

  return String(binArr.join(''));
};

const addBinary = (a, b) => {
  // convert a and b into decimal nums
  const decA = toDec(a);
  console.log(decA);
  const decB = toDec(b);
  console.log(decB);

  // add decimal a and decimal b
  const sum = decA + decB;
  console.log(sum);

  // convert ab sum back into a binary number
  return toBin(sum);
};

console.log(addBinary('11', '1'));
console.log(addBinary('0', '0'));

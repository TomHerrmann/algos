/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

const parenMap = {
  ')': '(',
  ']': '[',
  '}': '{',
};

const isValid = (s) => {
  if (s === '') return true;
  if (s.length < 2) return false;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];

    if (curr === '[' || curr === '(' || curr === '{') {
      stack.push(curr);
    } else {
      if (stack[stack.length - 1] !== parenMap[curr]) return false;
      else stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
};

console.log(isValid('()')); // => true
console.log(isValid('()[]{}')); // => true
console.log(isValid('(]')); // => false
console.log(isValid('([)]')); // => false
console.log(isValid('{[]}')); // => true
console.log(isValid('((')); // => false

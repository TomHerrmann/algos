/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3
*/

const deleteDuplicates = (head) => {
  if (!head || !head.next) return head;

  let current = head;

  while (current) {
    let next = current.next;

    if (next && current.value === next.value) {
      next = next.next;
    }

    current.next = next;
    current = next;
  }

  return head;
};

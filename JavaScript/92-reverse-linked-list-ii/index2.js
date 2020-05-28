/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = function (head, m, n) {
  if (!head) return null;

  let left = head;
  let right = head;
  let stop = false;

  const recursiveAndReverse = (right, m, n) => {
    if (n === 1) return;

    right = right.next;
    if (m > 1) left = left.next;
    recursiveAndReverse(right, m - 1, n - 1);

    if (left === right || right.next === left) {
      stop = true
    }

    if (!stop) {
      const temp = left.val;
      left.val = right.val;
      right.val = temp;

      left = left.next;
    }
  };

  recursiveAndReverse(right, m, n);
  return head;
};

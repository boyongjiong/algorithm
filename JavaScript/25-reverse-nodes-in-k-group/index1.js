/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function(head, k) {
  let count = 0;
  let node = head;
  while (node && count < k) {
    node = node.next;
    count += 1;
  }

  if (count < k) return head;

  let prev = null;
  let cur = head;
  while (count > 0) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur.next = temp;

    count -= 1;
  }

  head.next = reverseKGroup(cur, k);

  return prev;
}
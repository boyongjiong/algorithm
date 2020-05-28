/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let cur = head;
  let len = 0;
  while (cur !== null) {
    len += 1;
    cur = cur.next;
  }

  len -= n;
  while (len > 0) {
    len -= 1;
    cur = cur.next;
  }

  cur.next = cur.next.next;
  return dummy.next;
};
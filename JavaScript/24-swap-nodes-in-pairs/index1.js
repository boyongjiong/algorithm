/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function(head) {
  if (!head || !head.next) return head;
  
  const dummy = new ListNode(0);
  dummy.next = head;
  cur = dummy;

  while (cur.next && cur.next.next) {
    const first = cur.next;
    const sec = cur.next.next;
    cur.next = sec;
    first.next = sec.next;
    sec.next = first;
    cur = cur.next.next;
  }

  return dummy.next;
};

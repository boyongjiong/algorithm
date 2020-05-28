/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function(head) {
  if (!head || !head.next) return null;

  let slow = head;
  let fast = head;
  let k = false;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      k = true;
      break;
    }
  }

  if (!k) {
    return null;
  } else {
    while (head !== slow) {
      slow = slow.next;
      head = head.next;
    }

    return head;
  }
};

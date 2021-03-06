/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  let tail;
  let head;
  let carry = 0;
  while (l1 || l2 || carry) {
    let sum = carry + (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
    carry = Math.floor(sum / 10);
    let res = new ListNode(sum % 10);
    if (!head) {
      head = res;
      tail = res;
    } else {
      tail.next = res;
      tail = tail.next;
    }

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return head;
};
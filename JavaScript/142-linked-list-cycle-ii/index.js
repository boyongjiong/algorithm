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
const detectCycle = function (head) {
  const mySet = new Set();

  while (head !== null) {
    if (mySet.has(head)) {
      return head;
    }

    mySet.add(head);
    head = head.next;
  }

  return head;
};

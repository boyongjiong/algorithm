/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  const linkSet = new Set();

  while (head !== null) {
    if (linkSet.has(head)) {
      return true;
    }

    linkSet.add(head);
    head = head.next;
  }

  return false;
};


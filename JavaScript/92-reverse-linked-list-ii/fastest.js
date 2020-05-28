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
  const dummy = new ListNode();
  dummy.next = head;
  let preM = dummy;
  let mNode = head;
  let nNode = head;

  for (let i = 1; i < m; i += 1) {
    mNode = mNode.next;
    preM = preM.next;    
  }

  for (let i = 1; i < n; i += 1) {
    nNode = nNode.next;    
  }

  while (mNode !== nNode) {
    preM.next = mNode.next;
    mNode.next = nNode.next;
    nNode.next = mNode;
    mNode = preM.next;
  }
  return dummy.next;
};

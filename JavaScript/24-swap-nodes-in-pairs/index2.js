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
const swapPairs = function (head) {
  if (!head || !head.next) return head;

  const newStart = head.next.next;
  // const temp = head.next;
  // head.next = head;
  // head = temp;

  // 下面解构是赋值可以快速交换两个变量的值
  [head, head.next] = [head.next, head];

  head.next.next = swapPairs(newStart);
  
  return head;
};


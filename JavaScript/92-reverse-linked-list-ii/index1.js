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
const reverseBetween = function(head, m, n) {
  if (!head) return null;

  let cur = head;
  let prev = null;

  // 到反转起始点之前，将 cur/prev 指针向右移动
  while (m > 1) {
    prev = cur;
    cur = cur.next;

    m -= 1;
    n -= 1;
  }

  // 记录到达反转位置时的指针信息
  let tail = cur;
  let con = prev;

  while (n) {
    let third = cur.next;
    cur.next = prev
    prev = cur;
    cur = third;

    n -= 1;
  }

  // 迭代结束之后，将链表连起来
  if (con) {
    con.next = prev;
  } else {
    head = prev;
  }
  tail.next = cur;
  
  return head;
};

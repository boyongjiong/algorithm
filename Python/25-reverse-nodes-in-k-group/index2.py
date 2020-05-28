# Definition for singly-linked list.
# class ListNode:
#   def __init__(self, x):
#     self.val = x
#     self.next = None

class Solution:
  def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
    count, node = 0, head
    while node and count < k:
      node = node.next
      count += 1

    if count < k: return head

    prev, new_start = self.reverseList(head, count)
    head.next = self.reverseKGroup(new_start, k)

    return prev

  def reverseList(self, head: ListNode, count: int) -> (ListNode, ListNode):
    prev = None
    cur = head
    while count > 0:
      cur.next, prev, cur = prev, cur, cur.next
      
      count -= 1
      
    return (prev, cur)
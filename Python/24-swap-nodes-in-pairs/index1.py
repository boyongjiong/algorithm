# Definition for singly-linked list.
# class ListNode:
#   def __init__(self, x):
#     self.val = x
#     self.next = None

class Solution:
  def swapPairs(self, head: ListNode) -> ListNode:
    # 若 head 为 None 或者链表只有一个元素，直接返回 head
    if not head or not head.next:
      return head

    dummy = ListNode(0)
    dummy.next = head
    cur = dummy

    while cur.next and cur.next.next:
      first = cur.next
      sec = cur.next.next
      cur.next = sec
      first.next = sec.next
      sec.next = first
      cur = cur.next.next

    return dummy.next

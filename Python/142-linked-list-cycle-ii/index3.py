# Definition for singly-linked list.
# class ListNode:
#   def __init__(self, x):
#     self.val = x
#     self.next = None

class Solution:
  def detectCycle(self, head: ListNode) -> ListNode:
    if not head or not head.next:
      return None

    s = f = head
    k = False
    while f and f.next:
      s = s.next
      f = f.next.next

      if s is f:
        k = True
        break

    if not k:
      return None
    else:
      while head is not s:
        s = s.next
        head = head.next
      
      return head

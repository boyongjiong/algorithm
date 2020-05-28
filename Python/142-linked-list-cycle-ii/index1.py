# Definition for singly-linked list.
# class ListNode:
#   def __init__(self, x):
#     self.val = x
#     self.next = None

class Solution:
  def detectCycle(self, head: ListNode) -> ListNode:
    if not head or not head.next:
      return None

    try:
      slow = head
      fast = head.next
      while fast is not slow:
        slow = slow.next
        fast = fast.next.next
    except:
      # if there is an exception, we reach the end and there is no cycle
      return None

    # since fast starts at head.next, we need to move slow one step fowward
    slow = slow.next
    while head is not slow:
      head = head.next
      slow = slow.next

    return head


# Definition for singly-linked list.
# class ListNode:
#   def __init__(self, x):
#     self.val = x
#     self.next = None

class Solution:
  def isPalindrome(self, head: ListNode) -> bool:
    prev = None
    slow = fast = head

    while fast and fast.next:
      fast = fast.next.next
      slow.next, prev, slow = prev, slow, slow.next

    if fast:
      slow = slow.next

    while prev and prev.val == slow.val:
      slow = slow.next
      prev = prev.next

    return not prev

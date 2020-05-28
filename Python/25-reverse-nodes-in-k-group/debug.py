# Definition for singly-linked list.
import json

__name__ = '__main__'
class ListNode:
  def __init__(self, x):
    self.val = x
    self.next = None


class Solution:
    def reverseKGroup(self, head: ListNode, k: int) -> ListNode:
        prev = None
        cur = head
        while k:
            cur.next, prev, cur = prev, cur, cur.next
            if cur is None and k > 0:
                return head

            k -= 1

        new_start = cur
        head.next = self.reverseKGroup(new_start, k)

        return prev


def stringToIntegerList(input):
    return json.loads(input)


def stringToListNode(input):
    # Generate list from the input
    numbers = stringToIntegerList(input)

    # Now convert that list into linked list
    dummyRoot = ListNode(0)
    ptr = dummyRoot
    for number in numbers:
        ptr.next = ListNode(number)
        ptr = ptr.next

    ptr = dummyRoot.next
    return ptr


def listNodeToString(node):
    if not node:
        return "[]"

    result = ""
    while node:
        result += str(node.val) + ", "
        node = node.next
    return "[" + result[:-2] + "]"


def main():
    import sys
    import io

    def readlines():
        for line in io.TextIOWrapper(sys.stdin.buffer, encoding='utf-8'):
            yield line.strip('\n')

    lines = readlines()
    while True:
        try:
            line = next(lines)
            head = stringToListNode(line)
            line = next(lines)
            k = int(line)

            ret = Solution().reverseKGroup(head, k)

            out = listNodeToString(ret)
            print(out)
        except StopIteration:
            break


if __name__ == '__main__':
    main()

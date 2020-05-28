class Solution:
  def isValid(self, s: str) -> bool:
    stack = []
    dict = {
      ')': '(',
      ']': '[',
      '}': '{'
    }

    for c in s:
      if c not in dict:
        stack.append(c)
      elif not stack or dict[c] != stack.pop():
        return False

    return not stack

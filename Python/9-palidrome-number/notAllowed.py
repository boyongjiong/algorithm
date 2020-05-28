class Solution:
  def isPalindrome(self, x: int) -> bool:
    return str(x) == str(x)[::-1]      
    
  # it might slow because of calling the str function 2 times. we can do as below shows, to cache s value and then use it.
  def betterFunc(self, x: int) -> bool:
    s = str(x)
    return s == s[::-1]

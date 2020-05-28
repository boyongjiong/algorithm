class Solution:
  def threeSum(self, nums):
    res = []
    nums.sort()
    length = len(nums)

    for i in range(length - 2):
      if nums[i] > 0:
        break

      if i > 0 and nums[i] == nums[i - 1]:
        continue

      head, tail = i + 1, length - 1
      while head < tail:
        total = nums[i] + nums[head] + nums[tail]
        
        if total < 0:
          head += 1
        elif total > 0:
          tail -= 1
        else:
          res.append([nums[i], nums[head], nums[tail]])

          while head < tail and nums[head] == nums[head + 1]:
            head += 1

          while head < tail and nums[tail] == nums[tail - 1]:
            tail -= 1

          head += 1
          tail -= 1

    return res

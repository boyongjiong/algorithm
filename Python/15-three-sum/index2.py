import collections
import bisect

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        counts = collections.defaultdict(int)

        for i in nums:
            if i in counts:
                counts[i] += 1
            else:
                counts[i] = 1

        nums = sorted(counts)
        for i, num in enumerate(nums):
            if counts[num] > 1:
                if num == 0:
                    if counts[num] > 2:
                        res.append([num, num, num])
                else:
                    if -num * 2 in nums:
                        res.append([num, num, -2 * num])

            if num < 0:
                twosum = -num
                left = bisect.bisect_left(nums, (twosum - nums[-1]), i + 1)
                for i in nums[left:bisect.bisect_right(nums, (twosum // 2), left)]:
                    j = twosum - i
                    if j in counts and j != i:
                        res.append([num, i, j])

        return res

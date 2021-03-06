class Solution(object):
  def findMedianSortedArrays(self, nums1, nums2):
    """
    :type nums1: List[int]
    :type nums2: List[int]
    :rtype: float
    """
    nums = nums1 + nums2
    nums.sort()
    mid = (len(nums) - 1) / 2.0
    if mid == int(mid):
      return nums[int(mid)]
    else:
      return (nums[int(mid)] + nums[int(mid) + 1]) / 2.0
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  let medianNum;
  const len1 = nums1.length,
        len2 = nums2.length,
        total = len1 + len2;
    
  const combineToOne = [...nums1, ...nums2];
  // 优化可以通过使用不同的排序算法来进行
  combineToOne.sort((a, b) => {
    return a-b;
  })
  console.log(combineToOne);
  // 在这儿做判断，如果长度是奇数则取最中间的值，如果为偶数，则取中间两值的平均
  const index = Math.round((len1 + len2)/2) - 1;  // 因为是 index，所以是长度二分后减1
  
  if (total % 2 !== 0) {
    medianNum = combineToOne[index];
  } else {
    medianNum = (combineToOne[index] + combineToOne[index+1])/2
  }
  
  return medianNum;
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length,
      n = nums2.length;
  const total = m + n;

  if (m > n) {
    // 利用解构赋值 交换变量的值
    [nums1, nums2, m, n] = [nums2, nums1, n, m];
  }

  if (n === 0) {
    throw new Error('something is wrong, check your input to be valid');
  }

  let imin = 0,
      imax = m,
      half_len = total % 2 === 0 ? (m + n) / 2 : (m + n + 1) / 2;

  // TODO.. 
  // We need to determine whether the array length is odd or even
  // solve the problem with m + n isEven(偶数)
  // But there are another wrong such as input is  [2,3,4,5] [1,3] the output should be 3, but now it is 4
  while (imin <= imax) {
    const i = Math.round((imin + imax) / 2),
          j = half_len - i;

    if ((i < m) && (nums2[j-1] > nums1[i])) {
      // i is too small, must increase it
      imin = i + 1;
    } else if ((i > 0) && (nums1[i-1] > nums2[j])) {
      // i is too big, must decrease it
      imax = i - 1;
    } else {
      // i is perfect.
      let max_of_left, min_of_right;
      if (i === 0) {
        max_of_left = nums2[j-1];
      } else if (j === 0) {
        max_of_left = nums1[i-1];
      } else {
        max_of_left = Math.max(nums1[i-1], nums2[j-1]);
      }

      if ((m + n) % 2 === 1) {
        return max_of_left;
      }

      if (i === m) {
        min_of_right = nums2[j];
      } else if (j === n) {
        min_of_right = nums1[i];
      } else {
        min_of_right = Math.min(nums1[i], nums2[j]);
      }

      return (max_of_left + min_of_right) / 2.0;
    }
  }
};


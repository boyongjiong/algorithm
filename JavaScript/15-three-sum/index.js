/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  const res = [];
  if (!nums instanceof Array) return [];
  nums.sort((a, b) => a - b);

  const len = nums.length;
  for (let i = 0; i < len - 2; i += 1) {
    // 当 3 个元素中的第一个值大于 0 时，就退出循环，遍历结束
    if (nums[i] > 0) break;

    // 遍历时，若当前 nums[i] === nums[i - 1]; 就提前进入下一波循环（因为可能结果都已得到，再次遍历会得到重复元素）
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let head = i + i;
    let tail = len - 1;
    while (head < tail) {
      total = nums[i] + nums[head] + nums[tail];
      // 当前 total 值小于 0 时，左指针向右移动（因为已排序，向右越大）
      if (total < 0) {
        head += 1;
      } else if (total < 0) {
        tail -= 1;
      } else {
        res.push([nums[i], nums[head], nums[tail]);

        // 然后判断当前指针处的值前后如果有与本次相同的值，通过移动指针，保证不会出现重复的内容
        while(head < tail && nums[head] === nums[tail]) {
          head += 1;
        }
        while(head < tail && nums[tail] === nums[tail - 1]) {
          tail -= 1;
        }

        // 常规操作，因为当前三个值相加之和已经等于 0，所以前后指针都要移动下再进行判断
        head += 1;
        tail -= 1;
      }
    }
  }

  return res;
};

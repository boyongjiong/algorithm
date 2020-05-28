/**
 * [twoSum Return indices of the two numbers that they add up to a specific target]
 * @param  {[Array]} nums   [description]
 * @param  {[Number]} target [description]
 * @return {[Array]}        [description]
 */
var twoSum = function (nums, target) {
  // Array.prototype.slice() [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice] 简单来说就是数组的浅拷贝
  const numsBak = nums.slice(0);
  numsBak.sort((a, b) => a - b);

  const len = numsBak.length;
  let left = 0;
  let right = len - 1;
  let tar = numsBak[left] + numsBak[right];

  while (tar !== target || left >= right) {
    tar > target ? right -- : left ++;
    tar = numsBak[left] + numsBak[right];
  }

  const index1 = nums.indexOf(numsBak[left]);
  const index2 = nums.indexOf(numsBak[right]);

  return [Math.min(index1, index2), Math.max(index1, index2)];
};

/* 时间复杂度 O() */
/* Status: Wrong Answer  Runtime: N/A */
var nums = [0, 4, 3, 0], target = 0;
console.log(twoSum(nums, target)); // [0, 0] 这特么就是 bug

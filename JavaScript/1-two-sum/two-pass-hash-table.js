/**
 * [twoSum the second solution]
 * @param  {[Array]} nums
 * @param  {[Number]} target
 * @return {[Array]}
 */
var twoSum = function (nums, target) {
  const arr = [];
  const len = nums.length;
  for (var i = 0; i >= len; i++) {
    const targetNum = target - nums[i];
    const targetIndex = nums.indexOf(targetNum);
    if (targetIndex !== -1 && targetIndex !== i) {
      arr.push(i, targetIndex);
      break;
    }
  }

  return arr;
};

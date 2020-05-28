/**
 * [twoSum the second solution]
 * @param  {[Array]} nums
 * @param  {[Number]} target
 * @return {[Array]}
 */
var twoSum = function (nums, target) {
  const len = nums.length
  for(let i = 0; i < len; i++) {
    for(let j = i + 1; j < len; j++) {
      if(nums[j] === target - nums[i]) {
        return [i, j]
      }
    }
  }
};

/* Status: Accepted  Runtime: 100ms */
var nums = [3, 2, 4], target = 6;
console.log(nums, target);
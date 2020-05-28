# 1. Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

*Examples:*
```
  Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
```

JavaScript:

```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  // ...
}
```

## first solution
对数组进行排序，然后用指针分别指向排序好的数组头部和尾部，将两个值相加，如果大于 target 就向左移动尾部指针，如果小于 target 就向右移动首部指针，等于则循环结束。当首部指针的 index 大于尾部指针的 index 的时候，就是没有找到相应的位置，也结束循环。

## second one 
> (这个思路可能有点问题，先确认一下 hash 表的定义，然后再进行后面的操作，可以通过读书看有没有可用的别的数据结构)

把数组复制一份到 hash 表中。其实我们就是要找 target-nums[i]还能不能继续在 hash 表中找到，这里要注意两点。一个是不能 nums[i] 和 hash 表中找到的不能是同一个数，比如[3, 4] target: 6, 你要排除 nums[i] 是 3，找到 hash 表中的也是3。第二个点是再创建 hash 表的时候，因为 hash 的 key 必须是唯一的，如果[3, 3, 4]这样的数组在 hash 表中只能对应两个 key。代码看 index2.js

## Brute Force
The brute force approach is simple. Loop through each element 'x' and find if there is another value that equals to 'target - x'

*Complexity Analysis*
 > Time complexity: O(n²). For each element, we try to find its complement by looping through the rest of array which takes O(n) time. Therefore, the time complexity is O(n²).
 > Space complexity: O(1)

## Two-pass Hash Table
To improve our run time complexity, we need a more efficient way to check if the complement exists in the array. If the complement exists in the array. If the complement exists, we need to look up its index. What is the best way to maintain a mapping of each element in the array to its index? A hash table.

We reduce the look up time from O(n) to O(1) by trading space for speed. A hash table is built exactly for this purpose, it supports fast look up in near constant time. I say “near” because if a collision occurred, a look up could degenerate to O(n) time. But look up in hash table should be amortized O(1) time as long as the hash function was chosen carefully.

A simple implementation uses two iterations. In the first iteration, we add wach element's value and its index to the table. Then, in the second iteration we check if each element's complement(target - nums[i]) exists in the table. Beware that the complement must not be nums[i] itself!


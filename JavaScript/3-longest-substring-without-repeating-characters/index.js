/**
 * [lengthOfLongestSubstring 获取到子串的值与长度]
 * @param  {[String]} s [description]
 * @return {[number]}   [description]
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let maxLen = 0;
  const hash = {};

  for (var right = 0, len = s.length, tmpHashVal; right < len; right++) {
    // 1. 先定义临时 tmpHashVal 用于存放遍历字符串时每一个元素的值
    tmpHashVal = hash[s[right]];
    // 2. 然后判断是不是之前已经有这个字符（短路操作: || 运算符如果左侧为true,则不进行右侧的操作；左侧为 false 再继续执行右侧代码)
    if (tmpHashVal === undefined || tmpHashVal < left) {
      maxLen = Math.max(maxLen, right - left + 1);
    } else {
      left = tmpHashVal + 1;
    }
    // 3. 将这个right 值存放到 hash 表中当前字符对应的值（用于之后的判断）
    hash[s[right]] = right;
  }
  return maxLen;
};

// Test
console.log(lengthOfLongestSubstring('abcaacbbb'));

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let len = s.length;
  if (len === 0 || len === 1) {
    return len;
  }
  let longest = 1;
  let start = 0;
  if (s.length > 256) {
    len = 256
  }
  for (let end = 0; end < len; end += 1) {
    const curr = s[end];
    const index = s.indexOf(curr, start);
    if (index >= start && index < end) {
      start = index + 1;
    } else {
      longest = Math.max(longest, end - start + 1);
    }
  }
  return longest;
};

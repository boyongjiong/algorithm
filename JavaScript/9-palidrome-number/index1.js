/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  if (x < 0) return false;
  if (x < 10) return true;
  let xx = x;
  let y = 0;
  while (xx > 0) {
    y = y * 10 + xx % 10;
    xx = (xx - xx % 10) / 10;
  }
  return x === y;
};


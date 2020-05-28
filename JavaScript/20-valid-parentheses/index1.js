/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const stack = [];
  const dict = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (c of s.split('')) {
    if (!(c in dict)) {
      stack.push(c);
    } else if (!stack.length || dict[c] !== stack.pop()) {
      return false
    }
  }

  return !stack.length;
};

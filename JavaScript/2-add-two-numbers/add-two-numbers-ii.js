/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */

/**
 * @param {ListNode} l1 [description]
 * @param {listNode} l2 [description]
 * @return {ListNode} [description]
 */
const addTwoNumbers = function (l1, l2) {
  let a = [],
      b = [],
      newL1 = l1,
      newL2 = l2;

  while (newL1) {
    a.push(newL1.val);
    newL1 = newL1.next;
  }
  // a [2, 4, 3]
  while (newL2) {
    b.push(newL2.val);
    newL2 = newL2.next;
  }
  // b [5, 6, 4]
  a.reverse(); // [3, 4, 2]
  b.reverse(); // [4, 6, 5]

  let ans = [];
  let add = 0;

  while (a.length || b.length) {
    let c = a.length ? a.shift() : 0;
    let d = b.length ? b.shift() : 0;
    let sum = c + d + add;

    ans.push(sum % 10); // [7, 0, 8]
    add = ~~(sum / 10);
  }

  add && (ans.push(add));

  // ans.reverse(); [8, 0, 7]

  let ret = [];

  for (var i = 0, len = ans.length; i < len; i++) {
    ret[i] = new ListNode(ans[i]); 
  }
  for (var i = 0, len = ans.length; i < len - 1; i++) {
    ret[i].next = ret[i + 1];
  }

  return ret[0];
}

// There is still somethign wrong with this solution
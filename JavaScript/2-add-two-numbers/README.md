# 2. Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

*Input:* (2 -> 3 -> 3) + (5 -> 6 -> 4)
*Output:* 7 -> 0 -> 8

*JavaScript:*

```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
};
```

### Official Solution:

#### Intuition
Keep track of the carry using a variable and simulate digits-by-digits sum starting from the head of list, which contains the least-significant digit.

![https://leetcode.com/media/documents/2_add_two_numbers.svg](2_add_two_numbers.svg)
Figure1. Visualization of the addition of two numbers: 342 + 465 = 807.
Each node contains a single digit and the digits are stored in reverse order.

#### Algorithm
Just like how you would sum two numbers on a piece of paper, we begin by summing the least-significant digits, which is the head of l1 and l2. Since each digit is in the range of 0...9, summing two digits may "overflow". For example 5 + 7 = 12. In this case, we set the current digit to 2 and bring over the carry = 1 to the next iteration. carry must be either 0 or 1 because the largest possible sum of two digits(including the carry) is 9 + 9 + 1 = 19.

*The pseudocode is as following:*

> * Initialize current node to dummy head of the returning list.
> * Initialize carry to 0.
> * Initialize p and q to head of l1 and l2 respectively.
> * Loop through lists l1 and l2 until you reach both ends.
  - set x to node p's value. If p has reached the end of l1, set to 0.
  - set y to node q's value. If q has reached the end of l2, set to 0.
  - set sum = x + y +carry.
  - Update carry = sum/10.
  - Create a new node with the digit value of (sum mod 10) and set it to current node's next, then advance current node to next.
  - Advance both p and q.
> * Check if carry = 1, If so append a new node with digit 1 to the returning list.
> * Return dummy head's next node.


Note that we use a dummy head to simplify the code. Without a dummy head, you would have to writeextra conditional statements to initialize the head's value.

Take extra caution of the following cases:

```Java
public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
  ListNode dummyHead = new ListNode(0);
  ListNode p = l1, q = l2, curr = dummyHead;
  int carry = 0;
  while (p != null || q != null) {
    int x = (p != null) ? p.val : 0;
    int y = (q != null) ? q.val : 0;
    int sum = carry + x + y;
    carry = sum / 10;
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (p != null) { p = p.next; }
    if (q != null) { q = q.next; }
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return dummyHead.next;
}
```

*方法一：*

题目的意思就是两个链表代表了两个整数做加法，第一个是最低位个位，第二个是十位... 依次，和正常的数字刚好相反，因为正常数字第一个数是最高位。再注意一下进制就可以了 

# 206. Reverse Linked List

Reverse a singly linked list.

## Example:
 > Input: 1->2->3->4->5->NULL
 > Output: 5->4->3->2->1->NULL

## Follow up:
A linked list can be reversed either iteratively or recursively. Could you implement both?

## Solution
---
### Appraach #1 (Iterative))
Assume that we have linked list `1 -> 2 -> 3 ->Ø`, we could like to change it to `3 -> 2 -> 1`.

While you are traversing the list, chagne the current node's next pointer to point to its previous element.
Since a node does not have reference to its previous node, you must store its previous element beforehand.
You also need another pointer to store the next node before changing the reference. Do not forget to return 
the new head reference at the end!

*Complexity analysis:*
 * Time complexity: O(n). Assume that n is the list's length, the time complexity is O(n).
 * Space complexity: O(1).

### Approach #2 (Recursive)
The recursive version is slightly trickier and the key is to work backwards. Assume that the rest of the 
list had already been reversed, now how do I reverse the front part? Let's assume the list is: n1 -> ...
-> nk-1 -> nk+1 -> ... -> nm -> Ø

Assume from node nk+1 to nm had been reversed and you are at node nk.
n1 -> ... -> nk-1 -> nk -> nk+1 <- ... <- nm

We want nk+1's next node to point to nk.
So,
nk.next.next = nk;
Be very careful that n1's next must point to Ø. If you forget about this, your linked list has a cycle in it.
This bug could be caught if you test your code with a linked list of size 2.

*Complexity analysis:*
 * Time Complexity: O(n). Assume that n is the list's length, the time complexity is O(n).
 * Space Complexity: O(n). The extra space comes from implicit stack space due to recursion. The recursion could go up to n levels deep.

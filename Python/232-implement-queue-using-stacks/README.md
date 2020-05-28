# 232. Implement Queue using Stacks

Implement the following operations of a queue using stacks.

 * push(x) -- Push element x to the back of queue.
 * pop() -- Removes the element from in front of queue.
 * peek() -- Get the front element.
 * empty() -- Return whether the queue is empty.

## Examples:
```
MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek(); // returns 1
queue.pop(); // returns 1
queue.empty(); // returns false
```

## Note:
 * You must use only standard operations of a stack -- which means only `push to top`, `peek/pop from top, size`, and `is empty` operations are valid.
 * Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.
 * You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).

## Solution

Queue is *FIFO* (first in - first out) data structure, in which the elements are inserted from one side - `rear` and removed from the other - `front`. The most intuitive way to implement it is with linked lists, but this article will introduce another approach using stacks. Stack is `LIFO` (last in - first out) data structure, in which elements are added and removed from the same end, called `top`. To satisfy `FIFO` property of a queue we need to keep two stacks. They serve to reverse arrival order of the elements and one of them store the queue elements in their final order.

---
### Approach #1 (Two Stacks) Push - O(n) per operation, Pop - O(1) per operation.

A queue is FIFO(first-in-first-out) but a stack is LIFO (lst-in-first-out). This means the newest element must be pushed to the bottom of the stack. To do so we first transfer all `s1` elements to auxiliary stack `s2`. Then the newly arrived element is pushed on top of `s2` and all its elements are popped and pushed to `s1`.
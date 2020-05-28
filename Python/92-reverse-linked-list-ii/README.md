# 92.Reverse Linked List II

Reverse a linked list from position m to n. Do it in one-pass.

*Note:* 1 ≤ m ≤ n ≤ length of list.

*Example:*

 > Input: 1 -> 2 -> 3 -> 4 -> 5 -> null, m = 2, n = 4
 > Output: 1 -> 4 -> 3 -> 2 -> 5 -> null

## Solution:

### Approach1: Recursion

### Approach2: Iterative Link Reversal.

#### Intuition
In the previous approach, we looked at an algorithm for reversing a portion of the given linked list such that the underlying structure doesn't change. We only modified the values of the nodes for achieving the reversal. However, it may so happen that you cannot change the data available in the nodes. In that scenario, we have to modify the links themselves to achieve the reversal.

Essentially, starting from the node at position `m` and all the way up to `n`, we reverse the `next` pointers for all the nodes in between. Let's look at the algorithm for achieving this.

#### Algorithm
Before looking at the algorithm, it's important to understand how the link reversal will work and what set of pointers will be required for the same. Let's say we have a linked list consisting of three  different nodes, `A -> B -> C` and we want to reverse the links between the nodes and obtain `A <- B <- C`.

Suppose we have at our disposal, two pointers. One of them points to the node `A` and the other one points to the node `B`. Let's call these pointers `prev` and `cur` respectively. We can simply use these two pointers to reverse the link between `A and B`.

```
cur.next = prev
```

The only problem with this is, we don't have a way of progressing further i.e once we do this, we can't reach the node `C`. That's why we need a third pointer that will help us continue the link reversal process. So, we do the following instead.
```
third = cur.next
cur.next = prev
prev = cur
cur = third
```

We do the above iteratively and we will achieve what the question asks us to do. Let's look at the steps for the algorithm now.

 1. We need two pointers, `prev` and `cur` as explained above.
 2. The `prev` pointer should be initialized to `None` initially while `cur` is initialized to the `head` of the linked list.
 3. We progress the `cur` pointer one step at a time and the `prev` pointer follows it.
 4. We keep progressing the two pointers in this way until the `cur` pointer reaches the mth node from the beginning of the list. This is the point from where we start reversing our linked list.
 5. An important thing to note here is the usage  of two additional pointers which we will call as `tail` and `con`. The `tail` pointer points to the mth node from the beginning of the linked list and we call it a tail pointer since this node becomes the tail of the reverse sublist. The `con` points to the node one before mth node and this connects to the new head of the reversed sublit. Let's take a look at a figure to understand these two pointers better.

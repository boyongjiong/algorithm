/**
 * @param {number} k
 * @param {number[]} nums
 */
const KthLargest = function (k, nums) {
  this.k = k;
  this.heap = new MinHeap();
  nums.forEach(n => this.add(n));
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.heap.size() < this.k) {
    this.heap.offer(val);
  } else if (this.heap.peek() < val) {
    this.heap.offer(val);
    this.heap.poll();
  }
  return this.heap.peek();
};

class MinHeap {
  constructor(data = []) {
    this.data = data;
    this.comparator = (a, b) => a - b;
    this.heapify();
  }

  // O(nlog(n))
  heapify() {
    if (this.size() < 2) {
      return;
    }
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }

  // O(1)
  peek() {
    if (this.size() === 0) {
      return null;
    }
    return this.data[0];
  }

  // O(log(n))
  offer(value) {
    this.data.push(value);
    this.bubbleUp(this.size() - 1);
  }

  // O(log(n))
  poll() {
    if (this.size() === 0) {
      return null;
    }
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }

    return result;
  }

  // O(log(n))
  bubbleUp(index) {
    while(index > 0) {
      const prev = (index - 1) >> 1;
      if (this.comparator(this.data[index], this.data[prev]) < 0) {
        this.swap(index, prev);
        index = prev;
      } else {
        break;
      }
    }
  }

  // O(log(n))
  bubbleDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let target = index;
      if (left <= lastIndex && this.comparator(this.data[left], this.data[target]) < 0) {
        target = left;
      }
      if (right <= lastIndex && this.comparator(this.data[right], this.data[target]) < 0) {
        target = right;
      }
      if (index !== target) {
        this.swap(index, target);
        index = target;
      } else {
        break;
      }
    }
  }

  // O(1)
  swap(first, second) {
    [this.data[first], this.data[second]] = [this.data[second], this.data[first]];
  }

  // O(1)
  size() {
    return this.data.length;
  }
}
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

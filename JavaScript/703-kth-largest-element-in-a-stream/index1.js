/**
 * @param {number} k
 * @param {number[]} nums
 */
const KthLargest = function(k, nums) {
  this.priorityQ = new PriorityQueue(k);
  for (let i = 0; i < nums.length; i += 1) {
    this.priorityQ.enqueue(nums[i]);
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.priorityQ.enqueue(val);
  return this.priorityQ.front();
};

// Create a Priority Queue: min-heap
function PriorityQueue(maxSize) {
  const items = [];
  this.maxSize = maxSize;

  this.enqueue = function (element) {
    let added = false;
    if (this.isEmpty()) {
      items.push(element);
    } else {
      if (this.size() < this.maxSize){
        // 当items 长度还不到最大容量时，将内容排序插入
        for (let i = 0, len = items.length; i < len; i += 1) {
          if (items[i] > element) {
            items.splice(i, 0, element);
            added = true;
            break;
          }
        }
  
        if (!added) {
          items.push(element);
        }
      } else {
        // 当 items 长度大于等于 maxSize 时，找到对应的位置插入，并将最小的值推出队列
        // 而且判断，如果小于队首元素，则不做任何操作；只有大于队首元素时，才插入
        if (element > this.front()) {
          for (let i = 0, len = items.length; i < len; i += 1) {
            if (items[i] > element) {
              items.splice(i, 0, element);
              this.dequeue(); // 将队首元素踢出队列
              added = true;
              break;
            }
          }
  
          if (!added) {
            items.push(element);
            this.dequeue();
          }
        }
      }
    }
  };

  this.dequeue = function () {
    return items.shift();
  };

  this.front = function () {
    return items[0];
  };

  this.isEmpty = function() {
    return items.length === 0;
  };

  this.clear = function () {
    items = [];
  };

  this.size = function () {
    return items.length;
  };
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

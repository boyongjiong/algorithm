function LinkedList() {
  const Node = function (element) {
    this.element = element;
    this.next = null;
  }

  let length = 0;
  let head = null;

  // 向链表尾部添加一个新的项
  this.append = function (element) {
    const node = new Node(element);
    let current;

    if (head === null) {
      head = node;
    } else {
      current = head;

      // 循环列表，知道找到最后一项
      while (current.next) {
        current = current.next;
      }
      // 找到最后一项，将其 next 赋为 node，建立链接
      current.next = node;   
    }
    length += 1;  // 更新列表的长度
  }

  // 在任意位置插入一个元素
  this.insert = function (position, element) {
    // 检查越界值
    if (position >= 0 && position <= length) {
      const node = new Node(element);
      let current = head,
          previous,
          index = 0;
      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          previous.next = current.next;
        }
        node.next = current;
        previous.next = node;
      }

      length++; // 更新链表的长度
      return true;
    } else {
      return false;
    }
  }

  // 从链表中移除元素
  this.removeAt = function (position) {
    // 检查越界值
    if (position > -1 && position < length) {
      const current = head;
      let previous,
          index = 0;

      // 移除第一项
      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        // 将 previous 与 current 的下一项链接起来：跳过 current，从而移除它
        previous.next = current.next;
      }
      length--;

      return current.element;
    } else {
      return null;
    }
  };

  this.indexOf = function (element) {
    let current = head,
        index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  };

  this.remove = function (element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.isEmpty = function () {
    return length === 0;
  };

  this.size = function () {
    return length;
  };

  this.getHead = function () {
    return head;
  };

  this.toString = function () {
    let current = head,
        index = 0;

    while (current) {
      string += ',' + current.element;
      current = current.next;
    }
    return string.slice(1)
  };

  // 打印单向链表内容
  this.print = function () {
    let string = '';
    let current = head;

    while (current) {
      string += current.element + ' ';
      current = current.next;
    }

    console.log(string.trim())
  };
};


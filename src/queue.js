const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {

  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (!this.head && !this.tail) {
      const node = new ListNode(value);
      this.head = node;
      this.tail = node;
      this.length++;
      return this;
    }
    if (this.length == 1) {
      const node = new ListNode(value);
      this.head.next = node;
      this.tail.next = node;  
      this.tail = node;
      this.length++;
      return this;
    }
      const node = new ListNode(value);
      this.tail.next = node;  
      this.tail = node;
      this.length++;
      return this;
    
  }

  dequeue() {
      if (!this.head) throw new Error('List is clear');
      const currentHead = this.head;
      this.head = this.head.next;
      this.length--;
      return currentHead.value;
  }
}

module.exports = {
  Queue
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) return undefined;
    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.last = null;
      this.first = null;
    }
    return temp;
  }
}

const newQueue = new Queue(11);

/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }

    this.tail = newNode;
    this.length++;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    newNode.next = this.head;

    this.head = newNode;
    if (this.length === 0) {
      this.tail = newNode;
    }

    this.length++;

  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current.val;

  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) return undefined;

    let oldHead = this.head;

    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return oldHead.val;

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    if (idx < 0 || idx >= this.length) return null;

    let current = this.head;

    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    
    return current.val;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

    if (idx < 0 || idx >= this.length) return null;

    let current = this.head;

    for (let i = 0; i < idx; i++) {
      current = current.next;
    }

    current.val = val;
    
    return current.val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) return false;

    if (idx === 0) return !!this.unshift(val);

    if (idx === this.length) return !!this.push(val);
  
    
    let newNode = new Node(val);
    let previous = this.head;

    for (let i = 0; i < idx - 1; i++) {
      previous = previous.next;
    }

    newNode.next = previous.next;
    previous.next = newNode;
    this.length++;

    return true;
  }
  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let previous = this.head;

    for (let i = 0; i < idx - 1; i++) {
      previous = previous.next;
    }

    let removed = previous.next;
    previous.next = removed.next;
    this.length--;


    return removed.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

  
    return total / this.length;
  }
}

module.exports = LinkedList;

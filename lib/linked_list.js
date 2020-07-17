// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;  
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val);

        if (this.length === 0) {
            this.head = newNode
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length ++
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length === 1) {
            this.head = null
            this.tail = null
            this.length = 0
        }
        if (this.length === 0) return undefined;
        let removed = this.tail

        let  currentNode = this.head
        while (currentNode.next != this.tail) {
            currentNode = currentNode.next;
            if (currentNode.next === this.tail) break;
        }
        currentNode.next = null;
        this.tail = currentNode;
        this.length --;
        return removed;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length === 0) return undefined;
        let removed;
        if (this.length === 1) {
            this.head = null
            this.tail = null
            this.length = 0
        } else {
            removed = this.head;
            let newHead = this.head.next;
            this.head = newHead;
            this.length--;
        }
        return removed;
    }

    // TODO: Implement the contains method here
    contains(target) {
        let currentNode = this.head;
        while(currentNode) {
            if (currentNode.value === target) {
                return true;
            } else {
                currentNode = currentNode.next
            }
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        let currentNode = this.head;

        while(currentNode && index > 0) {
            currentNode = currentNode.next;
            index --;
        }

        return currentNode;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (this.get(index)) {
            let added = this.get(index);
            added.value = val;
            return true
        } else {
            return false
        }
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index > this.length - 1 || index < 0) return false;
        let newNode = new Node(val);
        let previousNode = this.get(index - 1);
        let nextNode = this.get(index);
        previousNode.next = newNode;
        newNode.next = nextNode;
        this.length ++;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index > this.length - 1 || index < 0) return undefined;
        let removed = this.get(index);
        let previousNode = this.get(index - 1);
        let nextNode = this.get(index + 1);
        previousNode.next = nextNode;
        this.length--;
        return removed;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;

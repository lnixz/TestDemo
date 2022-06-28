// 单向链表
class Node {
    constructor(element) {
        this.element = element;;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head');
    }

    // 
    find(item) {
        let currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    // 
    insert(newElement, item) {
        const newNode = new Node(newElement);
        const currNode = this.find(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
    }

    // 
    display() {
        let currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

    // 
    findPrevious(item) {
        let currNode = this.head;
        while (!(currNode.next == null) && (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }
    
    // 
    remove(item) {
        const prevNode = this.findPrevious(item);
        if(!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    }
}

// test
const obj = new LinkedList();
obj.insert(1, 'head')
obj.insert(2, 1)
obj.insert(3, 2)
// obj.display()
obj.remove(2)
obj.display()
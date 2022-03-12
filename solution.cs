Here is a JavaScript solution using Floyd's cycle-finding algorithm:

```javascript
function Node(value) {
    this.value = value;
    this.next = null;
}

function LinkedList() {
    this.head = null;
}

LinkedList.prototype.hasCycle = function() {
    let slow = this.head;
    let fast = this.head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {
            return true;
        }
    }

    return false;
}

LinkedList.prototype.findCycleStart = function() {
    let slow = this.head;
    let fast = this.head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {
            slow = this.head;
            while(slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }

    return null;
}

let list = new LinkedList();
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

list.head = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node2;

console.log(list.hasCycle()); // true
console.log(list.findCycleStart().value); // 2
```

This solution first checks if a cycle exists in the linked list using the `hasCycle` method. If a cycle exists, it then finds the start of the cycle using the `findCycleStart` method.
Here is a TypeScript solution for the problem using Floyd's cycle-finding algorithm:

```typescript
class Node {
    value: any;
    next: Node | null;

    constructor(value: any, next: Node | null = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    head: Node | null;

    constructor() {
        this.head = null;
    }

    append(value: any) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = new Node(value);
    }

    detectCycle(): Node | null {
        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;

            if (slow === fast) {
                break;
            }
        }

        if (!fast || !fast.next) {
            return null;
        }

        slow = this.head;
        while (slow !== fast) {
            slow = slow.next;
            fast = fast.next;
        }

        return slow;
    }
}

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

let cycleNode = list.head.next;
let lastNode = list.head;
while (lastNode.next) {
    lastNode = lastNode.next;
}
lastNode.next = cycleNode;

console.log(list.detectCycle().value);
```

This code first creates a linked list with a cycle. The `detectCycle` method is used to detect if there is a cycle in the linked list. If there is a cycle, it returns the node where the cycle starts. If there is no cycle, it returns null.
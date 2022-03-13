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
}
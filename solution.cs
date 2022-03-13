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
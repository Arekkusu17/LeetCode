/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (head.next === null) 
        return null;
    
    let first = new ListNode();
    first.next = head;
    let second = first;
    // first point to n + 1
    first = first.next;
    while (n > 0) {
        first = first.next;
        n--;
    }
    // first already reach to the end null, means need to remove the first node
    if (first === null) {
        head = head.next;
    } else {
        // maintaining N nodes apart between first and second pointer
        while (first !== null) {
            first = first.next;
            second = second.next;
        }
        // Now second pointer to the node that need to be removed
        // remove that node now
        second.next = second.next.next;
    }

    return head;
    
};
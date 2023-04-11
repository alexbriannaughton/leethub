/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let node = head

    let set = new Set()

    while (node) {
       if (set.has(node)) {
           return true
       }
       set.add(node)
       node = node.next
    }

    return false
};
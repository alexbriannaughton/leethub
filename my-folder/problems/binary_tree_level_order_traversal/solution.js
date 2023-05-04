/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const output = [];

    function trav(node, level) {
        if (!node) return

        if (!output[level]) output.push([node.val])
        else output[level].push(node.val)

        trav(node.left, level + 1)
        trav(node.right, level + 1)
    }

    trav(root, 0)

    return output
};
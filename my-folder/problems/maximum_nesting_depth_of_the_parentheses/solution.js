/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    const stack = []
    let len = 0

    for (char of s) {
        if (char === "(") stack.push(char)
        len = Math.max(stack.length, len)
        if (char === ")") stack.pop()
    }

    return len
};
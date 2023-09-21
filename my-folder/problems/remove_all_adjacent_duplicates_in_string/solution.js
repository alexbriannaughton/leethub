/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    const stack = [];

    for (const char of s) {
        char === stack.at(-1)
            ? stack.pop()
            : stack.push(char);
    }

    return stack.join('');
};
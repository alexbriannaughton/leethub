/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    function go(string) {
        const arr = []
        for (char of string) {
            char === '#'
                ? arr.pop()
                : arr.push(char)
        }
        return arr.join('')
    }
    return go(s) === go(t)

};
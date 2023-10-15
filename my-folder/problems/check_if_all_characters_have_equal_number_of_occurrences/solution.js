/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    const obj = {}
    for (char of s) {
        obj[char] = obj[char] + 1 || 1
    }
    const arr = Object.values(obj)
    return arr.every((val) => val === arr[0])
};
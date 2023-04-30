/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let count = 0
    while (count < s.length / 2) {
        [s[count], s[s.length - 1 - count]] = [s[s.length - 1 - count], s[count]]
        count++
    }
};
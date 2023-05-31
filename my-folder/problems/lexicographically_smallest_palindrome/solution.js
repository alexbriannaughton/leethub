/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    var half = Math.floor(s.length / 2)
    var newS = s.split("")
    for (let i = 0; i < half; i++) {
        var left = newS[i]
        var right = newS[newS.length - 1 - i]
        if (left !== right) {
            var n = Math.min(left.charCodeAt(0),right.charCodeAt(0))
            var a = String.fromCharCode(n)
            newS[i] = a
            newS[newS.length - 1 - i] = a
        }
    }
    return newS.join("")
};
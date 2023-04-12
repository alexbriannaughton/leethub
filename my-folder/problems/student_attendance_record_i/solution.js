/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let a = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "A") {
            a++
        }

        if (a > 1) return false

        if (s[i] === "L" && s[i+1] === "L" && s[i+2] === "L") {
            return false
        }
    }

    return true
};
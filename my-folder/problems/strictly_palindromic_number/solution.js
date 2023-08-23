/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    if (n > 36) return false

    const m = n
    while (n > 1) {
        const cur = m.toString(n)
        if (!isPal(cur)) return false
        n--
    }
    return true

    function isPal(s) {
        let l = 0, r = s.length-1
        while (l < r) {
            if (s[l] !== s[r]) return false
            l++
            r--
        }
        return true
    }
};
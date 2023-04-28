/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let inside = false
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "|") {
            inside = !inside
            continue
        }
        if (!inside && s[i] === "*") {
            count++
        }
    }
    return count
};
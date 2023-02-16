/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if (s.length !== t.length) return false

    const obj = {}

    for (let letter of s) {
        if (!obj[letter]) {
            obj[letter] = 1
        } else {
            obj[letter] += 1
        }
    }
    
    for (let letter of t) {
        obj[letter] -= 1
    }
    
    for (let key in obj) {
        if (obj[key] !== 0) return false
    }
    
    return true
};
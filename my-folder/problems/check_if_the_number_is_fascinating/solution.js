/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    const str = String(n) + String(2 * n) + String(3 * n);
    const obj = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === '0') return false
        if (obj[char]) return false
        obj[char] = true
    }
    return true
};
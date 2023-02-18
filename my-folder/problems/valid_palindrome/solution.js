/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let string = s.replace(/[\W_]+/g,"").toLowerCase()
    
    let mid = Math.floor(string.length / 2)
    
    for (let i = 0; i < mid; i++) {
        if (string[i] !== string[(string.length - 1) - i]) return false
    }
    
    return true
};
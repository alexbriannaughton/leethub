/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString()
    let revStr = []
    
    for (i = 0; i < str.length; i++) {
        revStr.unshift(str[i])
    }

    return revStr.join("") === str
}
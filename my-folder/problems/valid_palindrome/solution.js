/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    
    // if (s.length === 1) return true

    let i = 0
    let j = s.length - 1
    
    function isValidChar(c) {
        return (c.charCodeAt(0) > 96 && c.charCodeAt(0) < 123) || (c.charCodeAt(0) > 47 && c.charCodeAt(0) < 58)
    }
  
    while (i < j) {
        const curChar1 = s[i].toLowerCase()
        const curChar2 = s[j].toLowerCase()
        
        if (!isValidChar(curChar1)) {
            i++
            continue
        }

        if (!isValidChar(curChar2)) {
            j--
            continue
        }
    
        if (curChar1 !== curChar2) return false

        i++
        j--
    }
    
    // if (!isValidChar(s[i]) && !isValidChar(s[j])) {
    //     return false
    // }

    return true
};
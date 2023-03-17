/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let obj = {}

    for (let i = 0; i < s.length; i++) {
        if (!/^[a-zA-Z]$/.test(s[i])) {
            obj[i] = s[i]
        }
    }
    const letAns = s.split("").filter((letter) => /^[a-zA-Z]$/.test(letter)).reverse()
    
    for (ind of Object.keys(obj)) {
        letAns.splice(ind, 0, obj[ind])
    }
    return letAns.join("")
};
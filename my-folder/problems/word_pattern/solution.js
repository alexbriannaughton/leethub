/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let arr = s.split(" ")
    let sP = {}
    let sS = {}
    
    for (let i = 0; i < s.length; i++) {
        sP[pattern[i]] = i
        sS[arr[i]] = i
    }
    return Object.values(sP).join("") === Object.values(sS).join("")
};
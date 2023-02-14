/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sIdx = 0
    for (let i = 0; i < t.length; i++) {
        console.log(sIdx, s[sIdx], i, t[i])
        
        if (sIdx > s.length) return true
        if (s[sIdx] === t[i]) {
            sIdx += 1
        }
    }
    if (sIdx === s.length) return true
    return false
};
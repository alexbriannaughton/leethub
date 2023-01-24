/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let str = ""
    for(let i = 0; i < strs[0].length; i++) {
        let same = true
        for(let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                same = false
            }
        }
        if (same) {
            str += strs[0][i]
        } else break
    }
    return str
};
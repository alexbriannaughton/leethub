/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {

    let res = ""
    let count = 0
    
    for(let i = s.length - 1; i >= 0; i--) {
        if (s[i] === "-") continue

        if (count === k) {
            res = "-" + res
            count = 0
        }

        res = (s[i].toUpperCase()) + res

        count += 1
    }

    return res
};
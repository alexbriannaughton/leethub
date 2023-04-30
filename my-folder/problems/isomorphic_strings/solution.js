/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let count = 1
    let pattern = ""
    const obj = {}
    for (letter of s) {
        if (!obj[letter]) {
            obj[letter] = count
            count++
        }
        pattern += obj[letter]
    }
    const obj2 = {}
    count = 1
    let pattern2 = ""
    for (letter of t) {
        if (!obj2[letter]) {
            obj2[letter] = count
            count++
        }
        pattern2 += obj2[letter]  
    }
    return pattern === pattern2
};
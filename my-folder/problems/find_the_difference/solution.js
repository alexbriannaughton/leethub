/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    // v1
    // const obj = {}
    // for (char of s) {
    //     obj[char] = (obj[char] || 0) + 1
    // }
    // for (char of t) {
    //     if (!obj[char]) return char
    //     obj[char]--
    // }

    // v2
    s = s.split("")
    for (char of t) {
        const i = s.indexOf(char)
        if (i === -1) {
            return char
        }
        s.splice(i, 1)
    }
};
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    // const obj = {};
    // for (let i = 0; i < s.length; i++) {
    //     const char = s[i];
    //     obj[char]
    //         ? obj[char].count++
    //         : obj[char] = { count: 1, index: i }
    // }
    // for (char in obj) {
    //     if (obj[char].count === 1) {
    //         return obj[char].index
    //     }
    // }
    // return -1;

    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
};
/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    const output = []
    for (let i = 0; i < s.length - 2; i++) {
        const str = s.slice(i, i + 3)
        if (str[0] !== str[1] && str[1] !== str[2] && str[0] !== str[2]) {
            output.push(str)
        }
    }
    return output.length
};
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    charCounts = {}
    for (char of s) {
        charCounts[char] = (charCounts[char] || 0) + 1
    }

    const countsArr = Object.entries(charCounts)
        .sort((a, b) => b[1] - a[1])

    let output = ''
    for ([char, nOfChars] of countsArr) {
        output += char.repeat(nOfChars)
    }

    return output
};
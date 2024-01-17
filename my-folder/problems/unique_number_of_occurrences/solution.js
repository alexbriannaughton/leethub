/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const counts = {};
    for (const n of arr) {
        counts[n] ? counts[n]++ : counts[n] = 1;
    }
    const obj = {};
    for (const n in counts) {
        const count = counts[n];
        if (obj[count]) return false
        obj[count] = true
    }
    return true
};
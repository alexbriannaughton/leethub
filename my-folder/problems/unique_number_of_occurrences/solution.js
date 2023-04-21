/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const counts = {}
    for (n of arr) {
        counts[n] ? counts[n]++ : counts[n] = 1
    }
    const set = new Set(Object.values(counts))
    return set.size === Object.values(counts).length
};
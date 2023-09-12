/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    const counts = {}
    for (char of s) {
        counts[char] = (counts[char] || 0) + 1
    }

    let output = 0
    const set = new Set()
    for (char in counts) {
        let freq = counts[char]
        while (set.has(freq) && freq > 0) {
            freq--
            output++
        }
        set.add(freq)
    }

    return output
};
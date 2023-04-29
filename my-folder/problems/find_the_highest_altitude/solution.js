/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let high = 0
    let cur = 0
    for (alt of gain) {
        cur += alt
        high = Math.max(high, cur)
    }
    return high
};
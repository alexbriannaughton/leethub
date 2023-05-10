/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let count = 0;
    const max = Math.max(a, b)
    for (let i = 1; i <= max; i++) {
        if (a % i === 0 && b % i === 0) count++
    }
    return count
};
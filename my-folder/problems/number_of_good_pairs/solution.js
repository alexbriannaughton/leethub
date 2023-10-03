/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    const obj = {}
    for (n of nums) {
        obj[n] = (obj[n] || 0) + 1
    }
    let count = 0
    for (num in obj) {
        const n = obj[num]
        count += n * (n - 1) / 2
    }
    return count
};
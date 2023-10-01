/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function (nums) {
    const obj = {}
    for ([cur, end] of nums) {
        while (cur <= end) {
            obj[++cur] = true
        }
    }
    return Object.keys(obj).length
};
/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function (nums, original) {
    let current = original;
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === current) {
            current *= 2
            i = 0
        } else i++
    }
    return current
};
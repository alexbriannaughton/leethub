/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
    let acc = -1
    let minCurTotal = -1
    for (let i = 0; i < nums.length; i++) {
        acc += nums[i];
        minCurTotal = Math.min(minCurTotal, acc)
    }

    return -minCurTotal
};
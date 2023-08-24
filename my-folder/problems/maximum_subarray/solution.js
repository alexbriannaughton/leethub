/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // let sum = 0
    // let max = -Infinity
    // for (n of nums) {
    //     sum = Math.max(n, sum + n)
    //     max = Math.max(sum, max)
    // }
    // return max

    let sum = nums[0]
    let max = sum
    for (let i = 1; i < nums.length; i++) {
        const n = nums[i]
        sum += n
        n > sum
            ? sum = n
            : null
        sum > max
            ? max = sum
            : null
    }
    return max
};
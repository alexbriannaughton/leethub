/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    const max = Math.max(...nums)
    let ans = max

    for (let i = 1; i < k; i++) {
        ans += max + i
    }

    return ans
};
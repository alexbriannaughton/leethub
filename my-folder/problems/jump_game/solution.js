/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let target = nums.length - 1

    for (let i = target; i >= 0; i--) {
        const cur = nums[i]
        if (cur + i >= target) target = i
    }

    return target === 0
};
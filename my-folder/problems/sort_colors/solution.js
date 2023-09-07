/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const counts = {
        0: 0,
        1: 0,
        2: 0
    }

    for (n of nums) {
        counts[n]++
    }

    for (let i = 0; i < nums.length; i++) {
        if (counts[0]) {
            nums[i] = 0
            counts[0]--
        }
        else if (counts[1]) {
            nums[i] = 1
            counts[1]--
        }
        else {
            nums[i] = 2
        }
    }
    
};
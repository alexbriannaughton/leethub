/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const dups = [];

    for (num of nums) {
        const idx = Math.abs(num) - 1

        if (nums[idx] < 0) dups.push(Math.abs(num))

        else nums[idx] *= -1
    }
    
    return dups
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        const val = target - nums[i];
        if (obj[val] !== undefined) {
            return [i, obj[val]];
    }
        obj[nums[i]] = i;
    }
};
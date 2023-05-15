/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const count = {};

    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] ? count[nums[i]]++ : count[nums[i]] = 1
    }

    return nums.sort((a, b) => {
        if (count[a] === count[b]) return b - a
        return count[a] - count[b]
    })
};
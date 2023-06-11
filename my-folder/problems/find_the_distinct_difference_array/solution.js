/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    const leftSet = new Set();
    const rightSet = new Set(nums);

    for (let i = 0; i < nums.length; i++) {
        leftSet.add(nums[i]);
        if (!nums.slice(i + 1).includes(nums[i])) {
            rightSet.delete(nums[i]);
        }
        nums[i] = leftSet.size - rightSet.size;
    }
    return nums;
};
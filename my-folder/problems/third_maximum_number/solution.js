/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max1 = Math.max(...nums);
    let max2, max3;
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if (!max2 && cur < max1) max2 = cur
        if (cur !== max1) {
            if (cur > max2) max2 = cur;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if (!max3 && cur < max2) max3 = cur
        if (cur !== max1 && cur !== max2) {
            if (cur > max3) max3 = cur;
        }
    }
    return max3 === undefined ? max1 : max3;
};
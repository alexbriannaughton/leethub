/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const max = Math.max(...nums);
    let ind;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]; 

        if (num === max) ind = i;
        else if (num > max / 2) return -1;
    }
    
    return ind;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
    nums.sort((a, b) => b - a);

    let ops = 0;
    let prev = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === prev) continue;
        ops += i;
        prev = nums[i];
    }

    return ops;
};
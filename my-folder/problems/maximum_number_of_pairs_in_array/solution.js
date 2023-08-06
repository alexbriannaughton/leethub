/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    // find 2 of the same digit and remove them
    // do as many times as possible
    // count the number of pairs removed
    // count the amount that's leftover
    let count = 0;
    let i = 0;
    while (i < nums.length - 1) {
        let found = false;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
                nums.splice(j, 1);
                nums.splice(i, 1);
                found = true;
                break;
            }
        }
        if (!found) i++;
    }
    return [count, nums.length];
};
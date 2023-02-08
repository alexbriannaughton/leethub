/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // create empty object
    // iterate through nums
        // create key of nums[i] where value is a tally of each occurance
            // if a value exceeds n/2 return that key

    const obj = {}

    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = 1
        }
        else obj[nums[i]] += 1
        if (obj[nums[i]] > nums.length/2) {
            return nums[i]
        }
    }
};